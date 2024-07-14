import React from "react";
import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import Navbar from "../../components/navbarA/NavbarA";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import WidgetP from "../../components/widget/WidgetP";
import List from "../../components/table/Table";
import "./HomeP.scss";

const Home: React.FC = () => {
    return (
        <div className="homeP">
            <Sidebar />
        
            <div className="homeContainer2">
                <div className= "topic"> Good Morning, Micheal</div>
                <div className= "sub-topic"> Welcome to your Dashboard</div>
                <div className="widgetP">
                    <WidgetP type="ong_appointments"/>
                    <WidgetP type="upcom_appointments"/>
                    <WidgetP type="miss_appointments"/>
                </div>
                {/* <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Month (Revenue)" aspect={2/1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transaction</div>
                    <List />
                </div> */}
            </div>
        </div>
    )
}

export default Home;
