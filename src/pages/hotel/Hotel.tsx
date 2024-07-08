import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

interface HotelData {
  photos: string[];
  address: string;
  distance: number;
  cheapestPrice: number;
  title: string;
  desc: string;
}

const Hotel: React.FC = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log("HOTEL-ID", id);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { data, loading, error } = useFetch<HotelData>(`http://127.0.0.1:5000/getHotelByID?id=${id}`);
  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1: Date, date2: Date) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

    const days =  dayDifference(dates[0].endDate, dates[0].startDate);
    console.log("Days", days)

  const handleOpen = (i: number) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModel(true);
    } else {
      navigate("/login");
    }
  }

  console.log("Data", data);

  const totalCost = (days * (data?.cheapestPrice ?? 0) * (options.room ?? 1));

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                <div className="sliderWrapper">
                  <img src={data?.photos[slideNumber]} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow" onClick={handleClick}>
                Reserve or Book Now!
              </button>
              <h1 className="hotelTitle">{data?.title}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data?.address}</span>
              </div>
              <span className="hotelDistance">Excellent location {data?.distance}m from center</span>
              <span className="hotelPriceHighlight">Book a stay over ${data?.cheapestPrice} at this property and get a free airport taxi</span>
              <div className="hotelImages">
                {data?.photos && data.photos.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data?.title}</h1>
                  <p className="hotelDesc">{data?.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
                  <h2>
                    <b>${totalCost}</b> ({days} nights)
                  </h2>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>
        </>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
    </div>
  );
}

export default Hotel;
