import React, { useContext } from "react";
import "./SidebarRec.scss";
import DashboardIcon from "@mui/icons-material/Dashboard"; // SvgIcon components. It depends on @mui/material, which requires Emotion packages
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

const SidebarRec: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(DarkModeContext)!;

  return (
    <div className="SidebarRec">
      <div className="topRec">
        <Link to="/userloginhome" style={{ textDecoration: "none" }}>
          <span className="logoRec">Care Flow</span>
        </Link>
      </div>
      <hr /> {/* hr use to get line */}
      <div className="centerRec">
        <ul>
          <p className="titleRec">MAIN</p>
          <Link to="/receptionist/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="iconRec" />
              <span> Home</span>
            </li>
          </Link>
          <p className="titleRec">LIST</p>
          <Link to="/receptionist/bookings" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconRec" />
              <span> Bookings </span>
            </li>
          </Link>
          <Link to="/receptionist/doctors" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconRec" />
              <span> Doctors </span>
            </li>
          </Link>
          <p className="titleRec">USEFUL</p>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="iconRec" />
            <span> Notification</span>
          </li>
          </Link>
          <li>
            <InsertChartIcon className="iconRec" />
            <span> Stats</span>
          </li>
          <p className="titleRec">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="iconRec" />
            <span> System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="iconRec" />
            <span> Logs</span>
          </li>
          <Link to="/settings" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="iconRec" />
            <span> Setting</span>
          </li>
          </Link>
          <p className="titleRec">USER</p>
          <Link to="/receptionist/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="iconRec" />
            <span> Profile</span>
            </li>
            </Link>
          <li>
            <ExitToAppIcon className="iconRec" />
            <span onClick={() => navigate("/login")}> Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottomRec"> {/*give choose color options in dashboard*/}
        <div
          className="colorOptionRec"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptionRec"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default SidebarRec;
