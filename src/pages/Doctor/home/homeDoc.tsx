import React from "react";
// import Chart from "../../components/chart/Chat";
// import Featured from "../../components/featuredA/FeaturedA";
// import NavbarLu from "../../components/navbarA/NavbarA";
import WidgetDoc from "../../../components/widgetDoc/widgetDoc";
// import List from "../../components/table/Table";
import "./homeDoc.scss"
import SidebarDoc from "../../../../src/components/sidebarDoctor/sidebarDoc";

import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NavbarDoc from "../../../components/navbarDoc/navbarDoc";


const HomeDoc: React.FC = () => {
    return (
        <div className="sideDoc">
            <SidebarDoc />
            <div className="navDoc">
                <NavbarDoc />
                <div className="bodyContainerDocHome">
                    <div className="mainTopicDocHome">
                        Good Morning, <span className="purpleTextDoc">Dr. Micheal</span>
                    </div>
                    <div className="subTopicDocHome">
                        Welcome to your Dashboard
                    </div>
                    <div className="widgetsDoc">
                        <WidgetDoc type="ong_appointments"/>
                        <WidgetDoc type="upcom_appointments"/>
                        <WidgetDoc type="miss_appointments"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeDoc;
