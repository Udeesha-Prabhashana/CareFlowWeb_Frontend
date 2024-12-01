import React, { useEffect, useState } from 'react';
import "../../channeling/summaryPay/summaryPay.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import SidebarPatient from "../../../components/sidebarPatient/sidebarPatient";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

const BookingSummaryPay: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // State for the modal
    const [openModal, setOpenModal] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({
        accountNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
    });

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
            const user = localStorage.getItem('user');
            let token = null;

            if (user) {
                const parsedUser = JSON.parse(user);
                token = parsedUser.access_token;

                const requestBody = {
                    doctorId: doctor?.id || 0,
                    appointmentDate: selectedDate,
                    slotNumber: availableAppointments,
                    status: 0,
                    reasonForVisit: "Routine check-up",
                    payment: 0
                };

                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/add_appointment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(requestBody)
                });

                if (response.ok) {
                    toast.success('Appointment has been added successfully.');
                    navigate("/appointments");
                } else {
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

    // Open the payment modal
    const handlePayNow = () => {
        setOpenModal(true);
    };

    // Handle payment submission
    const handleSubmitPayment = async () => {
        try {
            const user = localStorage.getItem('user');
            let token = null;

            if (user) {
                const parsedUser = JSON.parse(user);
                token = parsedUser.access_token;

                const requestBody = {
                    doctorId: doctor?.id || 0,
                    appointmentDate: selectedDate,
                    slotNumber: availableAppointments,
                    status: 0,
                    reasonForVisit: "Routine check-up",
                    payment: 1,
                    paymentDetails: {
                        amountPaid: totalAmount
                    }
                };

                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/add_appointment_with_payment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(requestBody)
                });

                if (response.ok) {
                    toast.success('Appointment has been added successfully.');
                    navigate("/appointments");
                } else {
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
    useEffect(() => {
        const payHereScript = document.createElement('script');
        payHereScript.src = "https://www.payhere.lk/lib/payhere.js";
        payHereScript.async = true;
        document.body.appendChild(payHereScript);

        return () => {
            document.body.removeChild(payHereScript);
        };
    }, []);

    if (!doctor) {
        return <div>No doctor information available.</div>;
    }

    const totalAmount = (doctor.docCharge || 0) + 1000;

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
                                    <div className="line"><b>{time || ""}</b></div>
                                    <div className="line"><b>{totalAmount}</b></div>
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
                                        backgroundColor: '#B0B0B0',
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
                                        backgroundColor: '#855CDD',
                                        color: 'white',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#5F2BCF',
                                            border: '1px solid #5F2BCF',
                                        }
                                    }}
                                    onClick={handlePayNow}
                                >
                                    Pay Now
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            <Dialog open={openModal} onClose={() => setOpenModal(false)}>
                <DialogTitle>Enter Payment Details</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Account Number"
                        fullWidth
                        value={paymentDetails.accountNumber}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, accountNumber: e.target.value })}
                        sx={{ marginBottom: '16px' }}
                    />
                    <TextField
                        label="Card Holder Name"
                        fullWidth
                        value={paymentDetails.cardHolderName}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cardHolderName: e.target.value })}
                        sx={{ marginBottom: '16px' }}
                    />
                    <TextField
                        label="Expiry Date"
                        fullWidth
                        value={paymentDetails.expiryDate}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                        sx={{ marginBottom: '16px' }}
                    />
                    <TextField
                        label="CVV"
                        fullWidth
                        value={paymentDetails.cvv}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                        sx={{ marginBottom: '16px' }}
                    />
                    <div>Total Amount: LKR {totalAmount}</div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenModal(false)} color="secondary">Cancel</Button>
                    <Button onClick={handleSubmitPayment} color="primary">Submit Payment</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BookingSummaryPay;
