import React from "react";
import Button from "@mui/material/Button";
import "../../Doctor/notifications/notificationsDoc.scss";
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
import { useState } from 'react';
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";

interface Notification {
    title: string;
    time: string;
    body: string;

}

const notifications_list: Notification[] = [
    {
        title: "Booking Confirmed",
        time: "49 Mins ago",
        body: "Your doctor booking has been confirmed! We look forward to seeing you soon. If you have any questions or need to reschedule, please don't hesitate to contact us.",
    },
    {
        title: "Appointment Reminder",
        time: "1 Hour ago",
        body: "This is a reminder for your upcoming appointment with Dr. Emily Brown tomorrow at 10:00 AM. Please arrive 10 minutes early.",
    },
    {
        title: "Reschedule Request",
        time: "2 Hours ago",
        body: "Your appointment with Dr. Michael Lee has been successfully rescheduled to next Monday at 2:00 PM. Thank you for your flexibility.",
    },
    {
        title: "New Message",
        time: "3 Hours ago",
        body: "You have a new message from Dr. Sarah Johnson regarding your recent lab results. Please check your inbox for more details.",
    },

];

const NotificationsDoc: React.FC = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#855CDD",
            },
            secondary: {
                main: "#FFA07A",
            },
        },
    });

    const getNotificationCards = () => {
        let notificationCards: Notification[] = [];

        return notifications_list.map((card, index) => (
            <Box key={index} sx={{ mb: 2 }}>
                <Card
                    variant="outlined"
                    sx={{ display: "flex", border: "1px solid #855CDD" }}
                >
                    <CardContent sx={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "var(--Normal, var(--Normal-Normal, #855CDD))",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "20px",
                                }}
                            >
                                {card.title}
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1.5,
                                    color: "#000",
                                    fontSize: "10px",
                                    fontStyle: "normal",
                                    fontWeight: "200",
                                    lineHeight: "20px",
                                    paddingLeft: "12px",
                                }}
                            >
                                {card.time}
                            </Typography>
                        </div>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                lineHeight: "20px",
                            }}
                        >
                            {card.body}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            mr: 2,
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                width: "138px",
                                height: "38px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "11px",
                                border: "1px solid var(--normal-hover, #5F2BCF)",
                                whiteSpace: "nowrap",
                                color: "#855CDD",
                                textTransform: "none",
                            }}
                            // onClick={removeNotification}
                        >
                            Close
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        ));
    };

    return (
        <div className="notifications">
            <SidebarDoc />
            <div className="notificationsContainer">
                {/*<NavbarLu />*/}
                <div className="mainContent" style={{ position: 'absolute', top: 0 }}>
                    Notifications
                    <div className="subContent">View upcoming updates</div>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                            <Grid item></Grid>
                            <Grid item xs />
                        </Grid>
                    </ThemeProvider>
                    <div className="cardsContainer">{getNotificationCards()}</div>
                </div>
            </div>
        </div>
    );
};


export default NotificationsDoc;
