import React from 'react';
import "../viewBooking/viewBoking.scss"
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import SidebarDoc from "../../../../components/sidebarDoctor/sidebarDoc";
import NavbarDoc from "../../../../components/navbarDoc/navbarDoc";
import Button from "@mui/material/Button";

const DoctorViewBooking: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate("/doctor/bookings/view_bookings");
    };

    return (
        <div className="appointments">
            <SidebarDoc />
            <div className="appointmentsContainer">
                <NavbarDoc />
                <div className="mainContent">
                    View Booking
                    <div className="subContent">
                        View Details of your Patients Bookings
                        <Box className="content">
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <div className="line">Patient's Name :</div>
                                    <div className="line">Date :</div>
                                    <div className="line">Appointment Number :</div>
                                    <div className="line">Age :</div>
                                    <div className="line">Gender :</div>
                                    <div className="line">Known Illnesses :</div>
                                    <div className="line">Known Allergies :</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="line"><b>Mr. Namal Rajapakshe</b></div>
                                    <div className="line"><b>2022/04/04</b></div>
                                    <div className="line"><b>04</b></div>
                                    <div className="line"><b>45 Years</b></div>
                                    <div className="line"><b>Male</b></div>
                                    <div className="line"><b>Asthma, Cancer</b></div>
                                    <div className="line"><b>None</b></div>
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
                            View Medical History
                        </Button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorViewBooking;
