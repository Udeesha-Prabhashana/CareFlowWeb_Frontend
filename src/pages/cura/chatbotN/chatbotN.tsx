import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarLu from "../../../components/sidebarLu/SidebarLu";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "./chatbotN.scss";

const ChatbotN = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/chatbotL');
    };
  
    return (
      <div className="chatbot">
        <SidebarLu />
        <div className="chatbotContainer">
          <NavbarLu />
          <div className="main">
            <img src="/images/bg.png" alt="Background" className="background-image" />
            <img src="/images/Vector.png" alt="Vector" className="vector-image"/>
            <div className="textn-container">
              It Looks like you should see a <br /> Neurologist for this issue. <br /> <br />
              Do you want to see available <br /> Doctors?
            </div>
            <div className="button-container">
              <button className="yes-button" onClick={handleButtonClick}>Yes</button>
              <button className="no-button">No</button>
            </div>
            <div className="paragraphn">
              This AI medical bot is designed to provide information and support regarding general health and medical conditions. 
              <br />It is not a substitute for professional medical advice, diagnosis, or treatment.
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default ChatbotN;
