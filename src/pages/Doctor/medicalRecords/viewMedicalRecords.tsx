import React from 'react';
import "../medicalRecords/viewMedicalRecords.scss";
import NavbarDoc from "../../../components/navbarDoc/navbarDoc";
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import recordImage from '../../../components/images/doctor/record1.png';

interface MedicalRecords {
    patientName: string;
    age: number;
    gender: string;
    knownIllnesses: string;
    knownAllergies: string;
}

const medicalRecords: MedicalRecords[] = [
    {
        patientName: "Ravinda Alahakoon",
        age: 35,
        gender: "male",
        knownIllnesses: "Asthma, cancer",
        knownAllergies: "none"
    },
];

const ViewMedicalRecords: React.FC = () => {

    const getCards = () => {
        return medicalRecords.map((record, index) => (
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
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className="line"><b>{record.patientName}</b></Typography>
                                    <Typography className="line"><b>{record.age} Years</b></Typography>
                                    <Typography className="line"><b>{record.gender}</b></Typography>
                                    <Typography className="line"><b>{record.knownIllnesses}</b></Typography>
                                    <Typography className="line"><b>{record.knownAllergies}</b></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </React.Fragment>
        ));
    };

    return (
        <div className="sideDocMRview">
            <SidebarDoc />
            <div className="navDocMRview">
                <NavbarDoc />
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
    );
};

export default ViewMedicalRecords;
