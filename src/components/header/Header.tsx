import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange, RangeKeyDict } from "react-date-range";
import { useContext, useState, ChangeEvent } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Icon from '@mdi/react';
import { mdiDoctor } from '@mdi/js';
import { mdiPill } from '@mdi/js';
import { mdiAccountCheckOutline } from '@mdi/js';
import { mdiHistory } from '@mdi/js';
import { HiIdentification } from "react-icons/hi2";

interface HeaderProps {
  type: string;
}

interface DateRangeType {
  startDate: Date;
  endDate: Date;
  key: string;
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  console.log("Header type:", type);
  const { user } = useContext(AuthContext);
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
    navigate("/doctorlistNlu", { state: { destination, dates, options } });
  };

  const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDestination(e.target.value);
  };
  
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <LocalHospitalIcon/>
            <span>Hospital</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faCar} /> */}
            <Icon path={mdiDoctor} size={1} />
            <span>Medical Doctor</span>
          </div>
          <div className="headerListItem">
            <Icon path={mdiPill} size={1} />
            <span>Medicine</span>
          </div>
          <div className="headerListItem">
            <Icon path={mdiHistory} size={1} />
            <span>Medical History</span>
          </div>
          <div className="headerListItem">
            <HiIdentification/>
            <span>Check</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Expert Doctor Appointments at your Fingertips</h1>
            <h3 className="headerDesc">
              Streamline Your Health with Careflow
            </h3>
            {/* <h2 className="finddoctore">
              Book an appointment with the best doctors
            </h2> */}
            <div className="search">
            <input type="text" placeholder="I have a Back Pain for 7 Days. Which Doctor is good for me?" />
            <button> Ask Cura</button>
          </div>
            <div className="headerSerch">
              <div className="headerSearchItem">
                <Icon path={mdiDoctor} size={1}  className="headerIcon" />
                <input
                  type="text"
                  placeholder="Search Doctor Name"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <Icon path={mdiAccountCheckOutline} size={1} className="headerIcon" />
                <select
                  className="headerSearchInput"
                  onChange={handleSpecializationChange}
                >
                  
                  <option className="place">Select Specialization</option>
                  <option value="Specialization 1">Specialization 1</option>
                  <option value="Specialization 2">Specialization 2</option>
                  <option value="Specialization 3">Specialization 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchtext">
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item: RangeKeyDict) => setDates([item.selection as DateRangeType])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                {/* <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setOpenOptions(!openOption)} className="headerSearchtext">
                  {`${options.adult} adult • ${options.children} children • ${options.room} room`}
                </span> */}
                {/* {openOption && (
                  <div className="option">
                    <div className="optionItem">
                      <span className="optionText"> Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText"> Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText"> Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search Doctor
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
