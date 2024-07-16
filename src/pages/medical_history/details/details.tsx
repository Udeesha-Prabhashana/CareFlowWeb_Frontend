import React from "react";
import SidebarLu from "../../../components/sidebarLu/SidebarLu";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "../details/details.scss";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
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

const past_history = {
  doctor_name: "Dr. Saman Kumara",
  date: "12/05/2024",
  diagnostics: `John Doe presents with a 2-week history of epigastric pain, which he describes as a burning sensation.
The pain is often worse after meals and sometimes at night. He reports nausea and has vomited
twice in the past week. He also experiences bloating and early satiety. There is no history of
melena or hematemesis.`,
  investigations: [
    "Complete Blood Count (CBC)",
    "Helicobacter pylori stool antigen test or urea breath test",
    "Liver function tests (LFTs)",
    "Serum amylase and lipase",
  ],
  assessment: `Based on the patient's symptoms and history, gastritis is the most likely diagnosis. The epigastric pain,
nausea, and bloating are consistent with this condition. Further investigation for H. pylori infection
is warranted.`,
};
// add more medical_history as needed;

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="appointments">
      <SidebarLu />
      <div className="appointmentsContainer">
        <NavbarLu />
        <div className="main">
          View Medical History
          <div className="sub">
            Select a Previous Appointment to See History
            <div className="content">
              <Box key={past_history.date} sx={{ mb: 2 }}>
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
                      {past_history.doctor_name}
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
                      {past_history.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              <Box key={past_history.date} sx={{ mb: 2 }}>
                <Card
                  variant="outlined"
                  sx={{ display: "flex", border: "1px solid #855CDD" }}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <div>
                      <h3>Diagnostics</h3>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          color: "#000000",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: "100",
                          lineHeight: "20px",
                        }}
                      >
                        {past_history.diagnostics}
                      </Typography>
                    </div>

                    <div>
                      <h3>Investigations</h3>
                      <ul>
                        {Array.isArray(past_history.investigations) &&
                          past_history.investigations.map(
                            (investigation, index) => (
                              <li key={index}>
                                <Typography
                                  variant="h6"
                                  component="div"
                                  sx={{
                                    color: "#000000",
                                    fontSize: "15px",
                                    fontStyle: "normal",
                                    fontWeight: "100",
                                    lineHeight: "20px",
                                  }}
                                >
                                  {investigation}
                                </Typography>
                              </li>
                            )
                          )}
                      </ul>
                    </div>

                    <div>
                      <h3>Assessment</h3>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          color: "#000000",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: "100",
                          lineHeight: "20px",
                        }}
                      >
                        {past_history.assessment}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
