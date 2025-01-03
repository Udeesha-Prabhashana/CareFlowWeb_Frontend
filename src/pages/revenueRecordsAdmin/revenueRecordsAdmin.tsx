import React, { useEffect, useState } from 'react';
import "./revenueRecordsAdmin.scss";
import SidebarAdmin from "../../components/sidebarAdmin/sidebarAdmin";
import { Grid, Box, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import axios from 'axios';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'; // To capture content as an image
import 'jspdf-autotable';
import { ChartData } from 'chart.js';

// Extend jsPDF with autoTable
declare module 'jspdf' {
    interface jsPDF {
        autoTable: (options: any) => jsPDF;
    }
}

// Define the type for lineChartData
type LineChartData = ChartData<'line', (number | null)[], unknown>;

// Define the type for barChartData
type BarChartData = ChartData<'bar', (number | null)[], unknown>;

const RevenueRecordsAdmin: React.FC = () => {
    const [revenueData, setRevenueData] = useState<any[]>([]);

    // Initialize chart data with an empty dataset structure
    const [lineChartData, setLineChartData] = useState<LineChartData>({
        labels: [],
        datasets: [
            {
                label: 'Revenue Over Time',
                data: [],
                fill: false,
                borderColor: '#9D7CE5',
            },
        ],
    });

    const [barChartData, setBarChartData] = useState<BarChartData>({
        labels: [],
        datasets: [
            {
                label: 'Monthly Revenue',
                data: [],
                backgroundColor: '#9D7CE5',
            },
        ],
    });

    // Fetch revenue data from the backend
    const fetchRevenueData = async () => {
        try {
            const user = localStorage.getItem("user");
            let token = null;

            // Check if user is in localStorage and extract the token
            if (user) {
                const parsedUser = JSON.parse(user);
                token = parsedUser.access_token;
            }

            if (token) {
                // Make an API request with the token in the Authorization header
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/revenue`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                    },
                });

                // Assuming response data contains `revenue`, `lineChart`, and `barChart`
                const { revenue, lineChart, barChart } = response.data;

                // Update state with the fetched data
                setRevenueData(revenue);

                setLineChartData({
                    labels: lineChart.labels,
                    datasets: [
                        {
                            label: 'Revenue Over Time',
                            data: lineChart.data,
                            fill: false,
                            borderColor: '#9D7CE5',
                        },
                    ],
                });

                setBarChartData({
                    labels: barChart.labels,
                    datasets: [
                        {
                            label: 'Monthly Revenue',
                            data: barChart.data,
                            backgroundColor: '#9D7CE5',
                        },
                    ],
                });
            } else {
                console.error("Token is missing from localStorage");
            }
        } catch (error) {
            console.error("Failed to fetch revenue data:", error);
        }
    };

    // Call fetchRevenueData when the component mounts
    useEffect(() => {
        fetchRevenueData();
    }, []);

    // Generate the report (PDF)
    const generateReport = async () => {
        console.log("Generate report clicked");
        const doc = new jsPDF();

        // Capture the charts and table content as images
        const content = document.getElementById('reportContent');
        
        if (content) {
            await html2canvas(content).then((canvas) => {
                console.log("Canvas generated", canvas); // Debugging line
                const imgData = canvas.toDataURL('image/png');
                
                // Add image to PDF
                doc.addImage(imgData, 'PNG', 10, 10, 180, 160); // Adjust the dimensions as needed
                
                // Add title to the PDF
                doc.setFontSize(18);
                doc.text('Revenue Records Report', 10, 180);
                
                // Add the table below the chart image
                doc.autoTable({
                    startY: 200,
                    head: [['Month', 'Number of Patients', 'Revenue (LKR)']],
                    body: revenueData.map((row) => [row.date, row.number, row.revenue]),
                });
                
                // Save the generated PDF
                doc.save('revenue_report.pdf');
            });
        }
    };

    return (
        <div className="sideAdmRR">
            <SidebarAdmin />
            <div className="navAdmRR">
                <div className="mainContentAdmRR">
                    Revenue Records
                    <div className="subContentAdmRR">View Details of your Revenues</div>
                    <br /><br />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={generateReport}
                        size="small"  // Make the button smaller
                        sx={{ 
                            display: 'flex', 
                            marginLeft: '850px',  // Align to the right
                            justifyContent: 'flex-start',  // Align to the right
                            width: '160px',  // Set width to auto to reduce the background color width
                            paddingLeft: 2, // Optional: Adjust padding if needed
                            paddingRight: 2, // Optional: Adjust padding if needed
                        }}
                        >
                        Generate Report
                        </Button>

                    <div id="reportContent">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <div className="chartContainerAdmRR">
                                    <Line data={lineChartData} />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="chartContainerAdmRR">
                                    <Bar data={barChartData} />
                                </div>
                            </Grid>
                        </Grid>
                        <Box my={6}>
                            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Month</TableCell>
                                            <TableCell align="center">Number of Patients</TableCell>
                                            <TableCell align="center">Revenue (LKR)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {revenueData.map((row: any, index: number) => (
                                            <TableRow
                                                key={index}
                                                sx={{
                                                    '&:last-child td, &:last-child th': { border: 0 },
                                                    backgroundColor: index % 2 === 0 ? '#EEE7FF' : 'inherit',
                                                    boxShadow: index % 2 === 0 ? '0 4px 8px rgba(133, 92, 221, 0.3)' : 'none',
                                                    height: '60px',
                                                }}
                                            >
                                                <TableCell align="center">{row.date}</TableCell>
                                                <TableCell align="center">{row.number}</TableCell>
                                                <TableCell align="center">{row.revenue}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueRecordsAdmin;
