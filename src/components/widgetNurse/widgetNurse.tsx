import React from "react";
import "./widgetNurse.scss";
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


type WidgetProps = {
    type: "ongoing_appointment" | "today_appointments" | "noshow_appointments" ;
};

const WidgetNurse: React.FC<WidgetProps> = ({ type }) => {
    let data: {
        title: string;
        isMoney: boolean;
        icon: JSX.Element;
    };

    // temporary
    const diff = 0;

    switch (type) {
        case "ongoing_appointment":
            data = {
                title: "Ongoing Number",
                isMoney: false,
                icon: <MedicalServicesOutlinedIcon className="icon"
                                                   style={{
                                                       color: "black",
                                                   }}
                />,
            };
            break;
        case "today_appointments":
            data = {
                title: "Assigned Appointments",
                isMoney: false,
                icon: <RestoreOutlinedIcon className="icon"
                                           style={{
                                               color: "black",
                                           }}
                />,
            };
            break;
        case "noshow_appointments":
            data = {
                title: "No Show Appointments",
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
        <div className="widgetNurse">
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

export default WidgetNurse;
