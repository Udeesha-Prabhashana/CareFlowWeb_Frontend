import React, { useContext } from "react";
import "./navbarAdm.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const NavbarAd: React.FC = () => {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error("DarkModeContext must be used within a DarkModeContextProvider");
    }

    const { dispatch } = context;

    return (
        <div className="navbar2ad">
            <div className="wrapper2ad">
                <div >
                    {/* <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon /> */}
                </div>
                <div className="items2ad">
                    <div className="item2ad">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item2ad">
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
                    </div>
                    <div className="item2ad">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item2ad">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item2ad">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item2ad">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item2ad">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarAd;
