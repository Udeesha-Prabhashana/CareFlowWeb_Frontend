import React from 'react';
import "./profile.scss";
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';
import SidebarPatient from '../../components/sidebarPatient/sidebarPatient';

const Profile1 = () => {
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate('/profileLu');
    };

    return (
        <div className="chatbotL">
            <SidebarPatient />
            <div className="chatbotContainerL">
                {/*<NavbarLu />*/}
                <div className="main">
                    <div className="homeContainer2lu">
                        <div className="bodyContainerLu">
                            <div className="mainTopic">Kasun Jayasinghe</div>
                            <div className="subTopic"></div>
                        </div>
                    </div>
                    <div className="w-full ml-14 mr-14 relative">
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
                    </div>
                    <Box className="content">
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <div className="line">First Name :</div>
                                <div className="line">Last Name :</div>
                                <div className="line">Date of Birth :</div>
                                <div className="line">Phone Number :</div>
                                <div className="line">Height :</div>     
                                <div className="line">Weight :</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="line"><b>Kasun </b></div>
                                <div className="line"><b>Jayasinghe</b></div>
                                <div className="line"><b>23/07/2024</b></div>
                                <div className="line"><b>071 267 9172</b></div>
                                <div className="line"><b>155 cm</b></div>
                                <div className="line"><b>57 kg</b></div>
                            </Grid>
                        </Grid>
                    </Box>
                    <div className="flex justify-center mt-10 mb-4">
                        <Button
                            className="button"
                            variant="outlined"
                            sx={{
                                width: '150px',
                                height: '40px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '11px',
                                border: '1px solid #855CDD',
                                backgroundColor: '#855CDD', // Purple color
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#5F2BCF',
                                    border: '1px solid #5F2BCF',
                                },
                                marginTop: '20px' // Added margin-top
                            }}
                            onClick={handleEditProfile}
                        >
                            Edit Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile1;
