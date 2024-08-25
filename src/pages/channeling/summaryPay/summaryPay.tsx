import React, { useEffect } from 'react';
import "../../channeling/summaryPay/summaryPay.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import SidebarPatient from "../../../components/sidebarPatient/sidebarPatient";
import Button from "@mui/material/Button";

const BookingSummaryPay: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Extract data from location state
    const state = location.state as {
        doctor?: any;
        selectedDate: string;
        availableAppointments: number;
        patientName?: string;
        patientAge?: string;
        patientSex?: string;
        patientAddress?: string;
    };

    // Destructure state
    const {
        doctor,
        selectedDate,
        availableAppointments,
        patientName,
        patientAge,
        patientSex,
        patientAddress
    } = state || {};

    // Handle payment later
    const handlePayLater = () => {
        navigate("/appointments");
    };

    // Initialize payment on component mount
    useEffect(() => {
        const payHereScript = document.createElement('script');
        payHereScript.src = "https://www.payhere.lk/lib/payhere.js";
        payHereScript.async = true;
        document.body.appendChild(payHereScript);

        return () => {
            document.body.removeChild(payHereScript);
        };
    }, []);

    // Start payment process
    const initiatePayment = () => {
        const payment = {
            sandbox: true, // Use false for live payments
            merchant_id: '1227782',
            return_url: 'http://localhost:3000/bookingSummaryPay',
            cancel_url: 'http://localhost:3000/bookingSummaryPay',
            notify_url: 'http://sample.com/notify',
            order_id: 'ItemNo12345',
            items: 'Doctor Appointment',
            amount: '3000.00',
            currency: 'LKR',
            first_name: patientName || 'Unknown',
            last_name: '', // Consider adding last name if available
            email: '', // Consider adding email if available
            phone: '', // Consider adding phone number if available
            address: patientAddress || 'N/A',
            city: 'Colombo',
            country: 'Sri Lanka',
        };

        // Trigger the payment
        (window as any).payhere.startPayment(payment);
    };

    if (!doctor) {
        return <div>No doctor information available.</div>;
    }

    return (
        <div className="appointments">
            <SidebarPatient />
            <div className="appointmentsContainer">
                <div className="mainContent">
                    <h1>Booking Summary</h1>
                    <div className="subContent">
                        <p>View and Confirm The Booking Details</p>
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
                                    <div className="line"><b>{doctor.name}</b></div>
                                    <div className="line"><b>{selectedDate}</b></div>
                                    <div className="line"><b>{availableAppointments}</b></div>
                                    <div className="line"><b>06:50</b></div> {/* Replace with actual time if available */}
                                    <div className="line"><b>Rs.3000</b></div> {/* Replace with actual amount if different */}
                                    <div className="line"><b>{patientName}</b></div>
                                    <div className="line"><b>{patientAge}</b></div>
                                    <div className="line"><b>{patientSex}</b></div>
                                    <div className="line"><b>{patientAddress}</b></div>
                                </Grid>
                            </Grid>
                            <Box sx={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                                <Button
                                    className="button"
                                    variant="outlined"
                                    sx={{
                                        width: '150px',
                                        height: '40px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '11px',
                                        border: '1px solid #B0B0B0',
                                        backgroundColor: '#B0B0B0', // Grey color
                                        color: 'white',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#8C8C8C',
                                            border: '1px solid #8C8C8C',
                                        }
                                    }}
                                    onClick={handlePayLater}
                                >
                                    Pay Later
                                </Button>
                                <Button
                                    className="button"
                                    variant="outlined"
                                    sx={{
                                        width: '150px',
                                        height: '40px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '11px',
                                        border: '1px solid #855CDD',
                                        backgroundColor: '#855CDD', // Purple color
                                        color: 'white',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#5F2BCF',
                                            border: '1px solid #5F2BCF',
                                        }
                                    }}
                                    onClick={initiatePayment}
                                >
                                    Pay Now
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSummaryPay;
