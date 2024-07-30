import React from "react";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "./RProfile.scss";
import "../../../tailwind.css";
import SidebarRec from "../../../components/sidebarRec/SidebarRec";
import { AiOutlineSearch } from "react-icons/ai";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const RProfile: React.FC = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/receptionist/profile");
  };
  return (
    <div className="RProfile">
      <SidebarRec />
      {/*<NavbarLu />*/}

      <div className="homeContainer2lu">
        <div className="bodyContainerLu">
          <div className="mainTopic">Your Profile</div>
          <div className="subTopic">Edit your Profile Details</div>
        </div>

        <div className="w-full ml-14 mr-14 relative">
            <img src= "/images/locations/Profile1.png" alt="Cover" className="w-full rounded-lg" />
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7a1 1 0 011-1h3l2-2h8l2 2h3a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 21h8M12 17a4 4 0 110-8 4 4 0 010 8z"
                    />
                </svg>
                Change Background
                </button>
            </div>
        </div>


        <div className="flex items-start -mt-20 ml-24">
          <div className="relative inline-block">
            <img
              src="/images/locations/Profile2.png" 
              className="w-40 border-4 border-white rounded-full"
              alt="Profile"
            />
            <div className="bg-purple-500/90 rounded-full w-8 h-8 text-center absolute bottom-0 right-0 mb-2 mr-2 flex items-center justify-center">
              <input
                type="file"
                name="profile"
                id="upload_profile"
                hidden
                required
              />
              <label htmlFor="upload_profile" className="cursor-pointer">
                <svg
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="#FFFFFF" // Set stroke color to white
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-20 ml-3">
            <p
              className="prof-name mt-1"
              style={{ fontSize: "25px", marginBottom: "0px" }}
            >
              Micheal Smith
            </p>
            <p
              className="prof-email"
              style={{ fontSize: "15px", color: "#808080", marginTop: "0px" }}
            >
              michaelsmith12@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full ml-14 mr-14">
          <div className="flex mb-4">
            <div className="flex flex-col flex-grow mr-4">
              <label htmlFor="fname" className="text-gray-700 mb-2">
                First Name
              </label>
              <div className="flex items-center border border-purple-500/90 rounded-lg">
                <input
                  id="fname"
                  type="text"
                  placeholder="Michael"
                  className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
                />
                <div className="p-2">
                  <EditNoteOutlinedIcon style={{ color: "#737373" }} />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="lname" className="text-gray-700 mb-2">
                Last Name
              </label>
              <div className="flex items-center border border-purple-500/90 rounded-lg">
                <input
                  id="lname"
                  type="text"
                  placeholder="Smith"
                  className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
                />
                <div className="p-2">
                  <EditNoteOutlinedIcon style={{ color: "#737373" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex flex-col flex-grow mr-4">
              <label htmlFor="dob" className="text-gray-700 mb-2">
                Date of Birth
              </label>
              <div className="flex items-center border border-purple-500/90 rounded-lg">
                <input
                  id="dob"
                  type="text"
                  placeholder="YYYY-MM-DD"
                  className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
                />
                <div className="p-2">
                  <EditNoteOutlinedIcon style={{ color: "#737373" }} />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="pno" className="text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex items-center border border-purple-500/90 rounded-lg">
                <input
                  id="pno"
                  type="text"
                  placeholder="123-456-7890"
                  className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
                />
                <div className="p-2">
                  <EditNoteOutlinedIcon style={{ color: "#737373" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex flex-col flex-grow mr-4">
              <label htmlFor="height" className="text-gray-700 mb-2">
                Height
              </label>
              <div className="flex items-center border border-purple-500/90 rounded-lg">
                <input
                  id="height"
                  type="text"
                  placeholder="175 cm"
                  className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
                />
                <div className="p-2">
                  <EditNoteOutlinedIcon style={{ color: "#737373" }} />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="weight" className="text-gray-700 mb-2">
                Weight
              </label>
              <div className="flex items-center border border-purple-500/90 rounded-lg">
                <input
                  id="weight"
                  type="text"
                  placeholder="60 kg"
                  className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
                />
                <div className="p-2">
                  <EditNoteOutlinedIcon style={{ color: "#737373" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex flex-col flex-grow">
              <label htmlFor="medicines" className="text-gray-700 mb-2">
                Medicines
              </label>
              <div className="flex items-center border border-purple-500/90 rounded-lg">
                <textarea
                  id="medicines"
                  placeholder="Enter your medicines..."
                  className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-lg"
                  rows={4}
                />
              </div>
            </div>
          </div>

          <Button className="ml-14"
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#855CDD",
            color: "white",
            fontFamily: "Roboto",
            fontSize: "16px",
            width: "90px",
            height: "42px",
            borderRadius: "9px",
            "&:hover": {
              backgroundColor: "#5F2BCF", // Change to your desired hover color
            },
          }}
          onClick={handleProfile}
        >
          Save
        </Button>

        </div>
      </div>
    </div>
  );
};

export default RProfile;
