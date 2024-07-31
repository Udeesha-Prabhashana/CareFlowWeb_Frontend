import React from "react";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "./RProfileMain.scss";
import "../../../tailwind.css";
import SidebarRec from "../../../components/sidebarRec/SidebarRec";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import vector from "../../../components/images/rec.jpg";


const RProfileMain: React.FC = () => {
    const navigate = useNavigate();

    const handleEditProfile = () => {
      navigate("/receptionist/profile-edit");
    };

  return (
    <div className="RProfileMain">
      <SidebarRec />
      {/*<NavbarLu />*/}

      <div className="homeContainer2lu">
        <div className="bodyContainerLu flex justify-between items-center">
          <div>
            <div className="mainTopic">Your Profile</div>
            <div className="subTopic">View your Profile Details</div>
          </div>
        </div>

        <div className="w-full ml-14 mr-14 relative mt-6">
          <img src="/images/locations/Profile1.png" alt="Cover" className="w-full rounded-lg" />
          <div className="absolute bottom-0 right-0 mb-4 mr-4">
            <button
              className="flex items-center justify-center p-2 border-2 rounded-lg"
              style={{
                borderColor: "#5F2BCF",
                borderRadius: "11px",
                borderWidth: "1px",
                backgroundColor: "#FFFFFF90",
                color: "#000000",
                fontSize: "10px",
              }}
            >
              Change Background
            </button>
          </div>
        </div>

        <div className="flex items-start -mt-20 ml-24">
          <div className="relative inline-block">
          <img src={vector} className="w-40 border-4 border-white rounded-full" alt="Profile"/>
          </div>
          <div className="flex flex-col mt-20 ml-3">
            <p className="prof-name mt-1" style={{ fontSize: "25px", marginBottom: "0px" }}>
              Michael Smith
            </p>
            <p className="prof-email" style={{ fontSize: "15px", color: "#808080", marginTop: "0px" }}>
              michaelsmith12@gmail.com
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full ml-14 mr-14 mt-10">
          {[
            { label: "First Name", value: "Michael" },
            { label: "Last Name", value: "Smith" },
            { label: "Date of Birth", value: "1990-01-01" },
            { label: "Phone Number", value: "123-456-7890" },
            { label: "Height", value: "175 cm" },
            { label: "Weight", value: "60 kg" },
            // { label: "Medicines", value: "None" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between mb-4 px-4 w-full">
              <div className="text-gray-700 font-semibold w-1/2">{item.label}:</div>
              <div className="text-gray-700 w-1/2">{item.value}</div>
            </div>
          ))}
        </div>
        <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              border: "1px solid #5F2BCF",
              color: "#5F2BCF",
              fontFamily: "Roboto",
              fontSize: "14px",
              borderRadius: "9px",
              "&:hover": {
                backgroundColor: "#EFEFEF",
                borderColor: "#5F2BCF",
              },
              marginLeft: "70px",
              marginTop: "14px",
              marginBottom: "14px",
            }}
            onClick={handleEditProfile}

          >
            Edit Profile
          </Button>
      </div>
    </div>
  );
};

export default RProfileMain;
