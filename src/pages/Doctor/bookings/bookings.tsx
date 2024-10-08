import React, { useState } from "react";
import Button from '@mui/material/Button';
import NavbarDoc from "../../../components/navbarDoc/navbarDoc";
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import "../bookings/bookings.scss";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#855CDD',
        },
    },
});

const historyRows = [
    { number: 1, name: 'Namal Rajapakshe' },
    { number: 2, name: 'Dasuni Gamage' },
    { number: 3, name: 'Chris Evan' },
    { number: 4, name: 'Gayan Perera' },
];

const todayRows = [
    { number: 1, name: 'Sandani Gamage' },
    { number: 2, name: 'Piyath Rajapakshe' },
    { number: 3, name: 'Nelly Jackson' },
    { number: 4, name: 'Kasun Priyantha' },
    { number: 5, name: 'Abdulla Naseem' },
];

const upcomingRows = [
    { number: 1, name: 'Abdulla Afar' },
    { number: 2, name: 'Piyath Rajapakshe' },
    { number: 3, name: 'Kasuni Wedege' },
];

const BookingDoc: React.FC = () => {
    const [alignment, setAlignment] = useState('today');
    const [rows, setRows] = useState(todayRows);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            if (newAlignment === 'history') {
                setRows(historyRows);
            } else if (newAlignment === 'today') {
                setRows(todayRows);
            } else {
                setRows(upcomingRows);
            }
        }
    };

    const handleViewDetails = (row: { number: number, name: string }) => {
        console.log('View details for:', row);
        navigate("/doctor/bookings/view_bookings");
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredRows = rows.filter(row => row.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                            <Grid item>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Appointments"
                                    sx={{
                                        '& .MuiToggleButton-root': {
                                            width: '153px',
                                            height: '42px',
                                            borderRadius: '9px',
                                            border: '1px solid #855CDD',
                                            fontSize: '18px',
                                            mr: 2,
                                            textTransform: 'none',
                                            '&:hover': {
                                                background: '#855CDD',
                                                color: 'white',
                                            },
                                            '&.Mui-selected': {
                                                background: '#855CDD',
                                                color: 'white',
                                                border: '1px solid #855CDD',
                                            },
                                        }
                                    }}
                                >
                                    <ToggleButton value="history">History</ToggleButton>
                                    <ToggleButton value="today">Today</ToggleButton>
                                    <ToggleButton value="upcoming">Upcoming</ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item xs />
                            <Grid item>
                                <TextField
                                    label="Search by Name"
                                    variant="outlined"
                                    value={searchTerm}
                                    onChange={handleSearch}
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

export default BookingDoc;
