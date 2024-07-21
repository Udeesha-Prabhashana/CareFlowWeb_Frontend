import React from "react";
import "./widgetDoc.scss";

import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


type WidgetProps = {
    type: "ong_appointments" | "upcom_appointments" | "miss_appointments" ;
};

const WidgetDoc: React.FC<WidgetProps> = ({ type }) => {
    let data: {
        title: string;
        isMoney: boolean;
        icon: JSX.Element;
    };

    // temporary
    const diff = 0;

    switch (type) {
        case "ong_appointments":
            data = {
                title: "Ongoing Appointments",
                isMoney: false,
                icon: <MedicalServicesOutlinedIcon className="icon"
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
                icon: <RestoreOutlinedIcon className="icon"
                                           style={{
                                               color: "black",
                                           }}
                />,
            };
            break;
        case "miss_appointments":
            data = {
                title: "Missed Appointments",
                isMoney: true,
                icon: <CancelOutlinedIcon className="icon"
                                          style={{
                                              color: "black"
                                          }}
                />,
            };
            break;
        default:
            throw new Error("Invalid type");
    }

    return (
        <div className="widgetDoc">
            <div className="left">
                <span className="title"> {data.title.split(' ')[0]} </span>
                <span className="title"> {data.title.split(' ')[1]} </span>
                {data.icon}
            </div>
            <div className="right">
                <div className="counter">
                    {diff}
                </div>
            </div>
        </div>
    );
};

export default WidgetDoc;
