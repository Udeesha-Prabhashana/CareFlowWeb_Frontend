import React, { useState, useContext } from "react";
import "../sidebarDoctor/sidebarDoc.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const SidebarDoctor: React.FC = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(DarkModeContext)!;
    const [activeLink, setActiveLink] = useState<string>("/doctor/home");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        if (link === "/login") {
            navigate("/login");
        }
    };

    return (
        <div className="SidebarDoc">
            <div className="topDoc">
                <Link to="/doctor/home" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/home")}>
                    <span className="logoDoc">CareFlow</span>
                </Link>
            </div>
            <hr />
            <div className="centerDoc">
                <ul>
                    <Link to="/doctor/home" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/home")}>
                        <li className={activeLink === "/doctor/home" ? "activeDoc" : ""}>
                            <DashboardIcon className="iconDoc" />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to="/doctor/bookings" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/bookings")}>
                        <li className={activeLink === "/doctor/bookings" ? "activeDoc" : ""}>
                            <Person2OutlinedIcon className="iconDoc" />
                            <span>My Bookings</span>
                        </li>
                    </Link>
                    <Link to="/doctor/revenue_records" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/revenue_records")}>
                        <li className={activeLink === "/doctor/revenue_records" ? "activeDoc" : ""}>
                            <CreditCardIcon className="iconDoc" />
                            <span>Revenue Records</span>
                        </li>
                    </Link>
                    <Link to="/doctor/patients" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/patients")}>
                        <li className={activeLink === "/doctor/patients" ? "activeDoc" : ""}>
                            <InsertChartIcon className="iconDoc" />
                            <span>Patients</span>
                        </li>
                    </Link>
                    <Link to="/doctor/profile" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/profile")}>
                        <li className={activeLink === "/doctor/profile" ? "activeDoc" : ""}>
                            <AccountCircleOutlinedIcon className="iconDoc" />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to="/doctor/notifications" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/notifications")}>
                        <li className={activeLink === "/doctor/notifications" ? "activeDoc" : ""}>
                            <NotificationsNoneIcon className="iconDoc" />
                            <span>Notifications</span>
                            <span className="notificationBadge">2</span>
                        </li>
                    </Link>
                    <Link to="/doctor/settings" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/settings")}>
                        <li className={activeLink === "/doctor/settings" ? "activeDoc" : ""}>
                            <SettingsApplicationsIcon className="iconDoc" />
                            <span>Settings</span>
                        </li>
                    </Link>
                    <li onClick={() => handleLinkClick("/login")}>
                        <ExitToAppIcon className="iconDoc" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottomDoc">
                <div className="profileDoc">
                    <img src="https://via.placeholder.com/40" alt="Profile" />
                    <div className="detailsDoc">
                        <span className="nameDoc">Michael Smith</span>
                        <span className="emailDoc">michaelsmith12@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarDoctor;
