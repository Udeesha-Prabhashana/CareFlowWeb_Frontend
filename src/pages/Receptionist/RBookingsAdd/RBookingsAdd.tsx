import React, { useState, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import NavbarLu from "../../../components/navbarA/NavbarA";
import SidebarRec from "../../../components/sidebarRec/SidebarRec";
import { SearchContext } from "../../../context/SearchContext";
import "./RBookingsAdd.scss";
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface DateRangeType {
    startDate: Date;
    endDate: Date;
    key: string;
}

const RBookingsAdd: React.FC = () => {
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
        navigate("/receptionist/bookings/addnewbooking/doctors", {
            state: { destination, dates, options },
        });
    };

    const handleClear = () => {
        setDestination("");
        setDates([{ startDate: new Date(), endDate: new Date(), key: "selection" }]);
    };

    const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDestination(e.target.value);
    };

    return (
        <div className="rbookingadd">
            <SidebarRec />
            <NavbarLu />
            <div className="homeContainer2lu">
                <div className="bodyContainerLu">
                    <div className="mainTopic">Book a New Doctor’s Appointment</div>
                    <div className="subTopic">
                        Fill one or more properties to find the doctor
                    </div>
                    <div className="flex flex-col w-full pt-10 pr-4 pl-4">
                        <div className="flex flex-row mb-6">
                            <div className="flex flex-col w-2/3 space-y-4 mr-6">
                                {/* Doctor Name Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="doctorName" className="text-gray-700 mb-2">
                                        Doctor Name
                                    </label>
                                    <input
                                        id="doctorName"
                                        type="text"
                                        placeholder="Enter Doctor Name"
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>

                                {/* Specialty Dropdown */}
                                <div className="flex flex-col">
                                    <label htmlFor="specialty" className="text-gray-700 mb-2">
                                        Specialty
                                    </label>
                                    <select
                                        id="specialty"
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        onChange={handleSpecializationChange}
                                        value={destination}
                                    >
                                        <option value="">Select Specialty</option>
                                        <option value="Neurologist">Neurologist</option>
                                        <option value="Physician">Physician</option>
                                        <option value="Cardiologist">Cardiologist</option>
                                    </select>
                                </div>

                                {/* Date Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="date" className="text-gray-700 mb-2">
                                        Date
                                    </label>
                                    <input
                                        id="date"
                                        type="date"
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        value={format(dates[0].startDate, "yyyy-MM-dd")}
                                        onChange={(e) =>
                                            setDates([{ startDate: new Date(e.target.value), endDate: new Date(e.target.value), key: "selection" }])
                                        }
                                    />
                                </div>

                                {/* Location Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="location" className="text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <input
                                        id="location"
                                        type="text"
                                        placeholder="Enter Location"
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-row space-x-4">
                                    <Button
                                        className="ml-14"
                                        variant="contained"
                                        sx={{
                                            textTransform: "none",
                                            backgroundColor: "#855CDD",
                                            marginTop: "8px",
                                            color: "white",
                                            fontFamily: "Roboto",
                                            fontSize: "16px",
                                            // width: "90px",
                                            height: "42px",
                                            borderRadius: "9px",
                                            "&:hover": {
                                                backgroundColor: "#5F2BCF", // Change to your desired hover color
                                            },
                                        }}
                                        onClick={handleSearch}
                                    >
                                        Search Doctors
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            textTransform: "none",
                                            border: "1px solid var(--normal-hover, #5F2BCF)",
                                            boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)",
                                            marginTop: "8px",
                                            color: "#855CDD",
                                            fontFamily: "Roboto",
                                            fontSize: "16px",
                                            width: "90px",
                                            height: "42px",
                                            borderRadius: "9px",
                                        }}
                                        onClick={handleClear}
                                    >
                                        Clear
                                    </Button>
                                </div>
                            </div>



                            {/* Ask Square */}
                            <div
                                style={{
                                    width: "33%",
                                    border: "1px solid var(--normal-hover, #5F2BCF)",
                                    borderRadius: "11px",
                                    // boxShadow: "0px 0px 35.6px 0px #9D7CE5",
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    backgroundColor: "transparent", // Removed fill color
                                }}
                            >
                                <img
                                    src="/images/locations/Home1.png" // Assuming the flipped image is available
                                    alt="Cura Image"
                                    style={{
                                        maxWidth: "100%",
                                        marginBottom: "15px",
                                    }}
                                />
                                <div style={{
                                    color: "var(--normal-hover, #5F2BCF)",
                                    fontSize: "25px",
                                    fontWeight: 700,
                                    lineHeight: "30px",
                                    marginBottom: "10px",
                                }}>
                                    Can’t find the suitable doctor for your symptoms?
                                </div>
                                <div style={{
                                    color: "#000",
                                    fontSize: "18px",
                                    fontWeight: 300,
                                    lineHeight: "20px",
                                    marginBottom: "20px",
                                }}>
                                    Cura is an AI Powered chatbot that can help you find your doctor and book a doctor's appointment
                                </div>
                                <Button
                                    variant="contained"
                                    startIcon={<AutoAwesomeIcon />}
                                    sx={{
                                        textTransform: "none",
                                        backgroundColor: "#855CDD",
                                        color: "white",
                                        fontFamily: "Roboto",
                                        fontSize: "20px",
                                        width: "200px",
                                        height: "44px",
                                        borderRadius: "65px",
                                        "&:hover": {
                                            backgroundColor: "#5F2BCF",
                                        },
                                    }}
                                >
                                    Ask Cura
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RBookingsAdd;