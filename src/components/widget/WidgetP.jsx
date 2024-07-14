import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const WidgetP = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "ong_appointments":
            data = {
                title: "Ongoing Appointments",
                isMoney: false,
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                    style={{
                        color: "black",
                    }}
                />,
            };
            break;
        case "upcom_appointments":
            data = {
                title: "Upcoming Appointments",
                isMoney: false,
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                    style={{
                        color: "black",

                    }}
                />,
            };
            break;
        case "miss_appointments":
            data = {
                title: "Missed Appointments",
                isMoney: false,
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                    style={{
                        color: "black",

                    }}
                />,
            };
            break;
        default:
            break;
        
    }

    return (
        <div className="widgetP">
            <div className="left">
                <span className="title"> {data.title.split(' ')[0]} </span>
                <span className="title"> {data.title.split(' ')[1]} </span>
                <span className="link">{data.link} </span>
            </div>
            <div className="right">
                <div className="counter">
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default WidgetP