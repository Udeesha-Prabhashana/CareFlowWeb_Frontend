import React, { useState, useEffect } from 'react';
import "./viewPatient.scss";
import SidebarNurse from "../../../../components/sidebarNurse/sidebarNurse";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

const theme = createTheme({
    palette: {
        primary: {
            main: '#855CDD',
        },
        secondary: {
            main: '#855CDD',
        },
    },
});

interface PatientDetails {
    patient_id: number;
    age: number;
    known_illnesses: string;
    known_allergies: string;
    other_details: string;
    name: string;
}

const ViewPatient: React.FC = () => {
    const navigate = useNavigate();
    const { doctorid, patientid } = useParams();

    const [patient, setPatient] = useState<PatientDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                if (!patientid) {
                    setError('No patient ID found');
                    setLoading(false);
                    return;
                }

                const response = await axios.get(`http://127.0.0.1:8000/getPatientDetailsAll/${patientid}`, {
                    timeout: 5000,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const patientData = response.data?.patient_details || response.data;

                if (patientData) {
                    setPatient(patientData);
                } else {
                    setError('No patient details found');
                }

                setLoading(false);
            } catch (error) {
                handleApiError(error);
                setLoading(false);
            }
        };

        fetchPatientDetails();
    }, [patientid]);

    const handleApiError = (error: unknown) => {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;

            if (axiosError.response) {
                setError(`API Error: ${axiosError.response.status} - ${JSON.stringify(axiosError.response.data)}`);
            } else if (axiosError.request) {
                setError('No response received from server');
            } else {
                setError('Error setting up the request');
            }
        } else {
            setError('An unexpected error occurred');
        }
    };

    const handleFileUpload = async () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png';

        input.onchange = async (event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (!file) return;

            if (file.size > 5 * 1024 * 1024) {
                alert('File is too large. Maximum size is 5MB.');
                return;
            }

            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'ml_default');
                formData.append('cloud_name', 'dtn6bwjqb');

                const cloudinaryResponse = await axios.post(
                    'https://api.cloudinary.com/v1_1/dtn6bwjqb/upload',
                    formData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    }
                );

                const fileUrl = cloudinaryResponse.data.secure_url;

                await axios.post('http://127.0.0.1:8000/uploadMedicalRecords', {
                    patient_id: patientid,
                    url: fileUrl,
                    doctor_id: doctorid,
                });

                alert('File uploaded successfully');
            } catch (error) {
                console.error('Upload error:', error);
                alert('Failed to upload file');
            }
        };

        input.click();
    };

    if (loading) {
        return (
            <ThemeProvider theme={theme}>
                <div className="sideDocMRview">
                    <SidebarNurse />
                    <div className="navDocMRview">
                        <div className="mainContentDocMRview">
                            <Typography variant="h4" component="h1">Loading Patient Details</Typography>
                            <Typography variant="body1" color="textSecondary">
                                Please wait while we retrieve the patient information...
                            </Typography>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    if (error) {
        return (
            <ThemeProvider theme={theme}>
                <div className="sideDocMRview">
                    <SidebarNurse />
                    <div className="navDocMRview">
                        <div className="mainContentDocMRview">
                            <Typography variant="h4" component="h1" color="error">Error</Typography>
                            <Typography variant="body1" color="error">
                                {error}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => window.location.reload()}
                            >
                                Retry
                            </Button>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="sideDocMRview">
                <SidebarNurse />
                <div className="navDocMRview">
                    <div className="mainContentDocMRview">
                        <Typography variant="h4" component="h1">View Medical History</Typography>
                        <Typography variant="body1" color="textSecondary">
                            Select a Previous Appointment to See History
                        </Typography>

                        {patient ? (
                            <Box sx={{ mb: 2 }}>
                                <Card variant="outlined" sx={{ border: '1px solid #855CDD' }}>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <Typography className="line">Patient's Name:</Typography>
                                                <Typography className="line">Age:</Typography>
                                                <Typography className="line">Known Illnesses:</Typography>
                                                <Typography className="line">Known Allergies:</Typography>
                                                <Typography className="line">Other Details:</Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography className="line"><b>{patient.name}</b></Typography>
                                                <Typography className="line"><b>{patient.age} Years</b></Typography>
                                                <Typography className="line"><b>{patient.known_illnesses}</b></Typography>
                                                <Typography className="line"><b>{patient.known_allergies}</b></Typography>
                                                <Typography className="line"><b>{patient.other_details}</b></Typography>
                                            </Grid>

                                            <Box mt={1} display="flex" gap={1}>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={handleFileUpload}
                                                >
                                                    Upload Medical Records
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        ) : (
                            <Typography variant="body1" color="textSecondary">
                                No patient details available
                            </Typography>
                        )}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default ViewPatient;