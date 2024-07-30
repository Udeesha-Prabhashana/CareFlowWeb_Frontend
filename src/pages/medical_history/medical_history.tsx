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

interface MedicalRecords {
    patientName: string;
    age: number;
    gender: string;
    knownIllnesses: string;
    knownAllergies: string;
    otherDetails?: string;
}

const medicalRecords: MedicalRecords[] = [
    {
        patientName: "Kasun Jayasinghe",
        age: 30,
        gender: "Male",
        knownIllnesses: "Asthma, Cancer",
        knownAllergies: "None",
    },
];

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
    const [records, setRecords] = useState(medicalRecords);
    const [showInput, setShowInput] = useState<{ [key: number]: boolean }>({});
    const [inputValue, setInputValue] = useState<{ [key: number]: string }>({});

    const handleShowInput = (index: number) => {
        setShowInput(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        setInputValue(prevState => ({ ...prevState, [index]: event.target.value }));
    };

    const handleAddDetails = (index: number) => {
        const updatedRecords = [...records];
        updatedRecords[index].otherDetails = inputValue[index];
        setRecords(updatedRecords);
        setShowInput(prevState => ({ ...prevState, [index]: false }));
        setInputValue(prevState => ({ ...prevState, [index]: '' }));
    };

    const getCards = () => {
        return records.map((record, index) => (
            <React.Fragment key={index}>
                <Box sx={{ mb: 2 }}>
                    <Card variant="outlined" sx={{ border: '1px solid #855CDD' }}>
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
                                    {showInput[index] && (
                                        <Box mt={2} display="flex" flexDirection="column" alignItems="flex-start">
                                            <TextField
                                                fullWidth
                                                label="Other Details"
                                                value={inputValue[index] || ''}
                                                onChange={(e) => handleInputChange(e, index)}
                                            />
                                            <Box mt={1} display="flex" gap={1}>
                                                <Button
                                                    variant="contained"
                                                    style={{ backgroundColor: '#D2172C', color: '#fff' }}
                                                    onClick={() => handleShowInput(index)}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => handleAddDetails(index)}
                                                >
                                                    Add
                                                </Button>
                                            </Box>
                                        </Box>
                                    )}
                                    {!showInput[index] && (
                                        <Button variant="contained" color="primary" onClick={() => handleShowInput(index)}>
                                            Add Other Details
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </React.Fragment>
        ));
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="sideDocMRview">
                <SidebarPatient />
                <div className="navDocMRview">
                    {/*<NavbarDoc />*/}
                    <div className="mainContentDocMRview">
                        View Medical History
                        <div className="subContentDocMRview">
                            Select a Previous Appointment to See History
                        </div>
                        <div className="cardsContainer">
                            {getCards()}
                        </div>
                        <div>
                            <Box sx={{ mb: 2 }}>
                                <Accordion sx={{ border: '1px solid #855CDD' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        2024/04/08
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Medical Record
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '50%', height: 'auto' }}
                                            image={recordImage}
                                            alt="Medical Record 1"
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Accordion sx={{ border: '1px solid #855CDD' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        2023/12/09
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Medical Record 2
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '50%', height: 'auto' }}
                                            image={recordImage}
                                            alt="Medical Record 2"
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Accordion  sx={{ border: '1px solid #855CDD' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                    >
                                        2023/09/23
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Medical record 3
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '50%', height: 'auto' }}
                                            image={recordImage}
                                            alt="Medical Record 3"
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default ViewMedicalRecords;