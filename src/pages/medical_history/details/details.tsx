import React, { useState } from 'react';
import "../../medical_history/details/details.scss";
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
import recordImage from '../../../components/images/doctor/record1.png';
import SidebarPatient from "../../../components/sidebarPatient/sidebarPatient";

interface MedicalRecords {
    patientName: string;
    age: number;
    gender: string;
    knownIllnesses: string;
    knownAllergies: string;
}

const medicalRecords: MedicalRecords[] = [
    {
        patientName: "Dr. Namal Jayasinghe",
        age: 35,
        gender: "male",
        knownIllnesses: "Asthma, cancer",
        knownAllergies: "none",
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

const ViewMedicalRecordsPatient: React.FC = () => {
    const [records, setRecords] = useState(medicalRecords);
    const [showInput, setShowInput] = useState<{ [key: number]: boolean }>({});
    const [inputValue, setInputValue] = useState<{ [key: number]: string }>({});

    const handleShowInput = (index: number) => {
        setShowInput(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        setInputValue(prevState => ({ ...prevState, [index]: event.target.value }));
    };

    const getCards = () => {
        return records.map((record, index) => (
            <Box sx={{ mb: 2 }} key={index}>
                <Card variant="outlined" sx={{ border: '1px solid #855CDD' }}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography className="line">Doctor's Name :</Typography>
                                <Typography className="line">Age :</Typography>
                                <Typography className="line">Gender :</Typography>
                                <Typography className="line">Known Illnesses :</Typography>
                                <Typography className="line">Known Allergies :</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className="line"><b>{record.patientName}</b></Typography>
                                <Typography className="line"><b>{record.age} Years</b></Typography>
                                <Typography className="line"><b>{record.gender}</b></Typography>
                                <Typography className="line"><b>{record.knownIllnesses}</b></Typography>
                                <Typography className="line"><b>{record.knownAllergies}</b></Typography>
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
                                        </Box>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        ));
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="sideMRview">
                <SidebarPatient />
                <div className="navMRview">
                    <div className="mainContentMRview">
                        View Medical History
                        <div className="subContentMRview">
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
                                <Accordion sx={{ border: '1px solid #855CDD' }}>
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

export default ViewMedicalRecordsPatient;
