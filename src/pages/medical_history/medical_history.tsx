import React, { useState } from 'react';
import "./medical_history.scss";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import recordImage from '../../components/images/doctor/record1.png';

interface Appointment {
    doctorName: string;
    doctorPosition: string;
    appointmentDate: string;
    recordImage: string;
}

interface MedicalRecords {
    patientName: string;
    age: number;
    gender: string;
    knownIllnesses: string;
    knownAllergies: string;
    otherDetails?: string;
    appointments: Appointment[];
}

const medicalRecords: MedicalRecords = {
    patientName: "Kasun Jayasinghe",
    age: 30,
    gender: "Male",
    knownIllnesses: "Asthma, Cancer",
    knownAllergies: "None",
    appointments: [
        {
            doctorName: "Dr. John Doe",
            doctorPosition: "Cardiologist",
            appointmentDate: "2024/04/08",
            recordImage: recordImage,
        },
        {
            doctorName: "Dr. Jane Smith",
            doctorPosition: "Oncologist",
            appointmentDate: "2023/12/09",
            recordImage: recordImage,
        },
        {
            doctorName: "Dr. Emily Brown",
            doctorPosition: "Pulmonologist",
            appointmentDate: "2023/09/23",
            recordImage: recordImage,
        },
    ],
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#855CDD',
        },
        secondary: {
            main: '#855CDD',
        },
    },
});

const ViewMedicalRecords: React.FC = () => {
    const [record, setRecord] = useState(medicalRecords);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleShowInput = () => {
        setShowInput(!showInput);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddDetails = () => {
        setRecord(prevRecord => ({
            ...prevRecord,
            otherDetails: inputValue,
        }));
        setShowInput(false);
        setInputValue('');
    };

    const getAccordions = () => {
        return record.appointments.map((appointment, index) => (
            <Box sx={{ mb: 2 }} key={index}>
                <Accordion sx={{ border: '1px solid #855CDD' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography>{appointment.appointmentDate} - {appointment.doctorName}, {appointment.doctorPosition}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Medical Record
                        </Typography>
                        <CardMedia
                            component="img"
                            sx={{ width: '50%', height: 'auto' }}
                            image={appointment.recordImage}
                            alt={`Medical Record ${index + 1}`}
                        />
                    </AccordionDetails>
                </Accordion>
            </Box>
        ));
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="sideDocMRview">
                <SidebarPatient />
                <div className="navDocMRview">
                    {/*<NavbarDoc />*/}
                    <div className="mainContentDocMRview">
                        <Typography variant="h4">View Medical History</Typography>
                        <div className="subContentDocMRview">
                            <Typography variant="h6">Patient Details</Typography>
                            <Card variant="outlined" sx={{ mb: 2, border: '1px solid #855CDD' }}>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography className="line">Patient's Name :</Typography>
                                            <Typography className="line">Age :</Typography>
                                            <Typography className="line">Gender :</Typography>
                                            <Typography className="line">Known Illnesses :</Typography>
                                            <Typography className="line">Known Allergies :</Typography>
                                            {record.otherDetails && <Typography className="line">Other Details :</Typography>}
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className="line"><b>{record.patientName}</b></Typography>
                                            <Typography className="line"><b>{record.age} Years</b></Typography>
                                            <Typography className="line"><b>{record.gender}</b></Typography>
                                            <Typography className="line"><b>{record.knownIllnesses}</b></Typography>
                                            <Typography className="line"><b>{record.knownAllergies}</b></Typography>
                                            {record.otherDetails && <Typography className="line"><b>{record.otherDetails}</b></Typography>}
                                        </Grid>
                                        <Grid item xs={3}>
                                            {showInput && (
                                                <Box mt={2} display="flex" flexDirection="column" alignItems="flex-start">
                                                    <TextField
                                                        fullWidth
                                                        label="Other Details"
                                                        value={inputValue}
                                                        onChange={handleInputChange}
                                                    />
                                                    <Box mt={1} display="flex" gap={1}>
                                                        <Button
                                                            variant="contained"
                                                            style={{ backgroundColor: '#D2172C', color: '#fff' }}
                                                            onClick={handleShowInput}
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            onClick={handleAddDetails}
                                                        >
                                                            Add
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            )}
                                            {!showInput && (
                                                <Button variant="contained" color="primary" onClick={handleShowInput}>
                                                    Add Other Details
                                                </Button>
                                            )}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Typography variant="h6">Previous Appointments</Typography>
                            <div className="cardsContainer">
                                {getAccordions()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default ViewMedicalRecords;
