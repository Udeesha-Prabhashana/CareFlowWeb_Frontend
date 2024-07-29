import React, { useState, useContext, useEffect } from "react";
import "../sidebarAdmin/sidebarAdmin.scss";
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
import vector from "../images/doctorVector.jpg";

const SidebarAdmin: React.FC = () => {
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
        <div className="SidebarAdm">
            <div className="topAdm">
                <Link to="/adminhome" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/home")}>
                    <img src={logo} alt="CareFlow Logo" className="logoImageAdm" />
                </Link>
            </div>
            <hr />
            <div className="centerAdm">
                <ul>
                    <li className={activeLink === "/adminhome" ? "activeDoc" : ""} onClick={() => handleLinkClick("/adminhome")}>
                        <DashboardIcon className="iconAdm" />
                        <span>Home</span>
                    </li>
                    <li className={activeLink === "/adminhome/Appointments" ? "activeDoc" : ""} onClick={() => handleLinkClick("/adminhome/Appointments")}>
                        <Person2OutlinedIcon className="iconAdm" />
                        <span>Appointment</span>
                    </li>
                    <li className={activeLink === "/adminhome/Patients" ? "activeDoc" : ""} onClick={() => handleLinkClick("/adminhome/Patients")}>
                        <CreditCardIcon className="iconAdm" />
                        <span>Patients</span>
                    </li>
                    <li className={activeLink === "/adminhome/Doctors" ? "activeDoc" : ""} onClick={() => handleLinkClick("/adminhome/Doctors")}>
                        <InsertChartIcon className="iconAdm" />
                        <span>Doctors</span>
                    </li>
                    <li className={activeLink === "/adminhome/Nurses" ? "activeDoc" : ""} onClick={() => handleLinkClick("/adminhome/Nurses")}>
                        <InsertChartIcon className="iconAdm" />
                        <span>Nurse</span>
                    </li>
                    <li className={activeLink === "/adminhome/Receptionists" ? "activeDoc" : ""} onClick={() => handleLinkClick("/adminhome/Receptionists")}>
                        <InsertChartIcon className="iconAdm" />
                        <span>Receptionists</span>
                    </li>
                    <li className={activeLink === "/adminhome/revenuadmin" ? "activeDoc" : ""} onClick={() => handleLinkClick("/adminhome/revenuadmin")}>
                        <InsertChartIcon className="iconAdm" />
                        <span>Revenu Recodes</span>
                    </li>
                </ul>
            </div>
            <div className="bottomContainerAdm">
                <ul>
                    <li className={activeLink === "/adminhome/notification" ? "activeAdm" : ""} onClick={() => handleLinkClick("/adminhome/notification")}>
                        <NotificationsNoneIcon className="iconAdm" />
                        <span>Notifications</span>
                        <span className="notificationBadge">2</span>
                    </li>
                    <li className={activeLink === "/adminhome/settings" ? "activeAdm" : ""} onClick={() => handleLinkClick("/adminhome/settings")}>
                        <SettingsApplicationsIcon className="iconAdm" />
                        <span>Settings</span>
                    </li>
                    <li onClick={() => handleLinkClick("/login")}>
                        <ExitToAppIcon className="iconAdm" />
                        <span>Logout</span>
                    </li>
                </ul>
                <div className="bottomad"> {/*give choose color options in dashboard*/}
                    <div
                    className="colorOptionad"
                    onClick={() => dispatch({ type: "LIGHT" })}
                    ></div>
                    <div
                    className="colorOptionad"
                    onClick={() => dispatch({ type: "DARK" })}
                    ></div>
                </div>
                {/* <Link to="/adminhome" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/adminhome")}>
                    <div className="profileAdm">
                        <img src={vector} alt="Profile"/>
                        <div className="detailsAdm">
                            <span className="nameAdm">Michael Smith</span>
                            <span className="emailAdm">michaelsmith12@gmail.com</span>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    );
};

export default SidebarAdmin;
