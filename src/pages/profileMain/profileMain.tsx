import React, { useEffect, useState } from "react";
import "./profileMain.scss";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Toast for better notifications
import vector from "../../components/images/patient.jpg";

const ProfileMain: React.FC = () => {
  const navigate = useNavigate();

  // State to hold profile data and error/loading states
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch user profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = localStorage.getItem("user");
        let token = null;

        if (user) {
          const parsedUser = JSON.parse(user);
          token = parsedUser.access_token;

          const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/getUserById`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setProfileData(response.data);
          setLoading(false);
        } else {
          toast.error("Field Authentication");
        }
      } catch (error) {
        console.error("Error fetching Profile Details:", error);
      }
    };

    fetchProfileData();
  }, []);
  // console.log(profileData)
  const handleEditProfile = () => {
    navigate("/profile-edit");
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there is an error
  if (error || !profileData) {
    return (
      <div className="profileMain">
        <SidebarPatient />
        <div className="homeContainer2lu">
          <div className="bodyContainerLu flex justify-between items-center">
            <div>
              <div className="mainTopic">Your Profile</div>
              <div className="subTopic">Unable to load profile data</div>
            </div>
          </div>
          <div style={{ padding: "20px", color: "red" }}>
            An error occurred while fetching your profile data. Please try again
            later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profileMain">
      <SidebarPatient />
      <div className="homeContainer2lu">
        <div className="bodyContainerLu flex justify-between items-center">
          <div>
            <div className="mainTopic">Your Profile</div>
            <div className="subTopic">View your Profile Details</div>
          </div>
        </div>

        <div className="w-full ml-14 mr-14 relative mt-6">
          <img
            src="/images/locations/Profile1.png"
            alt="Cover"
            className="w-full rounded-lg"
          />
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
            <img
              src={profileData.photoUrl}
              className="w-40 h-40 border-4 border-white rounded-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col mt-20 ml-3">
            <p
              className="prof-name mt-1"
              style={{ fontSize: "25px", marginBottom: "0px" }}
            >
              {profileData.name || "N/A"}
            </p>
            <p
              className="prof-email"
              style={{ fontSize: "15px", color: "#808080", marginTop: "0px" }}
            >
              {profileData.emailId || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full ml-14 mr-14 mt-10">
          {[
            { label: "Name", value: profileData.name },
            { label: "Email", value: profileData.emailId },
            { label: "Phone Number", value: profileData.mobileNumber },
          ].map((item, index) => (
            <div key={index} className="flex justify-between mb-4 px-4 w-full">
              <div className="text-gray-700 font-semibold w-1/2">
                {item.label}:
              </div>
              <div className="text-gray-700 w-1/2">{item.value || "N/A"}</div>
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

export default ProfileMain;
