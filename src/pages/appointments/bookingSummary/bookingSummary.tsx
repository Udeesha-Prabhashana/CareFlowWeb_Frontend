import React from 'react';
import SidebarLu from "../../../components/sidebarLu/SidebarLu";
import NavbarLu from "../../../components/navbarA/NavbarA";
import "../bookingSummary/bookingSummary.scss";
import { useParams } from 'react-router-dom';

const BookingSummary: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="appointments">
            <SidebarLu />
            <div className="appointmentsContainer">
                <NavbarLu />
                <div className="main">
                    Booking Summary
                    <div className="sub">
                        View and Confirm The Booking Details
                        <div className="content">
                            this is content
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default BookingSummary;
