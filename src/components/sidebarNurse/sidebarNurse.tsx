import React, { useState, useContext, useEffect } from "react";
import "../sidebarNurse/sidebarNurse.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import logo from "../../components/images/logo.png";
// import vector from "../../components/images/nurseVector.jpg";
import vector from "../images/nurseVector.jpg";

const SidebarNurse: React.FC = () => {
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
        <div className="SidebarNurse">
            <div className="topNurse">
                <Link to="/nurse/home" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/nurse/home")}>
                    <img src={logo} alt="CareFlow Logo" className="logoImageNurse" />
                </Link>
            </div>
            <hr />
            <div className="centerNurse">
                <ul>
                    <li className={activeLink === "/nurse/home" ? "activeNurse" : ""} onClick={() => handleLinkClick("/nurse/home")}>
                        <DashboardIcon className="iconNurse" />
                        <span>Home</span>
                    </li>
                    <li className={activeLink === "/nurse/patients" ? "activeNurse" : ""} onClick={() => handleLinkClick("/nurse/patients")}>
                        <Person2OutlinedIcon className="iconNurse" />
                        <span>Patients</span>
                    </li>
                </ul>
            </div>
            <div className="bottomContainerNurse">
                <ul>
                    {/* <li className={activeLink === "/nurse/notifications" ? "activeNurse" : ""} onClick={() => handleLinkClick("/nurse/notifications")}>
                        <NotificationsNoneIcon className="iconNurse" />
                        <span>Notifications</span>
                        <span className="notificationBadge">2</span>
                    </li> */}
                    <li className={activeLink === "/nurse/settings" ? "activeNurse" : ""} onClick={() => handleLinkClick("/nurse/settings")}>
                        <SettingsIcon className="iconNurse" />
                        <span>Settings</span>
                    </li>
                    <li onClick={() => handleLinkClick("/login")}>
                        <ExitToAppIcon className="iconNurse" />
                        <span>Logout</span>
                    </li>
                </ul>
                <Link to="/nurse/profile" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/nurse/profile")}>
                    <div className="profileNurse">
                        <img src={vector} alt="Profile"/>
                        <div className="detailsNurse">
                            <span className="nameNurse">Nurse Jane</span>
                            <br></br>
                            <span className="emailNurse">jane@gmail.com</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SidebarNurse;
