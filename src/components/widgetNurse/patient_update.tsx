import React, { useState } from "react";
import "./patient_update.scss";
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const PatientUpdate: React.FC = () => {
    const [ongoingNumber, setOngoingNumber] = useState(0);

    const incrementNumber = () => {
        setOngoingNumber(prevNumber => prevNumber + 1);
    };

    const decrementNumber = () => {
        setOngoingNumber(prevNumber => (prevNumber > 0 ? prevNumber - 1 : 0));
    };

    return (
        <div className="mypatientUpdate">
             <div className="leftt">
                <div className="name">Dr. Samantha Gunawardana</div>
                <span className="room">Room No: 23</span>
                <span className="room">Current Patient: 07</span>
       
            </div>
            <div className="middle">
                <span className="title">Ongoing Number</span>

                    <div className="buttons">
                        
                        <div className="button">       
                            <button onClick={incrementNumber}><ArrowUpwardIcon /></button>
                        </div>

                        <div className="button">  
                            <button onClick={decrementNumber}><ArrowDownwardIcon /></button>
                        </div>

                        <div className="button">
                            <button className="updateButton" ><b>Update</b></button>
                        </div>

                    </div>
            </div>

            <div className="rightt">
                    <span className="counter">{ongoingNumber}</span>
                {/* <div className="right">
                    <MedicalServicesOutlinedIcon className="icon" style={{ color: "black" }} />
                </div> */}
            </div>
        </div>
    );
};

export default PatientUpdate;