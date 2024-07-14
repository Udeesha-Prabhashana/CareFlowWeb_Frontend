import React from "react";
import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import Navbar from "../../components/navbarA/NavbarA";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import List from "../../components/table/Table";
import "./home.scss";

const Home: React.FC = () => {
    return (
        <div className="homeA">
            <Sidebar />
            <div className="homeContainerA">
                <Navbar />
                <div className="widgetsA">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="chartsA">
                    <Featured />
                    <Chart title="Last 6 Month (Revenue)" aspect={2/1} />
                </div>
                <div className="listContainerA">
                    <div className="listTitleA">Latest Transaction</div>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Home;
