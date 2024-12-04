import React, { useState, useContext, useEffect } from "react";
import "../sidebarDoctor/sidebarDoc.scss";
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
import vector from "../images/doctorVector.jpg"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const SidebarDoctor: React.FC = () => {
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
        <div className="SidebarDoc">
            <div className="topDoc">
                <Link to="/doctor/home" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/home")}>
                    <img src={logo} alt="CareFlow Logo" className="logoImageDoc" />
                </Link>
            </div>
            <hr />
            <div className="centerDoc">
                <ul>
                    <li className={activeLink === "/doctor/home" ? "activeDoc" : ""} onClick={() => handleLinkClick("/doctor/home")}>
                        <DashboardIcon className="iconDoc" />
                        <span>Home</span>
                    </li>
                    <li className={activeLink === "/doctor/bookings" ? "activeDoc" : ""} onClick={() => handleLinkClick("/doctor/bookings")}>
                        <Person2OutlinedIcon className="iconDoc" />
                        <span>My Booking</span>
                    </li>
                    <li className={activeLink === "/doctor/patients" ? "activeDoc" : ""} onClick={() => handleLinkClick("/doctor/patients")}>
                        <AccountBoxIcon className="iconDoc" />
                        <span>Patients</span>
                    </li>
                    <li className={activeLink === "/doctor/revenue_records" ? "activeDoc" : ""} onClick={() => handleLinkClick("/doctor/revenue_records")}>
                        <InsertChartIcon className="iconDoc" />
                        <span>Revenue Records</span>
                    </li>
                </ul>
            </div>
            <div className="bottomContainerDoc">
                <ul>
                    {/* <li className={activeLink === "/doctor/notifications" ? "activeDoc" : ""} onClick={() => handleLinkClick("/doctor/notifications")}>
                        <NotificationsNoneIcon className="iconDoc" />
                        <span>Notifications</span>
                        <span className="notificationBadge">2</span>
                    </li> */}
                    <li className={activeLink === "/doctor/settings" ? "activeDoc" : ""} onClick={() => handleLinkClick("/doctor/settings")}>
                        <SettingsApplicationsIcon className="iconDoc" />
                        <span>Settings</span>
                    </li>
                    <li onClick={() => handleLinkClick("/login")}>
                        <ExitToAppIcon className="iconDoc" />
                        <span>Logout</span>
                    </li>
                </ul>
                {/* <Link to="/doctor/profile" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/profile")}> */}
                <div className="profileDoc">
                    <img 
                        src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" 
                        alt="Profile" 
                    />
                    <div className="detailsDoc">
                        <span className="nameDoc">Sadun Perera</span>
                        <span className="emailDoc">sadunperera12@gmail.com</span>
                    </div>
                </div>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default SidebarDoctor;
