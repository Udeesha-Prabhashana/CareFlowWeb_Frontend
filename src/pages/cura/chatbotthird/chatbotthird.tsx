import React from 'react';
import SidebarLu from "../../../components/sidebarLu/SidebarLu";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "./chatbotthird.scss";
import { useParams } from 'react-router-dom';

const ChatbotThird = () => {
  return (
    <div className="chatbot">
      <SidebarLu />
      <div className="chatbotContainer">
        <NavbarLu />
        <div className="main">
        <img src="/images/bg.png" alt="Background" className="background-image" />
        <img src="/images/Vector.png" alt="Vector" className="vector-image" />
          <div className="text-containerth">
            Are you sure you want to make an appointment with Dr.Kasun Senanayake?
          </div>
          <div className="booking-cards">
            <div className="booking-card">
              <div className="yes">
                <h3>Yes</h3>
              </div>
            </div>
            <div className="booking-card">
              <div className="no">
                <h3>No</h3>
              </div>
            </div>
          </div>
          <div className="paragraph">
          This AI medical bot is designed to provide information and support regarding general health and medical conditions.
          It is not a substitute for professional medical advice, diagnosis, or treatment.
        </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotThird;
