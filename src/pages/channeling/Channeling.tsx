import React, { useState, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mdiDoctor } from "@mdi/js";
import { mdiAccountCheckOutline } from "@mdi/js";
import Icon from "@mdi/react";

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

interface DateRangeType {
    startDate: Date;
    endDate: Date;
    key: string;
}

const Channeling: React.FC = () => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState<string>("");
    const [dates, setDates] = useState<DateRangeType[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
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
            payload: { city: destination, dates, options },
        });
        navigate("/doclist", { state: { destination, dates, options } });
    };
    const handleaskCura = () => {

        navigate("/chatbot");
    };

    const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDestination(e.target.value);
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
        setDestination(query);
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
                        {/* <Icon path={mdiDoctor} size={1} className="headerIcon2" /> */}
                        <input
                            type="text"
                            placeholder="Search Doctor Name"
                            className="headerSearchInput2"
                            onChange={handleDoctorNameChange}
                            value={destination}
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
                        {/* <Icon path={mdiAccountCheckOutline} size={1} className="headerIcon2" /> */}
                        <select
                            className="headerSearchInput2"
                            onChange={handleSpecializationChange}
                        >
                            <option className="place">Select Specialization</option>
                            <option value="Specialization 1">Specialization 1</option>
                            <option value="Specialization 2">Specialization 2</option>
                            <option value="Specialization 3">Specialization 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="lableschan">Date</div>
                    <div className="headerSearchItem2">
                        {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon2" /> */}
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="headerSearchtext2chan"
                        >
              {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
              )}`}
            </span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item: RangeKeyDict) =>
                                    setDates([item.selection as DateRangeType])
                                }
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="date2"
                                minDate={new Date()}
                            />
                        )}
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
