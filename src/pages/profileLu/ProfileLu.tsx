import React, { useEffect, useState } from "react";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Toast for better notifications
import "./ProfileLu.scss";

const ProfileLu: React.FC = () => {
  const navigate = useNavigate();

  // State to hold form data and loading/error states
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    mobileNumber: "",
    photoUrl: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch user profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = localStorage.getItem("user");
        if (!user) {
          toast.error("User not authenticated");
          setError(true);
          setLoading(false);
          return;
        }

        const parsedUser = JSON.parse(user);
        const token = parsedUser.access_token;

        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/getUserById`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // Ensure this is set
            },
          }
        );

        setFormData(response.data); // Populate form with existing data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile details:", err);
        toast.error("Failed to fetch profile details.");
        setError(true);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const user = localStorage.getItem("user");
      if (!user) {
        toast.error("User not authenticated");
        return;
      }

      const parsedUser = JSON.parse(user);
      const token = parsedUser.access_token;

      // Send updated data to the server using POST
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/updateUserProfile`, // Ensure the endpoint accepts POST requests
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Ensure this is set
          },
        }
      );

      toast.success("Profile updated successfully!");
      navigate("/profileLu"); // Navigate back to the profile page
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Failed to update profile.");
    }
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there is an error
  if (error) {
    return (
      <div className="profileLu">
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
    <div className="profileLu">
      <SidebarPatient />
      <div className="homeContainer2lu">
        <div className="bodyContainerLu flex justify-between items-center">
          <div>
            <div className="mainTopic">Edit Your Profile</div>
            <div className="subTopic">Update your profile details below</div>
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
              src={formData.photoUrl || "/images/defaultProfile.png"}
              className="w-40 h-40 border-4 border-white rounded-full object-cover"
              alt="Profile"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full ml-14 mr-14 mt-10"
        >
          {[
            { label: "Name", name: "name", placeholder: "Enter your name" },
            {
              label: "Email",
              name: "emailId",
              placeholder: "Enter your email",
            },
            {
              label: "Phone Number",
              name: "mobileNumber",
              placeholder: "Enter your phone number",
            },
          ].map((field, index) => (
            <div key={index} className="flex flex-col mb-4">
              <label htmlFor={field.name} className="text-gray-700 mb-2">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type="text"
                value={formData[field.name as keyof typeof formData]}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}

          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#855CDD",
              color: "white",
              fontSize: "16px",
              borderRadius: "9px",
              "&:hover": {
                backgroundColor: "#5F2BCF",
              },
              marginBottom: "14px",
            }}
          >
            Save
          </Button>

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
              marginTop: "14px",
              marginBottom: "14px",
            }}
            onClick={() => navigate("/profileLu")}
          >
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileLu;
