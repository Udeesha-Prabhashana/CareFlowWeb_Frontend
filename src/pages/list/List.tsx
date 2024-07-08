import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

interface Hotel {
  _id: string;
  name: string;
  address: string;
  city: string;
  distance: number;
  photos: string[];
  title: string;
  desc: string;
  cheapestPrice: number;
  rating: number;
  featured: boolean;
}

const List: React.FC = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [dates, setDates] = useState(location.state?.dates || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0, room: 1 });
  const [min, setMin] = useState<number | undefined>(undefined);
  const [max, setMax] = useState<number | undefined>(undefined);

  const { data, loading, error, reFetch } = useFetch<Hotel[]>(
    `http://127.0.0.1:5000/getAllFilterdHotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  useEffect(() => {
    if (location.state?.destination) setDestination(location.state.destination);
  }, [location.state]);

  console.log(" DATA", data);

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMin(Number(e.target.value))}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMax(Number(e.target.value))}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={String(options.adult)} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={String(options.children)} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={String(options.room)} />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              data?.map((item) => <SearchItem item={item} key={item._id} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
