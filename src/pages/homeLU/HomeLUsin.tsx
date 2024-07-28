import React from "react";
import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import NavbarLu from "../../components/navbarA/NavbarA";
import WidgetLu from "../../components/widgetLU/WidgetLU";
import List from "../../components/table/Table";
import "./homelu.scss";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const LoginSinhala: React.FC = () => {
    return (
        <div className="homelu">
                <SidebarLu />
                <NavbarLu />
                
            <div className="homeContainer2lu">
                <div className="bodyContainerLu">
                    <div className="mainTopic">
                    සුභ උදෑසනක්, <span className="purpleText">මිචෙල්</span>
                    </div>
                    <div className="subTopic">
                    CareFlow වෙත සාදරයෙන් පිළිගනිමු  
                    </div>
                    <div className="widgetslu">
                        <WidgetLu type="ong_appointments"/>
                        <WidgetLu type="upcom_appointments"/>
                        <WidgetLu type="miss_appointments"/>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <div className="mainTopic mt-20">
                            ඔබේ වෛද්‍යවරයා චැනල් කරගන්න
                            </div>
                            <div className="subTopic mt-1">
                            Cura යනු ඔබට උපකාර කළ හැකි AI චැට්බෝට් එකකි                           
                             </div>                    
                            <div className="subTopic">
                            ඔබේ වෛද්‍යවරයා සොයාගෙන වෛද්‍ය හමුවීමක් වෙන්කරවා ගන්න
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
                            <img src= "/images/locations/Home1.png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSinhala;
