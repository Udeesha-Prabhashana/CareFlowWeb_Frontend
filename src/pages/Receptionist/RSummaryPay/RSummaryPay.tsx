import React, { useEffect, useState } from 'react';
import "./RSummaryPay.scss";
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Box, Checkbox, FormControlLabel } from '@mui/material';
import SidebarRec from '../../../components/sidebarRec/SidebarRec';
import Button from "@mui/material/Button";
declare const payhere: any;

const RSummaryPay: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [checked, setChecked] = useState(false);

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

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            setPaymentConfirmed(true);
        } else {
            setPaymentConfirmed(false);
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
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleCheckboxChange}
                                            sx={{
                                                color: '#855CDD',
                                                '&.Mui-checked': {
                                                    color: '#855CDD',
                                                },
                                                '&:hover': {
                                                    borderColor: '#855CDD',
                                                    borderRadius: '5px',
                                                    outline: '1px solid #855CDD',
                                                },
                                            }}
                                        />
                                    }
                                    label="Paid"
                                    sx={{
                                        '.MuiFormControlLabel-label': {
                                            color: '#855CDD',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                        }
                                    }}
                                />
                            </Box>
                            {paymentConfirmed && (
                                <Box sx={{ marginTop: '20px', color: 'green' }}>
                                    Payment confirmed! Thank you for your payment.
                                </Box>
                            )}
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RSummaryPay;
