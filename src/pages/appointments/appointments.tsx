import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import NavbarLu from "../../components/navbarA/NavbarA";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import "../appointments/appointments.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import axios from "axios"; // Import axios for making API requests
import { toast } from "react-toastify";

interface Appointment {
    ID?: number;
    title?: string;
    description: string;
    body: string;
    date: string;
    paid?: boolean;
    doctorName?: string;
}

const Appointments: React.FC = () => {
    const [alignment, setAlignment] = useState<string>("upcoming");
    const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
    const [completedAppointments, setCompletedAppointments] = useState<Appointment[]>([]);
    const [missedAppointments, setMissedAppointments] = useState<Appointment[]>([]);
    const [doctorNameFilter, setDoctorNameFilter] = useState<string>("");

    const navigate = useNavigate();

    const theme = createTheme({
        palette: {
            primary: { main: "#855CDD" },
            secondary: { main: "#FFA07A" },
        },
    });

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const user = localStorage.getItem("user");
                let token = null;
                if (user) {
                    const parsedUser = JSON.parse(user);
                    token = parsedUser.access_token;

                    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/get_allAppointment`, {
                        headers: {
                            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                        },
                    });

                    const data = response.data;

                    const upcoming = data
                        .filter((appointment: any) => appointment.status === 0)
                        .map((appointment: any) => ({
                            ID: appointment.id,
                            title: `No. ${appointment.slotNumber}`,
                            description: `${appointment.doctorName}`,
                            body: appointment.reasonForVisit,
                            date: appointment.appointmentDate,
                            doctorName: appointment.doctorName, // Assuming you have the doctor's name here
                            paid: false,
                        }));

                    const completed = data
                        .filter((appointment: any) => appointment.status === 2)
                        .map((appointment: any) => ({
                            ID: appointment.id,
                            description: `${appointment.doctorName}`,
                            body: appointment.reasonForVisit,
                            date: appointment.appointmentDate,
                            doctorName: appointment.doctorName, // Assuming you have the doctor's name here
                        }));

                    const missed = data
                        .filter((appointment: any) => appointment.status === 1)
                        .map((appointment: any) => ({
                            ID: appointment.id,
                            description: `${appointment.doctorName}`,
                            body: appointment.reasonForVisit,
                            date: appointment.appointmentDate,
                            doctorName: appointment.doctorName, // Assuming you have the doctor's name here
                        }));

                    setUpcomingAppointments(upcoming);
                    setCompletedAppointments(completed);
                    setMissedAppointments(missed);
                } else {
                    toast.error("Field Authentication");
                }
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, []);

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handlePayNow = (appointmentId: number, doctorName: string) => {
        const data = {
            doctor: doctorName,  // Now passing the correct doctor's name
        };
        navigate(`/NowbookingSummaryPay?appointmentId=${appointmentId}`, { state: data });
    };

    const handleViewDetails = () => {
        navigate("/appointments/bookingSummary");
    };

    const getCards = () => {
        let cards: Appointment[] = [];
        switch (alignment) {
            case "upcoming":
                cards = upcomingAppointments;
                break;
            case "completed":
                cards = completedAppointments;
                break;
            case "missed":
                cards = missedAppointments;
                break;
            default:
                cards = [];
                break;
        }

        // Apply the doctor name filter
        if (doctorNameFilter) {
            cards = cards.filter(card =>
                card.doctorName?.toLowerCase().includes(doctorNameFilter.toLowerCase())
            );
        }

        return cards.map((card, index) => (
            <Box key={index} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: "flex", border: "1px solid #855CDD" }}>
                    <CardContent sx={{ flex: 1 }}>
                        {alignment === "upcoming" && (
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "var(--Normal, var(--Normal-Normal, #855CDD))",
                                    fontSize: "30px",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    lineHeight: "20px",
                                }}
                            >
                                {card.title}
                            </Typography>
                        )}
                        <Typography
                            sx={{
                                mb: 1.5,
                                color: "#000",
                                fontSize: "20px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "20px",
                                paddingTop: "8px",
                            }}
                        >
                            {card.description}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                lineHeight: "20px",
                            }}
                        >
                            {card.body}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                lineHeight: "20px",
                                color: "grey",
                                paddingTop: "8px",
                            }}
                        >
                            {card.date}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mr: 2 }}>
                        {alignment === "upcoming" ? (
                            <Button
                            variant="outlined"
                            sx={{
                                width: "138px",
                                height: "38px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "11px",
                                border: "1px solid var(--normal-hover, #5F2BCF)",
                                whiteSpace: "nowrap",
                                color: "#855CDD",
                                textTransform: "none",
                            }}
                            onClick={() => card.paid ? handleViewDetails() : handlePayNow(card.ID!, card.doctorName!)} // Passing the `appointmentId`
                            disabled={card.paid}
                        >
                            {card.paid ? "Pay Now" : "Pay Now"}
                        </Button>                        
                        ) : (
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "138px",
                                    height: "38px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "11px",
                                    border: "1px solid var(--normal-hover, #5F2BCF)",
                                    whiteSpace: "nowrap",
                                    color: "#855CDD",
                                    textTransform: "none",
                                }}
                                onClick={handleViewDetails}
                            >
                                View Details
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Box>
        ));
    };

    return (
        <div className="appointments">
            <SidebarPatient />
            <div className="appointmentsContainer">
                <div className="mainContent">
                    View Appointments
                    <div className="subContent">View Details of your Appointments</div>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                            <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Appointments"
                                    sx={{
                                        "& .MuiToggleButton-root": {
                                            width: "153px",
                                            height: "42px",
                                            borderRadius: "9px",
                                            border: "1px solid #855CDD",
                                            fontSize: "18px",
                                            mr: 2,
                                            textTransform: "none",
                                            "&:hover": {
                                                background: "#855CDD",
                                                color: "white",
                                            },
                                            "&.Mui-selected": {
                                                background: "#855CDD",
                                                color: "white",
                                                border: "1px solid #855CDD",
                                            },
                                        },
                                    }}
                                >
                                    <ToggleButton value="upcoming">Upcoming</ToggleButton>
                                    <ToggleButton value="completed">Completed</ToggleButton>
                                    <ToggleButton value="missed">Missed</ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <input
                                        type="text"
                                        placeholder="Filter by Doctor's Name"
                                        value={doctorNameFilter}
                                        onChange={(e) => setDoctorNameFilter(e.target.value)}
                                        style={{
                                            padding: "10px",
                                            borderRadius: "11px",
                                            border: "1px solid #855CDD",
                                            width: "60%",
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                    {getCards()}
                </div>
            </div>
        </div>
    );
};

export default Appointments;
