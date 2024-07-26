import React, { useContext } from "react";
import "./navbarDoc.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const NavbarDoc: React.FC = () => {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error("DarkModeContext must be used within a DarkModeContextProvider");
    }

    const { dispatch } = context;

    return (
        <div className="navbarDoc">
            <div className="wrapperDoc">
                <div >
                    {/* <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon /> */}
                </div>
                <div className="itemsDoc">
                    <div className="itemDoc">
                        <LanguageOutlinedIcon className="iconDoc" />
                        English
                    </div>
                    <div className="itemDoc">
                        <DarkModeOutlinedIcon className="iconDoc" onClick={() => dispatch({ type: "TOGGLE" })} />
                    </div>
                    <div className="itemDoc">
                        <FullscreenExitOutlinedIcon className="iconDoc" />
                    </div>
                    <div className="itemDoc">
                        <NotificationsNoneOutlinedIcon className="iconDoc" />
                        <div className="counterDoc">1</div>
                    </div>
                    <div className="itemDoc">
                        <ChatBubbleOutlineOutlinedIcon className="iconDoc" />
                        <div className="counterDoc">2</div>
                    </div>
                    <div className="itemDoc">
                        <ListOutlinedIcon className="iconDoc" />
                    </div>
                    <div className="itemDoc">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatarDoc"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarDoc;