import React from "react";
import "./RBookingsSummary.scss";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import NavbarLu from "../../../components/navbarA/NavbarA";
import SidebarRec from "../../../components/sidebarRec/SidebarRec";
import Button from "@mui/material/Button";

const RBookingsSummary: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/receptionist/home");
  };

  return (
    <div className="RBookingsSummary">
      <SidebarRec />
      <NavbarLu />

      <div className="homeContainer2lu">
        <div className="bodyContainerLu">
          <div className="mainTopic">View Booking</div>
          <div className="subTopic">View Details of your Patients Bookings</div>
        </div>
        <div className="pl-16">
          <Box className="mb-5">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <div className="mb-2 text-gray-700 text-lg">
                  Patient's Name :
                </div>
                <div className="mb-2 text-gray-700 text-lg">Date :</div>
                <div className="mb-2 text-gray-700 text-lg">
                  Appointment Number :
                </div>
                <div className="mb-2 text-gray-700 text-lg">Age :</div>
                <div className="mb-2 text-gray-700 text-lg">Gender :</div>
                <div className="mb-2 text-gray-700 text-lg">
                  Known Illnesses :
                </div>
                <div className="mb-2 text-gray-700 text-lg">
                  Known Allergies :
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mb-2 font-bold text-lg">Mr. Namal Rajapakshe</div>
                <div className="mb-2 font-bold text-lg">2022/04/04</div>
                <div className="mb-2 font-bold text-lg">04</div>
                <div className="mb-2 font-bold text-lg">45 Years</div>
                <div className="mb-2 font-bold text-lg">Male</div>
                <div className="mb-2 font-bold text-lg">Asthma, Cancer</div>
                <div className="mb-2 font-bold text-lg">None</div>
              </Grid>
            </Grid>
          </Box>
          <div className="flex flex-row space-x-4">
            <Button
              className="ml-14"
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#855CDD",
                marginTop: "18px",
                color: "white",
                fontFamily: "Roboto",
                fontSize: "16px",
                // width: "90px",
                height: "42px",
                borderRadius: "9px",
                "&:hover": {
                  backgroundColor: "#5F2BCF", // Change to your desired hover color
                },
              }}
              onClick={handleViewDetails}
            >
              Reserve
            </Button>

            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                border: "1px solid var(--normal-hover, #5F2BCF)",
                boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)",
                marginTop: "18px",
                color: "#855CDD",
                fontFamily: "Roboto",
                fontSize: "16px",
                width: "90px",
                height: "42px",
                borderRadius: "9px",
              }}
              onClick={handleViewDetails}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RBookingsSummary;
