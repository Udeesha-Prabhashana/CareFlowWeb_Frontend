import React from "react";
import Button from '@mui/material/Button';
import NavbarLu from "../../../components/navbarA/NavbarA";
import SidebarRec from "../../../components/sidebarRec/SidebarRec";
import "./RBookings.scss";
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface RBookings {
    description: string;
    body: string;
}

const Paid: RBookings[] = [
    { description: "Dr. John Smith", body: "PhD, Neurologist" },
    { description: "Dr. Alice Johnson", body: "MD, Cardiologist" },
    { description: "Dr. Alice Johnson", body: "MD, Cardiologist" },
    // add more appointments as needed
];

const Unpaid: RBookings[] = [
    { description: "Dr. Alice Johnson", body: "MD, Cardiologist" },
    { description: "Dr. John Smith", body: "PhD, Neurologist" },
    // add more appointments as needed
];

const RBookings: React.FC = () => {
    const [alignment, setAlignment] = React.useState<string>('paid');
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

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleViewDetails = () => {
        if (alignment === 'paid') {
            navigate('/receptionist/bookings/paidlist');
        } else if (alignment === 'unpaid') {
            navigate('/receptionist/bookings/unpaidlist');
        }
    };

    const handleAddBooking = () => {
        navigate('/receptionist/bookings/addnewbooking');
    };

    const getCards = () => {
        let cards: RBookings[] = [];
        switch (alignment) {
            case 'paid':
                cards = Paid;
                break;
            case 'unpaid':
                cards = Unpaid;
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
                            onClick={handleViewDetails}
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
            <SidebarRec />
            <div className="appointmentsContainer">
                <NavbarLu />
                <div className="mainContent">
                    Bookings
                    <div className="subContent">
                     View Details of Doctors Bookings
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
                                    <ToggleButton value="paid">Paid</ToggleButton>
                                    <ToggleButton value="unpaid">Unpaid</ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item xs />
                            <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleAddBooking}
                                sx={{
                                    height: '42px',
                                    borderRadius: '9px',
                                    textTransform: 'none',
                                    color: 'var(--Normal, #855CDD)', // Replace with your actual color variable or value
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: 'normal',
                                    '&:hover': {
                                        backgroundColor: '#5F2BCF', // Change to your desired hover color
                                        color:"#FFFFFF",
                                    },
                                }}
                            >
                                New Booking
                            </Button>
                            </Grid>
                            <Grid item>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'DatePicker',
                                            'MobileDatePicker',
                                            'DesktopDatePicker',
                                        ]}
                                    >
                                        <DemoItem>
                                            <DesktopDatePicker
                                                defaultValue={dayjs('2022-04-17')}
                                            />
                                        </DemoItem>
                                    </DemoContainer>
                                </LocalizationProvider>
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

export default RBookings;
