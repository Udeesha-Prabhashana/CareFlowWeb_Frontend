import React from 'react';
import "../revenueRecords/revenueRecords.scss";
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import NavbarDoc from "../../../components/navbarDoc/navbarDoc";
import { Grid, Box } from '@mui/material';
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

const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Revenue Over Time',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#9D7CE5',
        },
    ],
};

const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Monthly Revenue',
            data: [1000, 1500, 1200, 1700, 1600, 2000],
            backgroundColor: '#9D7CE5',
        },
    ],
};

const historyRows = [
    { date: '02/07/2024', number: 23, revenue: 25000 },
    { date: '02/07/2024', number: 12, revenue: 25000 },
    { date: '02/07/2024', number: 34, revenue: 25000 },
    { date: '02/07/2024', number: 12, revenue: 25000 },
];

const RevenueRecords: React.FC = () => {
    return (
        <div className="sideDocRR">
            <SidebarDoc />
            <div className="navDocRR">
                <NavbarDoc />
                <div className="mainContentDocRR">
                    Revenue Records
                    <div className="subContentDocRR">
                        View Details of your Revenues
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="chartContainer">
                                <Line data={lineChartData} />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="chartContainer">
                                <Bar data={barChartData} />
                            </div>
                        </Grid>
                    </Grid>
                    <Box my={6}> {/* Increase margin here */}
                        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Date</TableCell>
                                        <TableCell align="center">Number of Patients</TableCell>
                                        <TableCell align="center">Revenue (LKR)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {historyRows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 },
                                                backgroundColor: index % 2 === 0 ? '#EEE7FF' : 'inherit',
                                                boxShadow: index % 2 === 0 ? '0 4px 8px rgba(133, 92, 221, 0.3)' : 'none',
                                                height: '60px', // Add height to avoid overlapping
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
    );
};

export default RevenueRecords;
