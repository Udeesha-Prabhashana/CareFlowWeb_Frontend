import React from "react";
import Button from '@mui/material/Button';
import SidebarNurse from "../../../../components/sidebarNurse/sidebarNurse";
import "./doctors.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

interface Doctors {
    description: string;
    body: string;
    selected: boolean;
}

var Paid: Doctors[] = [
    { description: "Dr. John Smith", body: "PhD, Neurologist", selected: true },
    { description: "Dr. Alice Johnson", body: "MD, Cardiologist", selected: false },
    { description: "Dr. Alice Johnson", body: "MD, Cardiologist", selected: true },
    // add more appointments as needed
];




const SelectDoctor: React.FC = () => {
    const [checked1, setChecked1] = React.useState(false);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1(event.target.checked);
      };

    const [checked2, setChecked2] = React.useState(false);
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked2(event.target.checked);
    };


    const [checked3, setChecked3] = React.useState(false);
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked3(event.target.checked);
      };
    const navigate = useNavigate();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#855CDD',
            },
            secondary: {
                main: '#FFA07A',
            },
        },
    });

    

    
    const handleAddBooking = () => {
        navigate('/nurse/home');
    };

    const getCards = () => {
        let cards: Doctors[] = [];
        cards = Paid;
        
        return cards.map((card, index) => (
            <Box key={index} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
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
                        </Typography>
                        <Typography
                            sx={{
                                mb: 1.5,
                                color: '#000',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                                paddingTop: '8px',
                            }}
                        >
                            {card.description}
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
                            {card.body}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 2 }}>
                    <ThemeProvider theme={theme}>
                    <ToggleButton
                    value="check"
                    selected={card.selected}
                    onChange={() => {
                        card.selected = !card.selected;
                    }}
                    onClick={() => {
                        card.selected = false;
                        console.log(card)
                    }}
                    
                    >
                    <CheckIcon />
                    </ToggleButton>
                    </ThemeProvider>
                    </CardActions>
                </Card>
            </Box>
        ));
    };

    return (
        <ThemeProvider theme={theme}>
        <div className="appointments">
            <SidebarNurse />
            <div className="appointmentsContainer">
                {/*<NavbarLu />*/}
                <div className="mainContent">
                    Select Doctor
                    <div className="subContent">
                     Select your doctor you are assigned to
                    </div>
                    
                        <Grid container spacing={3} alignItems="center" sx={{ mb: 2 }}>
                            <Grid item>
                                
                            </Grid>
                            <Grid item xs />
                            <Grid item>
                           
                            </Grid>
                       
                        </Grid>
                    

                    <div className="cardsContainer">
                    <Box key={1} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
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
                        </Typography>
                        <Typography
                            sx={{
                                mb: 1.5,
                                color: '#000',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                                paddingTop: '8px',
                            }}
                        >
                            {"Dr. Samantha Gunawardana"}

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
                            {"MD, Cardiologist"}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 2 }}>
                    <ThemeProvider theme={theme}>
                    <Switch
                    checked={checked1}
                    onChange={handleChange1}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </ThemeProvider>
                    </CardActions>
                </Card>
                    </Box>

                    <Box key={1} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
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
                        </Typography>
                        <Typography
                            sx={{
                                mb: 1.5,
                                color: '#000',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                                paddingTop: '8px',
                            }}
                        >
                            {"Dr. Kamal Gunasinghe"}
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
                            {"MD, Physician"}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 2 }}>
                    <ThemeProvider theme={theme}>
                    <Switch
                    checked={checked2}
                    onChange={handleChange2}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </ThemeProvider>
                    </CardActions>
                </Card>
                    </Box>



                    <Box key={1} sx={{ mb: 2 }}>
                <Card variant="outlined" sx={{ display: 'flex', border: '1px solid #855CDD' }}>
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
                        </Typography>
                        <Typography
                            sx={{
                                mb: 1.5,
                                color: '#000',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px',
                                paddingTop: '8px',
                            }}
                        >
                            {"Dr. Amavi Atapattu"}
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
                            {"MD, Gastroenterology"}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 2 }}>
                    <ThemeProvider theme={theme}>
                    <Switch
                    checked={checked3}
                    onChange={handleChange3}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </ThemeProvider>
                    </CardActions>
                </Card>
                    </Box>




                    </div>
                    <Stack spacing={2} direction="row">

      <Button variant="contained">Save</Button>
      

    </Stack>

                </div>
            </div>
        </div>
        </ThemeProvider>
       
    );
    
};

export default SelectDoctor;
