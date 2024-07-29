import React from "react";
import Button from "@mui/material/Button";

import "../../Nurse/settings/settingsNurse.scss";
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
import { Divider, styled, Switch } from "@mui/material";
import { red } from "@mui/material/colors";
import SidebarNurse from "../../../components/sidebarNurse/sidebarNurse";


const MaterialUISwitch1 = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    overflow: "visible",
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 1,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#EEE7FF',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#855CDD',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#855CDD' : '#EEE7FF',
        borderRadius: 20 / 2,
    },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    overflow: "visible",
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 1,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                content: '"en"', // Add the text content
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                color: '#fff', // Set the text color
                fontSize: '12px', // Adjust the font size as needed
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#EEE7FF',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#855CDD',
        width: 32,
        height: 32,
        '&::before': {
            content: '"සිං"', // Add the text content
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            color: '#fff', // Set the text color
            fontSize: '12px', // Adjust the font size as needed
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#855CDD' : '#EEE7FF',
        borderRadius: 20 / 2,
    },
}));




function SettingsNurse(){

    return (
        <div className="settings">
            <SidebarNurse />
            <div className="settingContainer">
                {/*<NavbarLu />*/}
                <div className="mainContent" style={{ position: 'absolute', top: 0 }}>
                    Settings
                    <div className="subContent">Customize your settings</div>
                    <Box>
                        <Box sx={{width:"800px",height:"2000px"}}>
                            <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", border:1, borderRadius:"11px",borderColor:"#855CDD", padding:"10px", mb:2}}>
                                <Box sx={{width:"9%", backgroundColor:"#855CDD", borderRadius:"8px",
                                    backgroundImage: `url('/images/world1.svg')`,backgroundSize: 'calc(100% - 20px) calc(100% - 20px)',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                </Box>

                                <Box sx={{width:"60%", marginTop: 2, marginBottom: 2}}>
                                    <Typography variant="h3" sx={{fontSize:18 }}>Language</Typography>
                                    <Typography variant="h3" sx={{fontSize:12, my: 0.5 ,color:"#808080"}}>Select your preffered language</Typography>
                                </Box>

                                <Box sx={{width:"20%", marginTop: 2}}>
                                    <MaterialUISwitch />
                                </Box>
                            </Box>

                            <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", border:1, borderRadius:"11px",borderColor:"#855CDD", padding:"10px", mb:2}}>
                                <Box sx={{width:"9%", backgroundColor:"#855CDD", borderRadius:"8px",
                                    backgroundImage: `url('/images/night-mode 1.png')`,backgroundSize: 'calc(100% - 20px) calc(100% - 20px)',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                </Box>

                                <Box sx={{width:"60%", marginTop: 2, marginBottom: 2}}>
                                    <Typography variant="h3" sx={{fontSize:18 }}>Theme</Typography>
                                    <Typography variant="h3" sx={{fontSize:12, my: 0.5 ,color:"#808080"}}>Select your preffered Theme</Typography>
                                </Box>

                                <Box sx={{width:"20%", marginTop: 2}}>
                                    <MaterialUISwitch1 />
                                </Box>
                            </Box>

                            <Box sx={{width: "100%", display:"flex" , flexDirection:"row", justifyContent:"space-between", border:1, borderRadius:"11px",borderColor:"#855CDD", padding:"10px", mb:2}}>
                                <Box sx={{width:"9%", backgroundColor:"#855CDD", borderRadius:"8px",
                                    backgroundImage: `url('/images/padlock 1.png')`,backgroundSize: 'calc(100% - 20px) calc(100% - 20px)',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                </Box>

                                <Box sx={{width:"60%", marginTop: 2, marginBottom: 2}}>
                                    <Typography variant="h3" sx={{fontSize:18 }}>Password</Typography>
                                    <Typography variant="h3" sx={{fontSize:12, my: 0.5 ,color:"#808080"}}>.....................</Typography>
                                </Box>

                                <Box sx={{width:"20%", marginTop: 2}}>
                                    <Button sx={{ borderRadius:"11px" , color:"#855CDD", borderColor:"#855CDD" }} variant="outlined">Change</Button>
                                </Box>
                            </Box>

                            <Box sx={{width:"60%", marginTop:7, marginBottom: 2}}>
                                <Typography variant="h3" sx={{fontSize:18, color:"#855CDD" }}>Privacy Policy</Typography>
                                <Typography variant="h3" sx={{fontSize:18, color:"#855CDD", mt:4 }}>Terms of Use</Typography>
                            </Box>

                        </Box>
                    </Box>


                </div>




            </div>
        </div>
    );

};

export default SettingsNurse;