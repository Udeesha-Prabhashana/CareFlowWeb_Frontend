import React from "react";
import Button from "@mui/material/Button";
import NavbarLu from "../../components/navbarA/NavbarA";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import "../settings/settings.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Divider } from "@mui/material";


function Settings(){

    return (
        <div className="settings">
          <SidebarLu />
          <div className="settingContainer">
            <NavbarLu />
            <div className="mainContent" style={{ position: 'absolute', top: 0 }}>
              Settings
              <div className="subContent">Customize your settings</div>
              <Box>
                <Box sx={{width:"100%"}}>
                    <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", pt: 3}}>
                        <Box sx={{width:"40%", marginBottom: 2}}>
                            <Typography variant="h3" sx={{fontSize:18 }}>Language</Typography>
                            <Typography variant="h3" sx={{fontSize:11, my: 0.5 ,color:"#808080"}}>Select your preffered language</Typography>
                        </Box>

                        <Box sx={{width:"30%", display:"flex" , flexDirection:"row"}}>
                            <Button sx={{border:"1px solid #9747FF", color:"#CCCCCC", height:35,textTransform:'none'}}>Sinhala</Button>
                            <Button sx={{backgroundColor:"#9747FF", color:"white", height: 35,  mx: 2, textTransform:'none', '&:hover': {backgroundColor: '#CFBBFA', color: '#9747FF'}}}>English</Button>
                            
                        </Box>
                    </Box>
                    <Divider sx={{width:"600px"}} variant="fullWidth"/>

                    <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", pt: 3}}>
                        <Box sx={{width:"40%", marginBottom: 2}}>
                            <Typography variant="h3" sx={{fontSize:18 }}>Theme</Typography>
                            <Typography variant="h3" sx={{fontSize:11, my: 0.5 ,color:"#808080"}}>Select your preffered theme</Typography>
                        </Box>

                        <Box sx={{width:"30%", display:"flex" , flexDirection:"row"}}>
                            <Button sx={{backgroundColor:"#9747FF", color:"white", height: 35,   textTransform:'none', '&:hover': {backgroundColor: '#CFBBFA', color: '#9747FF'}}}>Light</Button>
                            <Button sx={{border:"1px solid #9747FF", color:"#CCCCCC", height:35, mx: 2, textTransform:'none', }}>Dark</Button>
                            
                        </Box>
                    </Box>
                    <Divider sx={{width:"600px"}} variant="fullWidth"/>

                    <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", pt: 3}}>
                        <Box sx={{width:"40%", marginBottom: 2}}>
                            <Typography variant="h3" sx={{fontSize:18 }}>Password</Typography>
                            <Typography variant="h3" sx={{fontSize:11, my: 0.5 ,color:"#808080"}}>Change your password</Typography>
                        </Box>

                        <Box sx={{width:"30%", display:"flex" , flexDirection:"row"}}>
                        <Typography variant="h3" sx={{fontSize:30, alignContent:"center" }}>............</Typography>
                            
                            
                        </Box>
                    </Box>
                    <Divider sx={{width:"600px"}} variant="fullWidth"/>

                    <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", pt: 3}}>
                        <Box sx={{width:"40%", marginBottom: 2}}>
                            <Typography variant="h3" sx={{fontSize:18 }}>Privacy Policy</Typography>
                        </Box>
                    </Box>
                    <Divider sx={{width:"600px"}} variant="fullWidth"/>

                    <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", pt: 3}}>
                        <Box sx={{width:"40%", marginBottom: 2}}>
                            <Typography variant="h3" sx={{fontSize:18}}>Terms of Use</Typography>
                        </Box>
                    </Box>
                    <Divider sx={{width:"600px"}} variant="fullWidth"/>
                
                </Box>
              </Box>
              
        
            </div>

           
            

          </div>
        </div>
      );

};

export default Settings;