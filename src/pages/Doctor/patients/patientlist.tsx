import React, { useState } from "react";
import Button from '@mui/material/Button';
import NavbarDoc from "../../../components/navbarDoc/navbarDoc";
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import "../../Doctor/patients/patientlist.scss";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#855CDD',
        },
    },
});

const patientRows = [
    { number: 1, name: 'Namal Rajapakshe' },
    { number: 2, name: 'Dasuni Gamage' },
    { number: 3, name: 'Chris Evan' },
    { number: 4, name: 'Gayan Perera' },
    { number: 5, name: 'Sandani Gamage' },
    { number: 6, name: 'Piyath Rajapakshe' },
    { number: 7, name: 'Nelly Jackson' },
    { number: 8, name: 'Kasun Priyantha' },
    { number: 9, name: 'Abdulla Naseem' },
    { number: 10, name: 'Abdulla Afar' },
    { number: 11, name: 'Kasuni Wedege' },
];

const PatientList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState(patientRows);
    const navigate = useNavigate();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);
        setFilteredRows(patientRows.filter(row => row.name.toLowerCase().includes(searchValue)));
    };

    const handleViewDetails = (row: { number: number, name: string }) => {
        console.log('View details for:', row);
        navigate("/doctor/view_medicalRecords");
    };

    return (
        <div className="sideDoc">
            <SidebarDoc />
            <div className="navDoc">
                {/*<NavbarDoc />*/}
                <div className="mainContentDocBooking">
                    Bookings
                    <div className="subContentDocBooking">
                        View Details of your Patients Bookings
                    </div>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
                            <Grid item xs />
                            <Grid item>
                                <TextField
                                    label="Search by Name"
                                    variant="outlined"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    sx={{ width: '300px' }}
                                />
                            </Grid>
                        </Grid>
                    </ThemeProvider>

                    <TableContainer component={Paper} sx={{ boxShadow: 'none' }} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Number</TableCell>
                                    <TableCell align="center">Patient's Name</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredRows.map((row, index) => (
                                    <TableRow
                                        key={row.number}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            backgroundColor: index % 2 === 0 ? '#EEE7FF' : 'inherit',
                                            boxShadow: index % 2 === 0 ? '0 4px 8px rgba(133, 92, 221, 0.3)' : 'none',
                                            height: '60px' // Add height to avoid overlapping
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
                                                    border: '1px solid var(--normal-hover, #5F2BCF)',
                                                    whiteSpace: 'nowrap',
                                                    color: '#855CDD',
                                                    textTransform: 'none',
                                                }}
                                                onClick={() => handleViewDetails(row)}
                                            >
                                                View Details
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

export default PatientList;
