import React, { useState } from "react";
import Button from "@mui/material/Button";
import NavbarLu from "../../components/navbarA/NavbarA";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import "../medical_history/medical_history.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import TextField from "@mui/material/TextField";

interface HistoryCard {
    doctor_name: string;
    specialty: string;
}

const past_history: HistoryCard[] = [
    { doctor_name: "Dr. Saman Kumara", specialty: "Cardiologist" },
    { doctor_name: "Prof. Wimalasena Kudaligama", specialty: "Neurologist" },
    { doctor_name: "Dr. Piyath Jayasena", specialty: "Dermatologist" },
    { doctor_name: "Dr. Dasun Manamperi", specialty: "Cardiologist" },

    // add more medical_history as needed
];

const HistoryCards: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const theme = createTheme({
        palette: {
            primary: {
                main: "#855CDD",
            },
            secondary: {
                main: "#FFA07A",
            },
        },
    });

    const handleViewDetails = () => {
        navigate("/medical_history/details");
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const getFilteredCards = () => {
        let cards = past_history;
        if (searchQuery) {
            cards = cards.filter((card) =>
                card.doctor_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return cards.map((card, index) => (
            <Box key={index} sx={{ mb: 2 }}>
                <Card
                    variant="outlined"
                    sx={{ display: "flex", border: "1px solid #855CDD" }}
                >
                    <CardContent sx={{ flex: 1 }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: "var(--Normal, var(--Normal-Normal, #855CDD))",
                                fontSize: "30px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "20px",
                                paddingTop: "10px",
                            }}
                        >
                            {card.doctor_name}
                        </Typography>
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
                            {card.specialty}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            mr: 2,
                        }}
                    >
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
                    </CardActions>
                </Card>
            </Box>
        ));
    };

    return (
        <div className="medical_history">
            <SidebarPatient />
            <div className="medical_historyContainer">
                <div className="mainContent">
                    View Medical History
                    <div className="subContent">
                        Select a Previous Appointment to See History
                    </div>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                            <Grid item xs />
                            <Grid item>
                                <TextField
                                    label="Search by Doctor's Name"
                                    variant="outlined"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                    <div className="cardsContainer">{getFilteredCards()}</div>
                </div>
            </div>
        </div>
    );
};

export default HistoryCards;
