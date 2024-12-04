import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import "../bookings/bookings.scss";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  ThemeProvider,
} from "@mui/material";

// Mock theme, replace with actual theme if available
const theme = {};

// Placeholder data for toggle buttons
interface Appointment {
  slotNumber: number;
  patientName: string;
  appointmentDate: string;
  patientId: string; // Added patientId for fetching name
  reasonForVisit: string;
  doctorName: string;
}

const todayRows: Appointment[] = [];
const upcomingRows: Appointment[] = [];
const historyRows: Appointment[] = [];

const BookingDoc: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]); // State to store appointment data
  const [alignment, setAlignment] = useState<string | null>("today"); // Initialize alignment
  const [searchTerm, setSearchTerm] = useState<string>(""); // Initialize search term
  const navigate = useNavigate();

  const handleViewDetails = (row: Appointment) => {
      const data = {
        patientName: row.patientName,
        appointmentDate: row.appointmentDate,
        slotNumber: row.slotNumber,
        reasonForVisit: row.reasonForVisit,
        doctorName: row.doctorName,
      };
      navigate("/doctor/bookings/view_bookings", { state: data });
    };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      if (newAlignment === "history") {
        setRows(historyRows);
      } else if (newAlignment === "today") {
        setRows(todayRows);
      } else {
        setRows(upcomingRows);
      }
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredRows = rows.filter((row) =>
      row.patientName?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRows(filteredRows);
  };

  const fetchPatientName = async (patientId: string) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const token = user?.access_token;

      if (token) {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/getPatientById/${patientId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data.name; // Assuming response contains the patient name
      } else {
        console.error("No access token found in localStorage");
      }
    } catch (error) {
      console.error("Error fetching patient name:", error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const token = user?.access_token;

      if (token) {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/get_allAppointment/doctor`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const appointments = response.data;

        // Fetch patient name for each appointment
        const updatedAppointments = await Promise.all(
          appointments.map(async (appointment: any) => {
            const patientName = await fetchPatientName(appointment.patientId);
            return {
              ...appointment,
              patientName: patientName || "Unknown", // Set default name if not found
            };
          })
        );

        setRows(updatedAppointments);
      } else {
        console.error("No access token found in localStorage");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="sideDoc">
      <SidebarDoc />
      <div className="navDoc">
        <div className="mainContentDocBooking">
          Bookings
          <div className="subContentDocBooking">
            View Details of your Patients Bookings
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
                  <ToggleButton value="history">History</ToggleButton>
                  <ToggleButton value="today">Today</ToggleButton>
                  <ToggleButton value="upcoming">Upcoming</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs />
              <Grid item>
                <TextField
                  label="Search by Name"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearch}
                  sx={{ width: "300px" }}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>Patient Name</TableCell> {/* Updated column name */}
                  <TableCell>Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: index % 2 === 0 ? "#EEE7FF" : "inherit",
                      boxShadow:
                        index % 2 === 0
                          ? "0 4px 8px rgba(133, 92, 221, 0.3)"
                          : "none",
                      height: "60px",
                    }}
                  >
                    <TableCell>{row.slotNumber}</TableCell>
                    <TableCell>{row.patientName}</TableCell> {/* Display patient name */}
                    <TableCell>{row.appointmentDate}</TableCell>
                    <TableCell>
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
                        onClick={() => handleViewDetails(row)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default BookingDoc;
