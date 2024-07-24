import React, { useContext } from "react";
import "./sidebarAdm.scss";
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

const SidebarAdm: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(DarkModeContext)!;

  return (
    <div className="Sidebarad">
      <div className="topad">
        <Link to="/adminhome" style={{ textDecoration: "none" }}>
          <span className="logoLu">Care Flow</span>
        </Link>
      </div>
      <hr /> {/* hr use to get line */}
      <div className="centerad">
        <ul>
          <p className="titlead">MAIN</p>
          <Link to="/adminhome" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="iconad" />
              <span> Home</span>
            </li>
          </Link>
          <p className="titlead">LIST</p>
          <Link to="/adminhome/Appointments" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconad" />
              <span> Appointment </span>
            </li>
          </Link>
          <Link to="/adminhome/Patients" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconad" />
              <span> Patients </span>
            </li>
          </Link>
          <Link to="/adminhome/Doctors" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconad" />
              <span> Doctors </span>
            </li>
          </Link>
          <Link to="/adminhome/Nurses" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconad" />
              <span> Nurse </span>
            </li>
          </Link>
          <Link to="/adminhome/Receptionists " style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="iconad" />
              <span> Receptionists </span>
            </li>
          </Link>
          <p className="titlead">USEFUL</p>
          <Link to="/adminhome" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="iconad" />
            <span> Notification</span>
          </li>
          </Link>
          <li>
            <InsertChartIcon className="iconad" />
            <span> Stats</span>
          </li>
          <p className="titlead">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="iconad" />
            <span> System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="iconad" />
            <span> Logs</span>
          </li>
          <Link to="/adminhome" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="iconad" />
            <span> Setting</span>
          </li>
          </Link>
          <p className="titlead">USER</p>
          <Link to="/adminhome" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="iconad" />
            <span> Profile</span>
            </li>
            </Link>
          <li>
            <ExitToAppIcon className="iconad" />
            <span onClick={() => navigate("/login")}> Logout</span>
          </li>
        </ul>
      </div>
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
    </div>
  );
};

export default SidebarAdm;
