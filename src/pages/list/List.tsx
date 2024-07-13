import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
import SearchItem from "../../components/searchItem/searchItem";

interface Hotel {
  _id: string;
  name: string;
  address: string;
  city: string;
  // distance: number;
  photo: string[];
  title: string;
  desc: string;
  // cheapestPrice: number;
  // rating: number;
  featured: boolean;
}

const dummyData: Hotel[] = [
  {
    _id: "1",
    name: "Dr. Amarasiri Perera",
    address: "123 Sunshine St, Kottawa",
    city: "Kottawa",
    photo: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MRNQQfqm_G3F-AQ17YCJiTqnd-fCHKrsO_vqDM7KjwPAvM2IOs5ctb7k77wAhW11gmE&usqp=CAU"],
    title: "Expert General Practitioner",
    desc: "Dr. Amarasiri Perera has over 20 years of experience in general medicine. He is known for his compassionate care and comprehensive approach to patient health.",
    featured: true,
  },
  {
    _id: "2",
    name: "Dr. Sampath Samarasinghe",
    address: "456 Mountain Rd, Colombo",
    city: "Colombo",
    photo: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    title: "Renowned Cardiologist",
    desc: "Dr. Sampath Samarasinghe specializes in cardiology with a focus on preventive care and advanced treatments. His expertise and patient-centered approach have earned him high regard.",
    featured: false,
  },
  {
    _id: "3",
    name: "Dr. Nimal Jayasinghe",
    address: "789 Ocean Ave, Colombo",
    city: "Colombo",
    photo: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    title: "Pediatric Specialist",
    desc: "Dr. Nimal Jayasinghe is a dedicated pediatrician with a passion for children's health and development. He provides expert care in a friendly and welcoming environment.",
    featured: true,
  },
  {
    _id: "4",
    name: "Dr. Malini Fernando",
    address: "321 Garden St, Kandy",
    city: "Kandy",
    photo: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    title: "Leading Dermatologist",
    desc: "Dr. Malini Fernando offers comprehensive dermatological care, including treatment for skin conditions and cosmetic procedures. She is known for her precision and patient care.",
    featured: false,
  },
  {
    _id: "5",
    name: "Dr. Sanjay Perera",
    address: "654 City St, Galle",
    city: "Galle",
    photo: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    title: "Orthopedic Surgeon",
    desc: "Dr. Sanjay Perera is an experienced orthopedic surgeon specializing in joint replacements and sports injuries. He is committed to providing personalized and effective treatment.",
    featured: true,
  },
];


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
              <label>Doctor Name</label>
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
                  Min price
                </span>
                <input
                  type="number"
                  onChange={(e) => setMin(Number(e.target.value))}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price 
                </span>
                <input
                  type="number"
                  onChange={(e) => setMax(Number(e.target.value))}
                  className="lsOptionInput"
                />
              </div>
              {/* <div className="lsOptionItem">
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
              </div> */}
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              (data || dummyData)?.map((item) => <SearchItem item={item} key={item._id} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
