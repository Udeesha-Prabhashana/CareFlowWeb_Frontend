import React from "react";
import "./widget_l.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { FaUserDoctor } from "react-icons/fa6";

interface WidgetProps {
  type: "user" | "order" | "earning" | "balance";
}

interface DataProps {
  title: string;
  isMoney: boolean;
  link: string;
  icon: React.ReactNode;
  discription?: string;
}


const Widget_L: React.FC<WidgetProps> = ({ type }) => {
  let data: DataProps | undefined;

  // temporary
  const amount = 100;
  // const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Channel a Physician",
        isMoney: false,
        link: "Channel",
        discription: "A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means.",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Channel a Cardiologist",
        isMoney: false,
        link: "Channel",
        discription: "A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means.",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Channel a Gynecologist",
        isMoney: false,
        link: "Channel",
        discription: "A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means.",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Channel a Pediatrician",
        isMoney: false,
        link: "Channel",
        discription: "A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means.",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="widgetL">
      <div className="leftL">
        <span className="titleL"> {data.title} </span>
        <span className="counterL">
          <FaUserDoctor className="docIconL"/>
        </span>
        <span className="discripL">{data.discription} </span>
      </div>
      <div className="rightL">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {/* {data.icon} */}
        <span className="linkL">{data.link} </span>
      </div>
    </div>
  );
};

export default Widget_L;
