import React, { useEffect } from "react";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import doctorImage from "../../components/images/doctor2.png";
import "./homelu.scss";

const HomeLu: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAskCuraClick = () => {
        navigate("/chatbot");
    };

    useEffect(() => {
        if (location.pathname === "/userloginhome") {
            const script1 = document.createElement('script');
            script1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
            script1.async = true;
            document.body.appendChild(script1);

            const script2 = document.createElement('script');
            script2.src = "https://mediafiles.botpress.cloud/ca64de85-f6f8-4c02-9bde-a7f2e687335c/webchat/v2/config.js";
            script2.async = true;
            document.body.appendChild(script2);

            return () => {
                document.body.removeChild(script1);
                document.body.removeChild(script2);
            };
        }
    }, [location.pathname]);

    return (
        <div className="homelu">
            <SidebarPatient />
            <div className="homeContainer2lu">
                <div className="bodyContainerLu">
                    <div className="mainTopic">
                        Good Morning, <span className="purpleText">Udeesha</span>
                    </div>
                    <div className="subTopic">Welcome to your Dashboard</div>
                    
                    <div className="widgetslu">
                        <div className="textContainer">
                            <h2>Welcome To CareFlow!</h2>
                            <p>
                                "We provide exceptional healthcare services through CareFlow, our
                                dedicated app that streamlines patient record management and
                                ensures doctors have seamless access to medical histories for
                                better care and communication."
                            </p>
                        </div>
                        <div className="imageContainer">
                            <img
                                src={doctorImage}
                                alt="Doctor Illustration"
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-between">
                        <div>
                            <div className="mainTopic mt-20">
                                Ready to make your first appointment?
                            </div>
                            <div className="subTopic mt-1">
                                Cura is an AI Powered chatbot that can help you
                            </div>
                            <div className="subTopic">
                                find your doctor and book a doctor's appointment
                            </div>
                            <div className="ml-5 mt-10">
                                <Button
                                    variant="contained"
                                    startIcon={<AutoAwesomeIcon />}
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#855CDD',
                                        color: 'white',
                                        fontFamily: 'Roboto',
                                        fontSize: '20px',
                                        width: '200px',
                                        height: '44px',
                                        borderRadius: '65px',
                                        '&:hover': {
                                            backgroundColor: '#5F2BCF',
                                        },
                                    }}
                                    onClick={handleAskCuraClick}
                                >
                                    Ask Cura
                                </Button>
                            </div>
                        </div>
                        <div className="hero_image">
                            <img src="/images/locations/Home1.png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLu;
