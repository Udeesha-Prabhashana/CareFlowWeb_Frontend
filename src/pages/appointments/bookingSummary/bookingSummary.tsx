import React from 'react';
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbarA/NavbarA";
import "../bookingSummary/bookingSummary.scss";
import { useParams } from 'react-router-dom';

const BookingSummary: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="appointments">
            <Sidebar />
            <div className="appointmentsContainer">
                <Navbar />
                <div className="mainContent">
                    Booking Summary
                    <div className="subContent">
                        View and Confirm The Booking Details
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;
