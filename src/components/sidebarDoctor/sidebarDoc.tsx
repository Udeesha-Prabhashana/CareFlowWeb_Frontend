import React, { useContext } from "react";
import "./sidebarDoc.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const SidebarDoctor: React.FC = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(DarkModeContext)!;

    return (
        <div className="SidebarDoc">
            <div className="topDoc">
                <Link to="/doctor/home" style={{ textDecoration: "none" }}>
                    <span className="logoDoc">Care Flow</span>
                </Link>
            </div>
            <hr /> {/* hr use to get line */}
            <div className="centerDoc">
                <ul>
                    <p className="titleDoc">MAIN</p>
                    <Link to="/doctor/home" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="iconDoc" />
                            <span> Home</span>
                        </li>
                    </Link>
                    {/*<p className="titleDoc">LIST</p>*/}
                    <Link to="/doctor/bookings" style={{ textDecoration: "none" }}>
                        <li>
                            <Person2OutlinedIcon className="iconDoc" />
                            <span> My Bookings </span>
                        </li>
                    </Link>
                    <Link to="/doctor/revenue_records" style={{ textDecoration: "none" }}>
                        <li>
                            <Person2OutlinedIcon className="iconDoc" />
                            <span> Revenue Records </span>
                        </li>
                    </Link>
                    <Link to="/doctor/medical_records" style={{ textDecoration: "none" }}>
                        <li>
                            <Person2OutlinedIcon className="iconDoc" />
                            <span> Medical Records </span>
                        </li>
                    </Link>
                    <Link to="/doctor/patients" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="iconDoc" />
                            <span> Patients </span>
                        </li>
                    </Link>
                    {/*<Link to="" style={{ textDecoration: "none" }}>*/}
                    {/*    <li>*/}
                    {/*        <CreditCardIcon className="iconDoc" />*/}
                    {/*        <span> Medical History</span>*/}
                    {/*    </li>*/}
                    {/*</Link>*/}
                    <p className="titleDoc">USEFUL</p>
                    <Link to="/doctor/notifications" style={{ textDecoration: "none" }}>
                        <li>
                            <NotificationsNoneIcon className="iconDoc" />
                            <span> Notification</span>
                        </li>
                    </Link>
                    {/*<li>*/}
                    {/*    <InsertChartIcon className="iconDoc" />*/}
                    {/*    <span> Stats</span>*/}
                    {/*</li>*/}
                    {/*/!*<p className="titleDoc">SERVICE</p>*!/*/}
                    {/*<li>*/}
                    {/*    <SettingsSystemDaydreamOutlinedIcon className="iconDoc" />*/}
                    {/*    <span> System Health</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <PsychologyOutlinedIcon className="iconDoc" />*/}
                    {/*    <span> Logs</span>*/}
                    {/*</li>*/}
                    <Link to="/doctor/settings" style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsApplicationsIcon className="iconDoc" />
                            <span> Settings</span>
                        </li>
                    </Link>
                    <p className="titleDoc">USER</p>
                    <Link to="/doctor/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="iconDoc" />
                            <span> Profile</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className="iconDoc" />
                        <span onClick={() => navigate("/login")}> Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottomDoc"> {/*give choose color options in dashboard*/}
                <div
                    className="colorOptionDoc"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOptionDoc"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
};

export default SidebarDoctor;
