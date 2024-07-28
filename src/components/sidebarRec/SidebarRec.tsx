import React, { useState, useContext, useEffect } from "react";
import "../sidebarRec/SidebarRec.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import logo from "../../components/images/logo.png";
// import vector from "../../components/images/doctorVector.jpg";
import vector from "../images/rec.jpg";

const SidebarRec: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useContext(DarkModeContext)!;
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (link === "/login") {
      navigate("/login");
    } else {
      navigate(link);
    }
  };

  return (
      <div className="SidebarRec">
        <div className="topRec">
          <Link to="/receptionist/home" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/receptionist/home")}>
            <img src={logo} alt="CareFlow Logo" className="logoImageRec" />
          </Link>
        </div>
        <hr />
        <div className="centerRec">
          <ul>
            <li className={activeLink === "/receptionist/home" ? "activeRec" : ""} onClick={() => handleLinkClick("/receptionist/home")}>
              <DashboardIcon className="iconRec" />
              <span>Home</span>
            </li>
            <li className={activeLink === "/receptionist/bookings" ? "activeRec" : ""} onClick={() => handleLinkClick("/receptionist/bookings")}>
              <Person2OutlinedIcon className="iconRec" />
              <span>Bookings</span>
            </li>
            <li className={activeLink === "/receptionist/doctors" ? "activeRec" : ""} onClick={() => handleLinkClick("/receptionist/doctors")}>
              <CreditCardIcon className="iconRec" />
              <span>Doctors</span>
            </li>
          </ul>
        </div>
        <div className="bottomContainerRec">
          <ul>
            <li className={activeLink === "/receptionist/notifications" ? "activeRec" : ""} onClick={() => handleLinkClick("/receptionist/notifications")}>
              <NotificationsNoneIcon className="iconRec" />
              <span>Notifications</span>
              <span className="notificationBadge">2</span>
            </li>
            <li className={activeLink === "/receptionist/settings" ? "activeRec" : ""} onClick={() => handleLinkClick("/receptionist/settings")}>
              <SettingsApplicationsIcon className="iconRec" />
              <span>Settings</span>
            </li>
            <li onClick={() => handleLinkClick("/login")}>
              <ExitToAppIcon className="iconRec" />
              <span>Logout</span>
            </li>
          </ul>
          <Link to="/receptionist/profile" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/receptionist/profile")}>
            <div className="profileRec">
              <img src={vector} alt="Profile"/>
              <div className="detailsRec">
                <span className="nameRec">Kamala </span>
                <span className="emailRec">michaelsmith12@gmail.com</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
};

export default SidebarRec;
