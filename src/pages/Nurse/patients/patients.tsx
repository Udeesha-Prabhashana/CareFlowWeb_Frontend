import React, { useState } from "react";
import Button from '@mui/material/Button';
import SidebarNurse from "../../../components/sidebarNurse/sidebarNurse";
import "./patients.scss";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";
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

const BookingNurse: React.FC = () => {
    const [alignment, setAlignment] = useState('today');
    const [rows, setRows] = useState(todayRows);
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
        navigate("../nurse/patients/view_patients");
    };

    return (
        <div className="sideNurse">
            <SidebarNurse />
            <div className="navNurse">
                <div className="mainContentNurseBooking">
                    Bookings
                    <div className="subContentNurseBooking">
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
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'DatePicker',
                                            'MobileDatePicker',
                                            'DesktopDatePicker',
                                        ]}
                                    >
                                        <DemoItem>
                                            <DesktopDatePicker
                                                defaultValue={dayjs('2022-04-17')}
                                            />
                                        </DemoItem>
                                    </DemoContainer>
                                </LocalizationProvider>
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
                                {rows.map((row, index) => (
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

export default BookingNurse;
