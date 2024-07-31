import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import logo from "../../components/images/logo.png";
import patient from "../../components/images/patient.jpg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "../../components/sidebarPatient/sidebarPatient.scss";

const SidebarPatient: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { dispatch } = useContext(DarkModeContext)!;
    const [activeLink, setActiveLink] = useState<string>(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        navigate(link);
    };

    return (
        <div className="SidebarPatient">
            <div className="topPatient">
                <Link to="/userloginhome" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/userloginhome")}>
                    <img src={logo} alt="CareFlow Logo" className="logoImagePatient" />
                </Link>
            </div>
            <hr />
            <div className="centerPatient">
                <ul>
                    <li className={activeLink === "/userloginhome" ? "activePatient" : ""} onClick={() => handleLinkClick("/userloginhome")}>
                        <DashboardIcon className="iconPatient" />
                        <span>Home</span>
                    </li>
                    <li className={activeLink === "/channeling" ? "activePatient" : ""} onClick={() => handleLinkClick("/channeling")}>
                        <Person2OutlinedIcon className="iconPatient" />
                        <span>New Booking</span>
                    </li>
                    <li className={activeLink === "/appointments" ? "activePatient" : ""} onClick={() => handleLinkClick("/appointments")}>
                        <CreditCardIcon className="iconPatient" />
                        <span>Appointments</span>
                    </li>
                    <li className={activeLink === "/doclist2" ? "activePatient" : ""} onClick={() => handleLinkClick("/doclist2")}>
                        <AccountBoxIcon className="iconPatient" />
                        <span>Doctors</span>
                    </li>
                    <li className={activeLink === "/chatbot" ? "activePatient" : ""} onClick={() => handleLinkClick("/chatbot")}>
                        <ForumIcon className="iconPatient" />
                        <span>Chat with Cura</span>
                    </li>
                    <li className={activeLink === "/medical_history" ? "activePatient" : ""} onClick={() => handleLinkClick("/medical_history")}>
                        <FolderSharedIcon className="iconPatient" />
                        <span>Medical History</span>
                    </li>
                </ul>
            </div>
            <div className="bottomContainerPatient">
                <ul>
                    <li className={activeLink === "/notifications" ? "activePatient" : ""} onClick={() => handleLinkClick("/notifications")}>
                        <NotificationsNoneIcon className="iconPatient" />
                        <span>Notifications</span>
                        <span className="notificationBadge">2</span>
                    </li>
                    <li className={activeLink === "/settings" ? "activePatient" : ""} onClick={() => handleLinkClick("/settings")}>
                        <SettingsApplicationsIcon className="iconPatient" />
                        <span>Settings</span>
                    </li>
                    <li onClick={() => handleLinkClick("/login")}>
                        <ExitToAppIcon className="iconPatient" />
                        <span>Logout</span>
                    </li>
                </ul>
                <Link to="/profileLu" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/profileLu")}>
                    <div className="profilePatient">
                        <img src={patient} alt="Profile"/>
                        <div className="detailsPatient">
                            <span className="namePatient">Mr. Kasun</span>
                            <span className="emailPatient">kasunjay@gmail.com</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SidebarPatient;
