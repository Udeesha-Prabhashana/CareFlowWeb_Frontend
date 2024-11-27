import React, { useEffect } from 'react';
import "../../channeling/summaryPay/summaryPay.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import SidebarPatient from "../../../components/sidebarPatient/sidebarPatient";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

const BookingSummaryPay: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Extract data from location state
    const state = location.state as {
        doctor?: any;
        selectedDate: string;
        time: string;
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
        time,
        availableAppointments,
        patientName,
        patientAge,
        patientSex,
        patientAddress
    } = state || {};

    // Handle payment later
    const handlePayLater = async () => {
        try {
            // Retrieve the access_token from localStorage
            const user = localStorage.getItem('user');
            let token = null;

            if (user) {
                    const parsedUser = JSON.parse(user);
                    token = parsedUser.access_token;

            // Prepare the request body
            const requestBody = {
                doctorId: doctor?.id || 0, // Ensure doctor ID is set
                appointmentDate: selectedDate,
                slotNumber: availableAppointments, // Example slot number calculation
                status: 0, // Assuming status is 0 for a pending appointment
                reasonForVisit: "Routine check-up",
                payment: 0 // Payment is 0 for 'Pay Later'
            };

            // Make the API call
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/add_appointment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                // Handle success response
                toast.success('Appointment has been added successfully.');
                navigate("/appointments");
            } else {
                // Handle error response
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } else {
            toast.error("Field Authentication");
        }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the appointment.');
        }
    };

    // Initialize payment on component mount
    // useEffect(() => {
    //     const payHereScript = document.createElement('script');
    //     // payHereScript.src = "https://www.payhere.lk/lib/payhere.js";
    //     payHereScript.async = true;
    //     document.body.appendChild(payHereScript);

    //     return () => {
    //         document.body.removeChild(payHereScript);
    //     };
    // }, []);

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
                                    <div className="line">Scheduled Time :</div>
                                    <div className="line">Total Amount: </div>
                                    <div className="line">Patient Name :</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="line"><b>{doctor.name}</b></div>
                                    <div className="line"><b>{selectedDate}</b></div>
                                    <div className="line"><b>{availableAppointments}</b></div>
                                    <div className="line"><b>{time || ""}</b></div> {/* Replace with actual time if available */}
                                    <div className="line"><b>{doctor.docCharge + 1000}</b></div> {/* Replace with actual amount if different */}
                                    <div className="line"><b>{patientName}</b></div>
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
