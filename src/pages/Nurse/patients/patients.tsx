import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import SidebarNurse from "../../../components/sidebarNurse/sidebarNurse";
import "./patients.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router-dom';

// Define theme to customize Material UI components
const theme = createTheme({
    palette: {
        primary: {
            main: '#855CDD',
        },
    },
});

const BookingNurse: React.FC = () => {
    const [rows, setRows] = useState<{ number: number, name: string, patient_id: number }[]>([]); // Stores patient data
    const [loading, setLoading] = useState<boolean>(true); // Loading state for API call
    const [error, setError] = useState<string | null>(null); // Error state for API call
    const navigate = useNavigate(); // Navigate function for routing
    const { doctorId } = useParams<{ doctorId: string }>(); // Get doctorId from the URL

    // Fetch patient data from the API
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.REACT_APP_FASTAPI_BASE_URL}/patients_by_Doctor_id/${doctorId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch patients');
                }
                const data = await response.json();
                const patients = data.patients.map((patient: { name: string, number:number, patient_id:number }) => ({
                    name: patient.name, // Extract only the name
                    number: patient.number,
                    patient_id: patient.patient_id,
                }));
                setRows(patients);
            } catch (error) {
                setError('Error fetching patients');
            } finally {
                setLoading(false);
            }
        };

        if (doctorId) {
            fetchPatients();
        }
    }, [doctorId]);

    // Handle "View Details" button click
    const handleViewDetails = (row: { number: number, name: string, patient_id: number }) => {

        navigate("../nurse/patients/view_patients/"+doctorId+"/"+ row.patient_id);
    };

    return (
        <div className="sideNurse">
            <SidebarNurse />
            <div className="navNurse">
                <div className="mainContentNurseBooking">
                    <h1>Bookings</h1>
                    <div className="subContentNurseBooking">
                        View Details of your Patients Bookings
                    </div>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
                            {/* Empty grid for layout purposes */}
                            <Grid item xs />
                            <Grid item xs />
                        </Grid>
                    </ThemeProvider>

                    {/* Loading or error states */}
                    {loading && <p>Loading patients...</p>}
                    {error && <p>{error}</p>}

                    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="patient bookings">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Number</TableCell>
                                    <TableCell align="center">Patient's Name</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={row.number}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            backgroundColor: index % 2 === 0 ? '#EEE7FF' : 'inherit',
                                            boxShadow: index % 2 === 0 ? '0 4px 8px rgba(133, 92, 221, 0.3)' : 'none',
                                            height: '60px',
                                        }}
                                    >
                                        <TableCell align="center">{row.number}</TableCell>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    width: '138px',
                                                    height: '38px',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: '11px',
                                                    border: '1px solid #855CDD',
                                                    whiteSpace: 'nowrap',
                                                    color: '#855CDD',
                                                    textTransform: 'none',
                                                }}
                                                onClick={() => handleViewDetails(row)}
                                            >
                                                Upload Documents
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}

export default BookingNurse;
