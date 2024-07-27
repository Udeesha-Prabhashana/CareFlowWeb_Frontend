import React, { useContext } from "react";
import "./sidebarNurse.scss";
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

const SidebarNursetor: React.FC = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(DarkModeContext)!;

    return (
        <div className="SidebarNurse">
            <div className="topNurse">
                <Link to="/nurse/home" style={{ textDecoration: "none" }}>
                    <span className="logoNurse">Care Flow</span>
                </Link>
            </div>
            <hr /> {/* hr use to get line */}
            <div className="centerNurse">
                <ul>
                    <p className="titleNurse">MAIN</p>
                    <Link to="/nurse/home" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="iconNurse" />
                            <span> Home</span>
                        </li>
                    </Link>
                    {/*<p className="titleNurse">LIST</p>*/}
                    <Link to="/nurse/patients" style={{ textDecoration: "none" }}>
                        <li>
                            <Person2OutlinedIcon className="iconNurse" />
                            <span> Patients </span>
                        </li>
                    </Link>
                    


                    {/*<Link to="" style={{ textDecoration: "none" }}>*/}
                    {/*    <li>*/}
                    {/*        <CreditCardIcon className="iconNurse" />*/}
                    {/*        <span> Medical History</span>*/}
                    {/*    </li>*/}
                    {/*</Link>*/}
                    <p className="titleNurse">USEFUL</p>
                    <Link to="/Nursetor/notifications" style={{ textDecoration: "none" }}>
                        <li>
                            <NotificationsNoneIcon className="iconNurse" />
                            <span> Notification</span>
                        </li>
                    </Link>
                    {/*<li>*/}
                    {/*    <InsertChartIcon className="iconNurse" />*/}
                    {/*    <span> Stats</span>*/}
                    {/*</li>*/}
                    {/*/!*<p className="titleNurse">SERVICE</p>*!/*/}
                    {/*<li>*/}
                    {/*    <SettingsSystemDaydreamOutlinedIcon className="iconNurse" />*/}
                    {/*    <span> System Health</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <PsychologyOutlinedIcon className="iconNurse" />*/}
                    {/*    <span> Logs</span>*/}
                    {/*</li>*/}
                    <Link to="/Nursetor/settings" style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsApplicationsIcon className="iconNurse" />
                            <span> Settings</span>
                        </li>
                    </Link>
                    <p className="titleNurse">USER</p>
                    <Link to="/Nursetor/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="iconNurse" />
                            <span> Profile</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className="iconNurse" />
                        <span onClick={() => navigate("/login")}> Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottomNurse"> {/*give choose color options in dashboard*/}
                <div
                    className="colorOptionNurse"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOptionNurse"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
};

export default SidebarNursetor;
