import React, { useState } from 'react';
import "../medicalRecords/medicalRecords.scss";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import NavbarDoc from "../../../components/navbarDoc/navbarDoc";

interface MedicalRecords {
    date: string;
    name: string;
    title: string;
}

const medicalRecords: MedicalRecords[] = [
    { date: "23/05/2024", name: "Dr. Pradeep Rangana", title: "MBBS, Gastroenterologist" },
    { date: "15/06/2024", name: "Prof. Athula Adikari", title: "MD, Cardiologist" },
    { date: "02/07/2024", name: "Dr. Dasun Jayasinghe", title: "PhD, Neurologist" },
    { date: "19/08/2024", name: "Dr. Dasun Jayasinghe", title: "DO, Dermatologist" }
];

const MedicalRecords: React.FC = () => {
    const navigate = useNavigate();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#855CDD',
            },
            secondary: {
                main: '#FFA07A',
            },
        },
    });



    const handleViewDetails = () => {
        navigate("/doctor/view_medicalRecords");
    };

    const getCards = () => {
        return medicalRecords.map((record, index) => (
            <Box key={index} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: 'var(--Normal, var(--Normal-Normal, #855CDD))',
                                fontSize: '30px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                                paddingTop: '10px',

                            }}
                        >
                            {record.date}
                        </Typography>
                        <Typography
                            sx={{
                                // mb: 1.5,
                                color: '#000',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                                paddingTop: '22px',
                            }}
                        >
                            {record.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '300',
                                lineHeight: '20px',
                            }}
                        >
                            {record.title}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 2 }}>
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
                            onClick={handleViewDetails}
                        >
                            View Record
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        ));
    };

    return (
        <div className="sideDocMR">
            <SidebarDoc />
            <div className="navDocMR">
                <NavbarDoc />
                <div className="mainContentDocMR">
                    View Medical History
                    <div className="subContentDocMR">
                        Select a Previous Appointment to See History
                        <ThemeProvider theme={theme}>
                            <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
                                <Grid item xs />
                                <Grid item>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            defaultValue={dayjs('2022-04-17')}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </ThemeProvider>
                    </div>

                    <div className="cardsContainer">
                        {getCards()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalRecords;
