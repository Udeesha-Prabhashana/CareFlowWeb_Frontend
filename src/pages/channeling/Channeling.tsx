import React, { useState, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mdiDoctor } from "@mdi/js";
import { mdiAccountCheckOutline } from "@mdi/js";
import Icon from '@mdi/react';

import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import NavbarLu from "../../components/navbarA/NavbarA";
import WidgetLu from "../../components/widgetLU/WidgetLU";
import List from "../../components/table/Table";
import SidebarLu from "../../components/sidebarLu/SidebarLu";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import "./channeling.scss";

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
      [name]: operation === "i" ? options[name as keyof typeof options] + 1 : options[name as keyof typeof options] - 1,
    }));
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { city: destination, dates, options } });
    navigate("/doclist", { state: { destination, dates, options } });
  };

  const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDestination(e.target.value);
  };

  return (
    <div className="homelu">
      <SidebarLu />
      <NavbarLu />
          <div className="homeContainer2lu">
              <div className="finddoctore2">
                Book an appointment with the best doctors
              </div>
              <div className="finddoctore22">
                Fill one or more properties to find your doctor
              </div>
              <div className="headerSerch2">
                    <div className="lables">
                        Doctor Name
                    </div>
                    <div className="headerSearchItem2">
                        {/* <Icon path={mdiDoctor} size={1} className="headerIcon2" /> */}
                        <input
                        type="text"
                        placeholder="Search Doctor Name"
                        className="headerSearchInput2"
                        onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="lables">
                        Specialty
                    </div>
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
                    <div className="lables">
                        Date
                    </div>
                    <div className="headerSearchItem2">
                        {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon2" /> */}
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchtext2">
                        {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item: RangeKeyDict) => setDates([item.selection as DateRangeType])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="date2"
                            minDate={new Date()}
                        />
                        )}
                    </div>
                    <div className="headerSearchItem2Button">
                            <button className="headerBtn2" onClick={handleSearch}>
                            Search Doctor
                            </button>
                    </div>
              </div>
          </div>
          <div className="askqura">
            <div className="image">
          <img src="/images/locations/image.png" alt="" className="askquraImage" />
          <div className="text1">
            Can’t find the suitable doctor for your symptoms?
        </div>
          <div className="text2">
            Cura is a AI Powered chatbot that can help you find your doctor and book doctor's appointment
          </div>
          <button className="askCuraButtton" onClick={handleSearch}>
                  Search Cura
          </button>
        </div>
          </div>

    </div>
  );
};

export default Channeling;
