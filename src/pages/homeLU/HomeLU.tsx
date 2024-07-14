import React from "react";
import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import NavbarLu from "../../components/navbarA/NavbarA";
import WidgetLu from "../../components/widgetLU/WidgetLU";
import List from "../../components/table/Table";
import "./homelu.scss";
import SidebarLu from "../../components/sidebarLu/SidebarLu";

const HomeLu: React.FC = () => {
    return (
        <div className="homelu">
                <SidebarLu />
                <NavbarLu />
            <div className="homeContainer2lu">
                <div className="widgetslu">
                    <WidgetLu type="userlu"/>
                    <WidgetLu type="orderlu"/>
                    <WidgetLu type="earninglu"/>
                    <WidgetLu type="balancelu"/>
                </div>
                <div className="chartslu">
                    <Featured />
                    <Chart title="Last 6 Month (Revenue)" aspect={2/1} />
                </div>
                <div className="listContainerlu">
                    <div className="listTitlelu">Latest Transaction</div>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default HomeLu;
