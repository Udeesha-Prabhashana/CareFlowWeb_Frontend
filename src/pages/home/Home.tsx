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

const Home: React.FC = () => {
    return (
        <div>
            {/* <Sidebar/> */}
            {/* Example usage with type prop */}
            <Navbar />
            <Header type="no-list" />
            <div className="homeContainer">
                <h1 className="homeTitle"> Cities</h1> 
                <Featured />
                <Featured />
                <h1 className="homeTitle"> Browse by properties</h1>
                <PropertyList />
                {/* <h1 className="homeTitle"> home guest love</h1>
                <FeaturesProperties /> */}
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
