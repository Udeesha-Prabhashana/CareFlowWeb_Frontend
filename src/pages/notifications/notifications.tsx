import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import NavbarLu from "../../components/navbarA/NavbarA";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import "../notifications/notifications.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";

interface Notification {
    title: string;
    time: string;
    body: string;
}

const initialNotifications: Notification[] = [
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

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [oldNotifications, setOldNotifications] = useState<Notification[]>([]);

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

    const markAsSeen = (index: number) => {
        const newNotifications = [...notifications];
        const [seenNotification] = newNotifications.splice(index, 1);
        setNotifications(newNotifications);
        setOldNotifications([...oldNotifications, seenNotification]);
    };

    const getNotificationCards = (notifications: Notification[], isOld: boolean = false) => {
        return notifications.map((card, index) => (
            <Box key={index} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: "flex", border: "1px solid #855CDD" }}>
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
                    {!isOld && (
                        <CardActions
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                mr: 2,
                            }}
                        >
                            <Checkbox
                                color="primary"
                                onChange={() => markAsSeen(index)}
                            />
                        </CardActions>
                    )}
                </Card>
            </Box>
        ));
    };

    return (
        <div className="notifications">
            <SidebarPatient />
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
                    <div className="cardsContainer">{getNotificationCards(notifications)}</div>
                    {oldNotifications.length > 0 && (
                        <div>
                            <Typography variant="h6" sx={{ mt: 4 }}>
                                Old Notifications
                            </Typography>
                            <div className="cardsContainer">{getNotificationCards(oldNotifications, true)}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
