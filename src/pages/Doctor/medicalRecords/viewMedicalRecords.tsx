import React from 'react';
import "../medicalRecords/viewMedicalRecords.scss";
import NavbarDoc from "../../../components/navbarDoc/navbarDoc";
import SidebarDoc from "../../../components/sidebarDoctor/sidebarDoc";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

interface MedicalRecords {
    date: string;
    name: string;
    title: string;
}

const medicalRecords: MedicalRecords[] = [
    { date: "23/05/2024", name: "Dr. Pradeep Rangana", title: "MBBS, Gastroenterologist" },

];

const ViewMedicalRecords: React.FC = () => {

    const getCards = () => {
        return medicalRecords.map((record, index) => (
            <React.Fragment key={index}>
                <Box sx={{ mb: 2 }}>
                    <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD', alignItems: 'center', height: '80px' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: 'var(--Normal, var(--Normal-Normal, #855CDD))',
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '20px',
                                }}
                            >
                                {record.date}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 2 }}>
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '20px',
                                }}
                            >
                                {record.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '300',
                                    lineHeight: '20px',
                                }}
                            >
                                {record.title}
                            </Typography>
                        </CardActions>
                    </Card>
                </Box>
                {index === 0 && (
                    <Box sx={{ mb: 2 }}>
                        <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD', alignItems: 'center', height: '400px' }}>
                            <CardContent sx={{ flex: 1 }}>
                                Upload Medical Record
                            </CardContent>
                        </Card>
                    </Box>
                )}
            </React.Fragment>
        ));
    };

    return (
        <div className="sideDocMRview">
            <SidebarDoc />
            <div className="navDocMRview">
                <NavbarDoc />
                <div className="mainContentDocMRview">
                    View Medical History
                    <div className="subContentDocMRview">
                        Select a Previous Appointment to See History
                    </div>

                    <div className="cardsContainer">
                        {getCards()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewMedicalRecords;
