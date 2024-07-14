import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturesProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";
import "./home1.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget_L from "../../components/widget_L/Widget_L";
const Home: React.FC = () => {
    return (
        <div>
            {/* <Sidebar/> */}
            {/* Example usage with type prop */}
            <Navbar />
            <Header type="no-list" />
            <div className="homeContainer">
                <h1 className="homeTitle"> How to use Care Flow</h1> 
                <Featured />
                <Featured />
            </div>
            <div className="homeContainer2">    
                    <h1 className="homeTitle"> Top Specialists</h1>
                    <div className="widgetsA">
                        <Widget_L type="user"/>
                        <Widget_L type="order"/>
                        <Widget_L type="order"/>
                    </div>
                    <div className="widgetsA">
                        <Widget_L type="earning"/>
                        <Widget_L type="balance"/>
                        <Widget_L type="balance"/>
                </div>
                <PropertyList />
                {/* <h1 className="homeTitle"> home guest love</h1>
                <FeaturesProperties /> */}
                <MailList />
            </div> 
            <div className="homeContainer3">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
