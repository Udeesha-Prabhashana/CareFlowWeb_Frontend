import React, { useState } from 'react';
import "./uploadPatientRecords.scss";
import SidebarNurse from "../../../../components/sidebarNurse/sidebarNurse";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import recordImage from '../../../../components/images/doctor/record1.png';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

interface PatientMedicalRecord {
    uploadedFile: File | null;
}


const theme = createTheme({
    palette: {
        primary: {
            main: '#855CDD',
        },
        secondary: {
            main: '#855CDD',
        },
    },
});

const UploadMedicalRecords: React.FC = () => {
    

    const getCards = () => {
        
            <React.Fragment>
                <Box sx={{ mb: 2 }}>
                    <Card variant="outlined" sx={{ border: '1px solid #855CDD' }}>
                        <CardContent>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            >
                            Upload file
                            <VisuallyHiddenInput type="file" />
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </React.Fragment>

    };

    return (
        <ThemeProvider theme={theme}>
            <div className="sideDocMRview">
                <SidebarNurse />
                <div className="navDocMRview">
                    <div className="mainContentDocMRview">
                        Upload Medical Records
                        <div className="subContentDocMRview">
                            Upload a medical Record or a diagnostics card 
                        </div>
                        <div className="cardsContainerUploads">
                            <Box sx={{ mb: 2 }}>
                                <Card variant="outlined" sx={{ border: '1px solid #855CDD', padding:'50px' }}>
                                    <CardContent>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                        >
                                        Upload file
                                        <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Card variant="outlined" sx={{ border: '1px solid #855CDD', padding:'50px' }}>
                                    <CardContent>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CameraAltIcon />}
                                        >
                                        Take a Photo
                                        <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>

                        </div>
                        <div>
           
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default UploadMedicalRecords;
