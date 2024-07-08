import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange, RangeKeyDict } from "react-date-range";
import { useContext, useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

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
    navigate("/hotel", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant saving of 10% or more with a free WH booking account
            </p>
            <div className="headerSerch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
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
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setOpenOptions(!openOption)} className="headerSearchtext">
                  {`${options.adult} adult • ${options.children} children • ${options.room} room`}
                </span>
                {openOption && (
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
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
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
