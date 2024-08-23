import React, { useState, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker

import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import NavbarLu from "../../components/navbarA/NavbarA";
import WidgetLu from "../../components/widgetLU/WidgetLU";
import List from "../../components/table/Table";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import "./channeling.scss";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";

const Channeling: React.FC = () => {
    const [doctorName, setDoctorName] = useState<string>("");
    const [specialization, setSpecialization] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined); // Use a single date

    const [openOption, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);

    const handleOption = (name: string, operation: string) => {
        setOptions((prev) => ({
            ...prev,
            [name]:
                operation === "i"
                    ? options[name as keyof typeof options] + 1
                    : options[name as keyof typeof options] - 1,
        }));
    };

    const handleSearch = () => {
        dispatch({
            type: "NEW_SEARCH",
            payload: { doctor: doctorName, specialization, date: selectedDate, options },
        });
        navigate("/doclist", { state: { doctorName, specialization, date: selectedDate, options } });
    };

    const handleaskCura = () => {
        navigate("/chatbot");
    };

    const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSpecialization(e.target.value);
    };

    const dummyDoctors = [
        "Dr. John Doe",
        "Dr. Jane Smith",
        "Dr. Emily Johnson",
        "Dr. Michael Brown",
        "Dr. Jessica White",
    ];

    const [filteredDoctors, setFilteredDoctors] = useState<string[]>([]);

    const handleDoctorNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setDoctorName(query);
        if (query) {
            setFilteredDoctors(
                dummyDoctors.filter((doctor) =>
                    doctor.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredDoctors([]);
        }
    };

    return (
        <div className="homelu">
            <SidebarPatient />
            {/*<NavbarLu />*/}
            <div className="homeContainer2lu">
                <div className="finddoctore2">
                    Book an appointment with the best doctors
                </div>
                <div className="finddoctore22">
                    Fill one or more properties to find your doctor
                </div>
                <div className="headerSerch2">
                    <div className="lableschan">Doctor Name</div>
                    <div className="headerSearchItem2">
                        <input
                            type="text"
                            placeholder="Search Doctor Name"
                            className="headerSearchInput2"
                            onChange={handleDoctorNameChange}
                            value={doctorName}
                            list="doctorOptions"
                        />
                        <datalist id="doctorOptions">
                            {filteredDoctors.map((doctor, index) => (
                                <option key={index} value={doctor} />
                            ))}
                        </datalist>
                    </div>
                    <div className="lableschan">Specialty</div>
                    <div className="headerSearchItem2">
                        <select
                            className="headerSearchInput2"
                            onChange={handleSpecializationChange}
                        >
                            <option className="place">Select Specialization</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="Oncologist">Oncologist</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="lableschan">Date</div>
                    <div className="headerSearchItem2">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date: Date | null) => setSelectedDate(date ?? undefined)}
                            dateFormat="MM/dd/yyyy"
                            className="headerSearchInput2"
                            // minDate={new Date()}
                        />
                    </div>
                    <div className="headerSearchItem2Button">
                        <button className="headerBtn2chan" onClick={handleSearch}>
                            Search Doctors
                        </button>
                    </div>
                </div>
            </div>
            <div className="askqurachan">
                <div className="image">
                    <img
                        src="/images/locations/image.png"
                        alt=""
                        className="askquraImagechan"
                    />
                    <div className="text1">Can’t find the suitable doctor for your ?</div>
                    <div className="text2">
                        Cura is a AI Powered chatbot that can help you find your doctor and
                        book doctor's appointment
                    </div>
                    <button className="askCuraButttonchan" onClick={handleaskCura}>
                        Ask Cura
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Channeling;
