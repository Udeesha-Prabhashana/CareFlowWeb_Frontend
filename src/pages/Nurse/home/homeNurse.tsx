import React from "react";
// import Chart from "../../components/chart/Chat";
// import Featured from "../../components/featuredA/FeaturedA";
// import NavbarLu from "../../components/navbarA/NavbarA";
import WidgetNurse from "../../../components/widgetNurse/widgetNurse";
// import List from "../../components/table/Table";
import "./homeNurse.scss"
// import "../../tailwind.css"
import SidebarNurse from "../../../../src/components/sidebarNurse/sidebarNurse";

import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PatientUpdate from "../../../components/widgetNurse/patient_update";


const HomeNurse: React.FC = () => {
    return (
        <div className="sideNurse">
            <SidebarNurse />
            <div className="navNurse">

                <div className="bodyContainerNurseHome">
                    <div className="mainTopicNurseHome">
                        Good Morning, <span className="purpleTextNurse">Nurse Pushpa Ramyani De Zoysa</span>
                    </div>
                    <div className="subTopicNurseHome">
                        Welcome to your Dashboard
                    </div>
                    <div className="widgetsNurse">
                        <WidgetNurse type="ongoing_appointment"/>
                        <WidgetNurse type="today_appointments"/>
                        <WidgetNurse type="noshow_appointments"/>
                    </div>
                    <div className="TopicNurseHome">
                        Patient Number Update
                    </div>
                    <div className="subTopicNurseHome">
                        Update the live ongoing patient number
                    </div>
                    <div className="patientUpdate">
                             <PatientUpdate />
                    </div>
                    
                </div>
            </div>
        </div>

    );

}

export default HomeNurse;
