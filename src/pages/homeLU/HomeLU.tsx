import React from "react";
import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import NavbarLu from "../../components/navbarA/NavbarA";
import WidgetLu from "../../components/widgetLU/WidgetLU";
import List from "../../components/table/Table";
import "./homelu.scss";
import "../../tailwind.css"
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const HomeLu: React.FC = () => {
    return (
        <div className="homelu">
                <SidebarLu />
                <NavbarLu />
                
            <div className="homeContainer2lu">
                <div className="bodyContainerLu">
                    <div className="mainTopic">
                        Good Morning, <span className="purpleText">Micheal</span>
                    </div>
                    <div className="subTopic">
                        Welcome to your Dashboard
                    </div>
                    <div className="widgetslu">
                        <WidgetLu type="ong_appointments"/>
                        <WidgetLu type="upcom_appointments"/>
                        <WidgetLu type="miss_appointments"/>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <div className="mainTopic mt-20">
                                Ready to make your first appointment?
                            </div>
                            <div className="subTopic mt-1">
                                Cura is a AI Powered chatbot that can help you 
                            </div>                    
                            <div className="subTopic">
                                find your doctor and book doctor's appointment
                            </div>
                            <div className="ml-5 mt-10">
                            <Button 
                                variant="contained" 
                                startIcon={<AutoAwesomeIcon />}
                                sx={{ 
                                    textTransform: 'none', 
                                    backgroundColor: '#855CDD', 
                                    color: 'white', 
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    width: '200px',
                                    height: '44px',
                                    borderRadius: '65px',
                                    '&:hover': {
                                    backgroundColor: '#5F2BCF', // Change to your desired hover color
                                },
                            }}
                            >
                                Ask Cura
                            </Button>
                            </div>
                        </div>
                        <div className="hero_image">
                            <img src= "/images/locations/Home1.png" alt="Hero" className="w-600 h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLu;
