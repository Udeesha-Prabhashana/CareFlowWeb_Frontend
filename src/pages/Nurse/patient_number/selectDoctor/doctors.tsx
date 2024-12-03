import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Button, Card, CardContent, CardActions, Typography,
    Box, ThemeProvider, createTheme, Switch, Stack
} from '@mui/material';
import SidebarNurse from "../../../../components/sidebarNurse/sidebarNurse";
import "./doctors.scss";

interface Doctor {
    doctor_id: number;
    name: string;
    available_date: string;
    assigned_to_me: boolean;
}

interface DoctorsResponse {
    doctors: Doctor[];
}

interface SelectedDoctorPayload {
    doctor_id: number;
    assigned: boolean;
}

const SelectDoctor: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [selectedDoctors, setSelectedDoctors] = useState<number[]>([]);
    const navigate = useNavigate();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#855CDD',
            },
            secondary: {
                main: '#FFA07A',
            },
        },
    });

    useEffect(() => {
    const fetchDoctors = async () => {
        try {
            // Get user object from localStorage and extract the JWT
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const token = user.access_token;
            if (!token) {
                // Redirect to login if no token is found
                navigate('/login');
                return;
            }

            const response = await axios.get<DoctorsResponse>('http://127.0.0.1:8000/getDoctors', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Group doctors by unique doctor_id to avoid duplicates
            const uniqueDoctors: Doctor[] = response.data.doctors.reduce((acc: Doctor[], current: Doctor) => {
                if (!acc.some((doc: Doctor) => doc.doctor_id === current.doctor_id)) {
                    acc.push(current);
                }
                return acc;
            }, []);

            setDoctors(uniqueDoctors);

            // Initialize selected doctors based on assigned_to_me
            const initialSelectedDoctors: number[] = uniqueDoctors
                .filter((doctor: Doctor) => doctor.assigned_to_me)
                .map((doctor: Doctor) => doctor.doctor_id);
            setSelectedDoctors(initialSelectedDoctors);
        } catch (error) {
            console.error('Error fetching doctors:', error);
            // Redirect to login on error (e.g., unauthorized)
            navigate('/login');
        }
    };

    fetchDoctors();
}, [navigate]);
    const handleDoctorSelect = (doctorId: number) => {
        setSelectedDoctors(prev =>
            prev.includes(doctorId)
                ? prev.filter(id => id !== doctorId)
                : [...prev, doctorId]
        );
    };

    const handleSave = async () => {
        try {
            // Get JWT from localStorage
            const token = localStorage.getItem('jwt');
            if (!token) {
                // Redirect to login if no token is found
                navigate('/login');
                return;
            }

            // Create payload with all doctors, marking selected ones as assigned
            const payload: SelectedDoctorPayload[] = doctors.map(doctor => ({
                doctor_id: doctor.doctor_id,
                assigned: selectedDoctors.includes(doctor.doctor_id)
            }));

            // Send POST request to select doctors with JWT in Authorization header
            await axios.post('http://127.0.0.1:8000/selectDoctors', payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Navigate to nurse home page after successful save
            navigate('/nurse/home');
        } catch (error) {
            console.error('Error saving selected doctors:', error);
            // Redirect to login on error (e.g., unauthorized)
            navigate('/login');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="appointments">
                <SidebarNurse />
                <div className="appointmentsContainer">
                    <div className="mainContent">
                        <h2>Select Doctor</h2>
                        <div className="subContent">
                            Select the doctor you are assigned to
                        </div>

                        <div className="cardsContainer">
                            {doctors.map((doctor) => (
                                <Box key={doctor.doctor_id} sx={{ mb: 2 }}>
                                    <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
                                        <CardContent sx={{ flex: 1 }}>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                    color: '#000',
                                                    fontSize: '20px',
                                                    fontWeight: '700',
                                                }}
                                            >
                                                {doctor.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: '16px',
                                                    fontWeight: '300',
                                                }}
                                            >
                                                Available on: {doctor.available_date}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Switch
                                                checked={selectedDoctors.includes(doctor.doctor_id)}
                                                onChange={() => handleDoctorSelect(doctor.doctor_id)}
                                            />
                                        </CardActions>
                                    </Card>
                                </Box>
                            ))}
                        </div>

                        <Stack spacing={2} direction="row">
                            <Button variant="contained" onClick={handleSave}>
                                Save
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default SelectDoctor;