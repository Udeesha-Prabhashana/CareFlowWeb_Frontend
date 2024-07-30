import React, { useState } from 'react';
import "./viewPatient.scss";
import SidebarNurse from "../../../../components/sidebarNurse/sidebarNurse";
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
import recordImage from '../../../../components/images/doctor/record1.png';
import { useNavigate } from 'react-router-dom';

interface MedicalRecords {
    patientName: string;
    age: number;
    gender: string;
    knownIllnesses: string;
    knownAllergies: string;
    otherDetails?: string;
    uploadedFile: File | null;
}

const medicalRecords: MedicalRecords[] = [
    {
        patientName: "Ravinda Alahakoon",
        age: 35,
        gender: "male",
        knownIllnesses: "Asthma, cancer",
        knownAllergies: "none",
        uploadedFile: null, // Initialize as null
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
    const navigate = useNavigate();
    const [showInput, setShowInput] = useState<{ [key: number]: boolean }>({});
    const [inputValue, setInputValue] = useState<{ [key: number]: string }>({});
    const [records, setRecords] = useState(medicalRecords);
    const [uploadedFiles, setUploadedFiles] = useState<{ [key: number]: File | null }>({});

    

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        
        navigate("./nurse/patient/uploadPatientRecords");
    };

    const handleAddDetails = (index: number) => {
        const updatedRecords = [...records];
        updatedRecords[index].uploadedFile = uploadedFiles[index];
        setRecords(updatedRecords);
        setUploadedFiles(prevState => ({ ...prevState, [index]: null }));
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
                                
                                    <Box mt={1} display="flex" marginLeft="10px" marginTop='30px' gap={1}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            
                                            onClick={() => navigate("../nurse/patient/uploadPatientRecords")}
                                        >
                                        Upload Medical Records
                                        
                                        </Button>
                                    </Box>
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
                <SidebarNurse />
                <div className="navDocMRview">
                    <div className="mainContentDocMRview">
                        View Medical History
                        <div className="subContentDocMRview">
                            Select a Previous Appointment to See History
                        </div>
                        <div className="cardsContainer">
                            {getCards()}
                        </div>
                        <div>
           
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default ViewMedicalRecords;