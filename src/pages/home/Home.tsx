import React, { useEffect } from "react";
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

    useEffect(() => {
        // Create script elements
        const script1 = document.createElement('script');
        script1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = "https://mediafiles.botpress.cloud/ca64de85-f6f8-4c02-9bde-a7f2e687335c/webchat/v2/config.js";
        script2.async = true;
        document.body.appendChild(script2);

        // Cleanup function to remove the scripts when the component unmounts
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

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
