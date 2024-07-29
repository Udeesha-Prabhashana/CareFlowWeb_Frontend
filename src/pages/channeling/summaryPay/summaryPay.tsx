import React, {useEffect} from 'react';
import "../../channeling/summaryPay/summaryPay.scss";
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import SidebarPatient from "../../../components/sidebarPatient/sidebarPatient";
import Button from "@mui/material/Button";
declare const payhere: any;

const BookingSummaryPay: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handlePayLater = () => {
        navigate("/appointments");
    };

    useEffect(() => {
        const payHereScript = document.createElement('script');
        payHereScript.src = "https://www.payhere.lk/lib/payhere.js";
        payHereScript.async = true;
        document.body.appendChild(payHereScript);

        return () => {
            document.body.removeChild(payHereScript);
        };
    }, []);

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
            first_name: 'Saman',
            last_name: 'Perera',
            email: 'samanp@gmail.com',
            phone: '0771234567',
            address: 'No.1, Galle Road',
            city: 'Colombo',
            country: 'Sri Lanka',
        };

        // Trigger the payment
        payhere.startPayment(payment);
    };

    return (
        <div className="appointments">
            <SidebarPatient />
            <div className="appointmentsContainer">
                {/*<NavbarLu />*/}
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
                                <Button
                                    className="button"
                                    variant="outlined"
                                    sx={{
                                        width: '180px',
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
                                        width: '180px',
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
