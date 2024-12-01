import React, { useContext, useEffect, useState } from 'react';
import "../../channeling/laterSummaryPay/latersummaryPay.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import SidebarPatient from "../../../components/sidebarPatient/sidebarPatient";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { AuthContext } from "./../../../context/AuthContext";

const NowBookingSummaryPay: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);

    const [openModal, setOpenModal] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({
        accountNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
    });
    const [appointmentDetails, setAppointmentDetails] = useState<any>(null);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const appointmentId = new URLSearchParams(location.search).get('appointmentId');
    const doctorName = location.state?.doctor || ''; 
    const patientName = user?.name
    console.log("Idddd", appointmentId);

    useEffect(() => {
        if (appointmentId) {
            const fetchAppointmentDetails = async () => {
                try {
                    const user = localStorage.getItem('user');
                    let token = null;

                    if (user) {
                        const parsedUser = JSON.parse(user);
                        token = parsedUser.access_token;

                        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/getAppointmentDetails/${appointmentId}/details`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${token}`
                            },
                        });

                        if (response.ok) {
                            const data = await response.json();
                            setAppointmentDetails(data);

                            // Calculate total amount (payment + additional fee)
                            const updatedTotal = data.payment + 1000;
                            setTotalAmount(updatedTotal);
                        } else {
                            toast.error("Failed to fetch appointment details.");
                        }
                    } else {
                        toast.error("Authentication required.");
                    }
                } catch (error) {
                    console.error('Error fetching appointment details:', error);
                    toast.error('An error occurred while fetching appointment details.');
                }
            };

            fetchAppointmentDetails();
        }
    }, [appointmentId]);

    const handlePayNow = () => {
        setOpenModal(true);
    };

    const handleSubmitPayment = async () => {
        if (appointmentDetails) {
            try {
                const user = localStorage.getItem('user');
                let token = null;

                if (user) {
                    const parsedUser = JSON.parse(user);
                    token = parsedUser.access_token;

                    const requestBody = {
                        appointmentId: appointmentId,
                        doctorId: appointmentDetails.doctorId,
                        patientId: appointmentDetails.patientId,
                        paymentDate: new Date().toISOString(),
                        amountPaid: totalAmount,
                    };

                    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payment/add`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify(requestBody)
                    });

                    if (response.ok) {
                        toast.success('Payment has been processed successfully.');
                        navigate("/appointments");
                    } else {
                        const errorData = await response.json();
                        toast.error(`Error: ${errorData.message}`);
                    }
                } else {
                    toast.error("Authentication required.");
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('An error occurred while processing payment.');
            }
        }
    };

    // useEffect(() => {
    //     const payHereScript = document.createElement('script');
    //     payHereScript.src = "https://www.payhere.lk/lib/payhere.js";
    //     payHereScript.async = true;
    //     document.body.appendChild(payHereScript);

    //     return () => {
    //         document.body.removeChild(payHereScript);
    //     };
    // }, []);

    if (!appointmentDetails) {
        return <div>Loading appointment details...</div>;
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
                                    <div className="line">Total Amount: </div>
                                    <div className="line">Patient Name :</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="line"><b>{doctorName}</b></div>
                                    <div className="line"><b>{appointmentDetails.appointmentDate}</b></div>
                                    <div className="line"><b>{appointmentDetails.slotNumber}</b></div>
                                    <div className="line"><b>{totalAmount}</b></div>
                                    <div className="line"><b>{patientName}</b></div>
                                </Grid>
                            </Grid>
                            <Box sx={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
                                <Button
                                    className="button"
                                    variant="outlined"
                                    onClick={handlePayNow}
                                >
                                    Pay Now
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>

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
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Expiry Date"
                                fullWidth
                                value={paymentDetails.expiryDate}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                                sx={{ marginBottom: '16px' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="CVV"
                                fullWidth
                                value={paymentDetails.cvv}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                                sx={{ marginBottom: '16px' }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenModal(false)} color="primary">Cancel</Button>
                    <Button onClick={handleSubmitPayment} color="primary">Submit Payment</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default NowBookingSummaryPay;
