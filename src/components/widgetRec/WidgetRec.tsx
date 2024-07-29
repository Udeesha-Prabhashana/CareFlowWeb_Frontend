import React from "react";
import "./widgetRec.scss";


// type WidgetProps = {
//     type: "d_1" | "d_2" | "d_3" | "d_4" | "d_5" | "d_6";
// };

type WidgetType = "d_1" | "d_2" | "d_3" | "d_4" | "d_5" | "d_6";

type WidgetProps = {
    type: WidgetType;
  };

const WidgetRec: React.FC<WidgetProps> = ({ type }) => {
    let data: {
        title: string;
        subtitle: string;
        isMoney: boolean;
        curr_No: string;
        room_No: string;
    };

    // temporary
    const diff = 0;

    switch (type) {
        case "d_1":
            data = {
                title: "Dr. Saman Kumara",
                subtitle: "MBBS, Gastroenterologist",
                isMoney: false,
                curr_No: "1",
                room_No: "6",
            };
            break;
        case "d_2":
            data = {
                title: "Dr. Chiran Rathnayake",
                subtitle: "MBBS, Radiologist",
                isMoney: false,
                curr_No: "23",
                room_No: "15",
            };
            break;   
        case "d_3":
            data = {
                title: "Dr. Philip Chamara",
                subtitle: "MBBS, Physician",
                isMoney: false,
                curr_No: "19",
                room_No: "7",
            };
            break;  
        case "d_4":
            data = {
                title: "Dr. Mohommad Hafeez",
                subtitle: "MBBS, Gastroenterologist",
                isMoney: false,
                curr_No: "5",
                room_No: "10",
            };
            break;  
        case "d_5":
            data = {
                title: "Dr. Nimal Jayasooriya",
                subtitle: "MBBS, Neurologist",
                isMoney: false,
                curr_No: "10",
                room_No: "1",
            };
            break; 

        case "d_6":
            data = {
                title: "Dr. Rasika Nagitha",
                subtitle: "MBBS, Physician",
                isMoney: false,
                curr_No: "20",
                room_No: "4",
            };
            break; 
        default:
            throw new Error("Invalid type");
    }

    return (
        <div className="widgetRec">
            <div className="left">
                <span className="title"> {data.title} </span>
                <span className="subtitle"> {data.subtitle} </span>
            </div>
            <div className="right-all">
                <div className="right">
                    <div className="text">Current</div>
                    <div className="text">Number</div>
                    <div className="curr_No">
                        {data.curr_No}
                    </div>
                </div>
                <div className="vertical-line mx-4" style={{ height: '46px', width: '0.3px', backgroundColor: 'black' }}></div>


                <div className="right">
                    <div className="text">Room</div>
                    <div className="text">Number</div>
                    <div className="room_No">
                        {data.room_No}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WidgetRec;
