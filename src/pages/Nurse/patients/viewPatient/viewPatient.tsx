import React from 'react';
import "../viewPatient/viewPatient.scss"
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import NavbarNurse from "../../../../components/navbarNurse/navbarNurse";
import SidebarNurse from "../../../../components/sidebarNurse/sidebarNurse";
import Button from "@mui/material/Button";

const NurseViewBooking: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate("/nurse/medical_records");
    };

    return (
        <div className="appointments">
            <SidebarNurse />
            <div className="appointmentsContainer">
                <NavbarNurse />
                <div className="mainContent">
                    View Patient
                    <div className="subContent">
                        View Details of the Patient
                        <Box className="content">
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <div className="line">Patient's Name :</div>
                                    <div className="line">Date :</div>
                                    <div className="line">Appointment Number :</div>
                                    <div className="line">Age :</div>
                                    <div className="line">Gender :</div>
                                    
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="line"><b>Mr. Namal Rajapakshe</b></div>
                                    <div className="line"><b>2022/04/04</b></div>
                                    <div className="line"><b>04</b></div>
                                    <div className="line"><b>45 Years</b></div>
                                    <div className="line"><b>Male</b></div>
                                    
                                </Grid>
                            </Grid>
                        </Box>
                        <Button
                            className="button"
                            variant="outlined"
                            sx={{
                                marginTop: '40px',
                                width: '180px',
                                height: '40px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '11px',
                                border: '1px solid var(--normal-hover, #855CDD)',
                                whiteSpace: 'nowrap',
                                backgroundColor: '#855CDD', // Default button color
                                color: 'white', // Text color for default state
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#5F2BCF', // Dark purple background on hover
                                    border: '1px solid #5F2BCF', // Dark purple border on hover
                                }
                            }}
                            onClick={handleViewDetails}
                        >
                            Upload Medical Records
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NurseViewBooking;
