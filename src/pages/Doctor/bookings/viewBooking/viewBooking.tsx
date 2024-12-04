import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarDoc from "../../../../components/sidebarDoctor/sidebarDoc";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";

const DoctorViewBooking: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract data from the state passed via navigate
  const {
    patientName = "Unknown",
    appointmentDate = "Unknown",
    slotNumber = "Unknown",
    reasonForVisit = "Unknown",
    doctorName = "Unknown",
  } = location.state || {};

  const handleViewMedicalHistory = () => {
    navigate("/doctor/view_medicalRecords");
  };

  return (
    <div className="appointments">
      <SidebarDoc />
      <div className="appointmentsContainer">
        <div className="main">
          <h1>View Booking</h1>
          <div className="sub">View Details of your Patient's Booking</div>
          <Box className="content">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <div className="line">Patient's Name:</div>
                <div className="line">Date:</div>
                <div className="line">Slot Number:</div>
                <div className="line">Reason for Visit:</div>
                <div className="line">Doctor's Name:</div>
              </Grid>
              <Grid item xs={6}>
                <div className="line">
                  <b>{patientName}</b>
                </div>
                <div className="line">
                  <b>{appointmentDate}</b>
                </div>
                <div className="line">
                  <b>{slotNumber}</b>
                </div>
                <div className="line">
                  <b>{reasonForVisit}</b>
                </div>
                <div className="line">
                  <b>{doctorName}</b>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Button
            className="button"
            variant="outlined"
            sx={{
              marginTop: "40px",
              width: "180px",
              height: "40px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "11px",
              border: "1px solid var(--normal-hover, #855CDD)",
              whiteSpace: "nowrap",
              backgroundColor: "#855CDD", // Default button color
              color: "white", // Text color for default state
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#5F2BCF", // Dark purple background on hover
                border: "1px solid #5F2BCF", // Dark purple border on hover
              },
            }}
            onClick={handleViewMedicalHistory}
          >
            View Medical History
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorViewBooking;
