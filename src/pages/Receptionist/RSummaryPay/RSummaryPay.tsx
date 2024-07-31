import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import SidebarRec from '../../../components/sidebarRec/SidebarRec';
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from "../../../context/AuthContext";
import Button from "@mui/material/Button";
import { toast } from 'react-toastify'; // Import toast for notifications

declare const payhere: any;

const RSummaryPay: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const payHereScript = document.createElement('script');
        payHereScript.src = "https://www.payhere.lk/lib/payhere.js";
        payHereScript.async = true;
        document.body.appendChild(payHereScript);

        return () => {
            document.body.removeChild(payHereScript);
        };
    }, []);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentConfirmed(event.target.checked);
    };

    const handleComplete = () => {
        if (user) {
            toast.error("Error Occurred while booking!"); // Show error toast
        } else {
            toast.success("Successfully Booked!"); // Show success toast
            navigate("/receptionist/bookings");
        }
    };

    return (
        <div className="appointments">
            <SidebarRec />
            <div className="appointmentsContainer">
                <div className="mainContent">
                    Booking Summary
                    <div className="subContent">
                        View and Confirm The Booking Details
                        <Box className="content">
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <div className="line">Doctor Name :</div>
                                    <div className="line">Date :</div>
                                    <div className="line">Appointment Number :</div>
                                    <div className="line">Time :</div>
                                    <div className="line">Total Amount: </div>
                                    <div className="line">Patient Name :</div>
                                    <div className="line">Age :</div>
                                    <div className="line">Sex :</div>
                                    <div className="line">Address :</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="line"><b>Dr. Ravindra Alahakoon</b></div>
                                    <div className="line"><b>2022/04/04</b></div>
                                    <div className="line"><b>23</b></div>
                                    <div className="line"><b>06:50</b></div>
                                    <div className="line"><b>Rs.3000 </b></div>
                                    <div className="line"><b>Mr. Kamal Sahanandu</b></div>
                                    <div className="line"><b>35 Years</b></div>
                                    <div className="line"><b>Male</b></div>
                                    <div className="line"><b>No.25, Havelock Rd, Nugegoda</b></div>
                                </Grid>
                            </Grid>
                            <Box sx={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                                <Checkbox
                                    checked={paymentConfirmed}
                                    onChange={handleCheckboxChange}
                                    sx={{
                                        color: '#855CDD',
                                        '&.Mui-checked': {
                                            color: '#855CDD',
                                        },
                                    }}
                                />
                                <span style={{ color: '#855CDD', fontWeight: 'bold', marginTop:'10px' }}>Paid</span>
                                {paymentConfirmed && (
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: '150px',
                                            height: '40px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '11px',
                                            backgroundColor: '#855CDD',
                                            color: 'white',
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: '#5F2BCF',
                                            },
                                            marginLeft:'20px'
                                        }}
                                        onClick={handleComplete}
                                    >
                                        Completed
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RSummaryPay;
