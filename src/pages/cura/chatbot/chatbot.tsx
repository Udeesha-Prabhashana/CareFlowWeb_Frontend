import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarLu from "../../../components/sidebarLu/SidebarLu";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "../chatbot/chatbot.scss"
import SidebarPatient from "../../../components/sidebarPatient/sidebarPatient";

const Chatbot = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/curachat');
  };

  return (
    <div className="chatbot">
      <SidebarPatient />
      <div className="chatbotContainer">
        {/*<NavbarLu />*/}
        <div className="main">
          <img src="/images/bg.png" alt="Background" className="background-image" />
          <img src="/images/Vector.png" alt="Vector" className="vector-image" />
          <div className="text-container">
            Hello, <br />
            I’m Cura.<br />
            How Can I Help you?
          </div>
          <div className="search-bar">
            <input type="text" placeholder="I have a Back Pain for 7 Days. Which Doctor is good for me?" />
            <button onClick={handleButtonClick}>Ask Cura</button>
          </div>
          {/*<div className="paragraph">*/}
          {/*  This AI medical bot is designed to provide information and support regarding general health and medical conditions.*/}
          {/*  It is not a substitute for professional medical advice, diagnosis, or treatment.*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
