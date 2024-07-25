import React from 'react';
import SidebarLu from "../../../components/sidebarLu/SidebarLu";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "./chatbotL.scss";
import { useNavigate } from 'react-router-dom';

const ChatbotL = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/chatbotthird');
    };

    return (
        <div className="chatbotL">
            <SidebarLu />
            <div className="chatbotContainerL">
                <NavbarLu />
                <div className="main">
                    <img src="/images/bg.png" alt="Background" className="background-image" />
                    <img src="/images/Vector.png" alt="Vector" className="vector-imagein" />
                    <div className="text-containerl">
                        Of Course! Here are the Neurologists in <br />
                        CareFlow Hospital. <br /> Who do you like to book?
                    </div>
                    <div className="doctor-card" onClick={handleCardClick}>
                        <div className="doctor-details">
                            <h3>Dr. Saman Kumara</h3>
                        </div>
                    </div>
                    <div className="doctor-card" onClick={handleCardClick}>
                        <div className="doctor-details">
                            <h3>Dr. Kasun Senanayaka</h3>
                        </div>
                    </div>
                    <div className="doctor-card" onClick={handleCardClick}>
                        <div className="doctor-details">
                            <h3>Dr. Nuwan Senanayake</h3>
                        </div>
                    </div>
                </div>
                <div className="paragraphl">
                    This AI medical bot is designed to provide information and support regarding general health and medical conditions.
                    It is not a substitute for professional medical advice, diagnosis, or treatment.
                </div>
            </div>
        </div>
    );
};

export default ChatbotL;
