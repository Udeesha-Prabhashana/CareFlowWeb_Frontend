import React from "react";
import "./home.scss";
import SidebarAdmin from "../../components/sidebarAdmin/sidebarAdmin";

// Import images
import phoneIcon from "../../components/images/phone.png";
import locationIcon from "../../components/images/location.png";
import doctorImage from "../../components/images/doctorhalf.png";

const Home: React.FC = () => {
  return (
    <div className="homeA">
      <SidebarAdmin />
      <div className="homeContainerA">
        <div className="welcomeContainer">
          <div className="welcomeText">
            <h1>
              Good Morning, <span className="adminName">Admin!</span>
            </h1>
            <p>Welcome to your Dashboard</p>
            <button className="welcomeButton">Welcome To CareFlow!</button>
            <p className="description">
              “We provide exceptional healthcare services through CareFlow, our
              dedicated app that streamlines patient record management and ensures
              doctors have seamless access to medical histories for better care and
              communication.”
            </p>
            <div className="contactInfo">
              <p>
                <img src={phoneIcon} alt="Phone Icon" className="icon" />
                <span className="contactText">+94 71 0 225 225</span>
              </p>
              <p>
                <img src={locationIcon} alt="Location Icon" className="icon" />
                <span className="contactText">
                  CareFlow PLC, No: 108, W A D Ramanayake Mawatha, Colombo 2, Sri Lanka.
                </span>
              </p>
            </div>
          </div>
          <div className="welcomeImage">
            <img src={doctorImage} alt="Doctor with stethoscope" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;