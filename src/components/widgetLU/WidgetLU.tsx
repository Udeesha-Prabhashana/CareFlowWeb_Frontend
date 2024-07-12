import React from "react";
import "./widgetLu.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

type WidgetProps = {
    type: "userlu" | "orderlu" | "earninglu" | "balancelu";
};

const WidgetLu: React.FC<WidgetProps> = ({ type }) => {
    let data: {
        title: string;
        isMoney: boolean;
        link: string;
        icon: JSX.Element;
    };

    // temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "userlu":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className="icon"
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                />,
            };
            break;
        case "orderlu":
            data = {
                title: "BOOKINGS",
                isMoney: false,
                link: "View all bookings",
                icon: <ShoppingCartOutlinedIcon className="icon"
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                    }}
                />, 
            };
            break;
        case "earninglu":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon"
                    style={{
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                        color: "green"
                    }}
                />,
            };
            break;
        case "balancelu":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "View all orders",
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                    style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                    }}
                />,
            };
            break;
        default:
            throw new Error("Invalid type");
    }

    return (
        <div className="widgetLu">
            <div className="leftLu">
                <span className="titleLu">{data.title}</span>
                <span className="counterLu">{data.isMoney && "$"}{amount}</span>
                <span className="linkLu">{data.link}</span>
            </div>
            <div className="rightLu">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default WidgetLu;
