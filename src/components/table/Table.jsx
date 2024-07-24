import "./table.scss";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AppointmentsList = () => {

    const appointments = [
        {
            id: 1143155,
            patient: "John Smith",
            doctor: "Dr. Emily Brown",
            date: "2024-08-01",
            time: "10:00 AM",
            status: "Confirmed",
            reason: "Routine Checkup",
        },
        {
            id: 2235235,
            patient: "Michael Doe",
            doctor: "Dr. Sarah Johnson",
            date: "2024-08-02",
            time: "11:30 AM",
            status: "Pending",
            reason: "Consultation",
        },
        {
            id: 2342353,
            patient: "John Smith",
            doctor: "Dr. Alex Carter",
            date: "2024-08-03",
            time: "01:00 PM",
            status: "Cancelled",
            reason: "Emergency",
        },
        {
            id: 2357741,
            patient: "Jane Smith",
            doctor: "Dr. Lisa Green",
            date: "2024-08-04",
            time: "02:30 PM",
            status: "Confirmed",
            reason: "Follow-up",
        },
        {
            id: 2342355,
            patient: "Harold Carol",
            doctor: "Dr. Michael White",
            date: "2024-08-05",
            time: "03:45 PM",
            status: "Pending",
            reason: "Initial Consultation",
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="appointments table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Appointment ID</TableCell>
                        <TableCell className="tableCell">Patient</TableCell>
                        <TableCell className="tableCell">Doctor</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Time</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                        <TableCell className="tableCell">Reason</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment) => (
                        <TableRow key={appointment.id}>
                            <TableCell className="tableCell">{appointment.id}</TableCell>
                            <TableCell className="tableCell">{appointment.patient}</TableCell>
                            <TableCell className="tableCell">{appointment.doctor}</TableCell>
                            <TableCell className="tableCell">{appointment.date}</TableCell>
                            <TableCell className="tableCell">{appointment.time}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${appointment.status.toLowerCase()}`}>{appointment.status}</span>
                            </TableCell>
                            <TableCell className="tableCell">{appointment.reason}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AppointmentsList;
