import React from "react";
import Button from "@mui/material/Button";
import NavbarLu from "../../components/navbarA/NavbarA";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import "../medical_history/medical_history.scss";
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
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";

interface HistoryCard {
  doctor_name: string;
  date: string;
}

const past_history: HistoryCard[] = [
  { doctor_name: "Dr. Saman Kumara", date: "12/05/2024" },
  { doctor_name: "Prf. Wimalasena Kudaligama", date: "30/03/2023" },
  { doctor_name: "Dr. Club Wasantha", date: "11/02/2024" },
  // add more medical_history as needed
];

const HistoryCards: React.FC = () => {
  const navigate = useNavigate();

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

  const getCards = () => {
    let cards: HistoryCard[] = [];
    cards = past_history;
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
              {card.date}
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
        {/*<NavbarLu />*/}
        <div className="mainContent">
          View Medical History
          <div className="subContent">
            Select a Previous Appointment to See History
          </div>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Grid item></Grid>
              <Grid item xs />
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      "DatePicker",
                      "MobileDatePicker",
                      "DesktopDatePicker",
                    ]}
                  >
                    <DemoItem>
                      <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
          </ThemeProvider>
          <div className="cardsContainer">{getCards()}</div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCards;
