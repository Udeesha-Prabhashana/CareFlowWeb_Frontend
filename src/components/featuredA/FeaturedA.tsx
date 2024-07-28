import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";   //three dots
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; //This is the path to a specific CSS file within the "react-circular-progressbar" library. The library provides a circular progress bar component that can be used in React applications to display progress visually.
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React from "react";

const Featured: React.FC = () => {
    return (
        <div className="featured2">
            <div className="top">
                <h1 className="title">Total Revenue</h1>  {/*  give header to featured box */}
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">         
                    <CircularProgressbar value={70} text="70%" strokeWidth={5}/>        {/* use for vitualize a circle given percentage , "strokeWidth" use to give width*/}             
                </div>
                <p className="title"> Total appoinments made today</p>
                <p className="amount"> $420</p>
                <p className="desc"> Previous appoinment processing. Last payments may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle"> Target </div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount"> $12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle"> Last Week </div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount"> $12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle"> Last Month </div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount"> $12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;
