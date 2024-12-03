import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import SidebarNurse from "../../../components/sidebarNurse/sidebarNurse";
import "./doctors.scss";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Doctors {
    description: string;
    body: string;
    doctor_id: string;
}

const Doctors: React.FC = () => {
    const [alignment, setAlignment] = React.useState<string>('paid');
    const [paidDoctors, setPaidDoctors] = useState<Doctors[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPaidDoctors = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Doctors`);

                const doctorsData = response.data.map((doctor: any) => ({
                    description: doctor.name,
                    body: doctor.specialization,
                    doctor_id: doctor.id,
                }));
                setPaidDoctors(doctorsData);
            } catch (error) {
                console.error("Error fetching doctors data:", error);
            }
        };

        fetchPaidDoctors();
    }, []);

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

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleViewDetails = (doctorId: string) => {
        navigate(`/nurse/patients/${doctorId}`);
    };

    const handleAddBooking = () => {
        navigate('/receptionist/bookings/addnewbooking');
    };

    const getCards = () => {
        let cards: Doctors[] = [];
        switch (alignment) {
            case 'paid':
                cards = paidDoctors;
                break;
            case 'unpaid':
                cards = []; // Assuming you will fetch unpaid doctors similarly
                break;
            default:
                cards = [];
                break;
        }
        return cards.map((card, index) => (
            <Box key={index} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: 'var(--Normal, var(--Normal-Normal, #855CDD))',
                                fontSize: '30px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                            }}
                        >
                        </Typography>
                        <Typography
                            sx={{
                                mb: 1.5,
                                color: '#000',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                                paddingTop: '8px',
                            }}
                        >
                            {card.description}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '300',
                                lineHeight: '20px',
                            }}
                        >
                            {card.body}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 2 }}>
                        <Button
                            variant="outlined"
                            sx={{
                                width: '138px',
                                height: '38px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '11px',
                                border: '1px solid var(--normal-hover, #5F2BCF)',
                                whiteSpace: 'nowrap',
                                color: '#855CDD',
                                textTransform: 'none',
                            }}
                            onClick={() => handleViewDetails(card.doctor_id)}
                        >
                            View
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        ));
    };

    return (
        <div className="appointments">
            <SidebarNurse />
            <div className="appointmentsContainer">
                <div className="mainContent">
                    Doctors
                    <div className="subContent">
                     Select your designated doctor to start the shift
                    </div>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
                            <Grid item>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Appointments"
                                    sx={{
                                        '& .MuiToggleButton-root': {
                                            width: '153px',
                                            height: '42px',
                                            borderRadius: '9px',
                                            border: '1px solid #855CDD',
                                            fontSize: '18px',
                                            mr: 2,
                                            textTransform: 'none',
                                            '&:hover': {
                                                background: '#855CDD',
                                                color: 'white',
                                            },
                                            '&.Mui-selected': {
                                                background: '#855CDD',
                                                color: 'white',
                                                border: '1px solid #855CDD',
                                            },
                                        }
                                    }}
                                >
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item xs />
                            <Grid item>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                    <div className="cardsContainer">
                        {getCards()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;