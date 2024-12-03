import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import { ToggleButton, ToggleButtonGroup, TextField, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "axios";

const BookingDoc: React.FC = () => {
  const [alignment, setAlignment] = useState("today");
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAppointments = async (type: string) => {
    const token = JSON.parse(localStorage.getItem("user") || "{}").access_token;
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/get_allAppointment/doctor`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRows(response.data);
  };

  useEffect(() => {
    fetchAppointments(alignment);
  }, [alignment]);

  const filteredRows = rows.filter((row: any) => row.patientName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="sideDoc">
      <SidebarDoc />
      <div className="navDoc">
        <div className="mainContentDocBooking">
          <h1>Bookings</h1>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={(e, newAlignment) => newAlignment && setAlignment(newAlignment)}
              >
                <ToggleButton value="history">History</ToggleButton>
                <ToggleButton value="today">Today</ToggleButton>
                <ToggleButton value="upcoming">Upcoming</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs />
            <Grid item>
              <TextField label="Search by Name" onChange={(e) => setSearchTerm(e.target.value)} />
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>Patient's Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{row.slotNumber}</TableCell>
                    <TableCell>{row.patientName}</TableCell>
                    <TableCell>{row.appointmentDate}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View Details</Button>
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
