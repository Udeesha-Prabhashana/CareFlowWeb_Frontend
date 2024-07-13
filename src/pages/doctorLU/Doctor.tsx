import "./doctor.css"
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
import NavbarLu from "../../components/navbarA/NavbarA";
import SidebarLu from "../../components/sidebarLu/SidebarLu";

interface DoctorData {
  photos: string[];
  address: string;
  distance: number;
  fee: number;
  title: string;
  desc: string;
}

const dummyData: DoctorData[] = [
  {
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MRNQQfqm_G3F-AQ17YCJiTqnd-fCHKrsO_vqDM7KjwPAvM2IOs5ctb7k77wAhW11gmE&usqp=CAU"],
    address: "123 Sunshine St, Kottawa",
    distance: 1.5,
    fee: 3000,
    title: "Expert General Practitioner",
    desc: "Dr. Amarasiri Perera has over 20 years of experience in general medicine. He is known for his compassionate care and comprehensive approach to patient health."
  },
  {
    photos: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    address: "456 Mountain Rd, Colombo",
    distance: 3.0,
    fee: 3500,
    title: "Renowned Cardiologist",
    desc: "Dr. Sampath Samarasinghe specializes in cardiology with a focus on preventive care and advanced treatments. His expertise and patient-centered approach have earned him high regard."
  },
  {
    photos: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    address: "789 Ocean Ave, Colombo",
    distance: 2.0,
    fee: 3200,
    title: "Pediatric Specialist",
    desc: "Dr. Nimal Jayasinghe is a dedicated pediatrician with a passion for children's health and development. He provides expert care in a friendly and welcoming environment."
  },
  {
    photos: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    address: "321 Garden St, Kandy",
    distance: 4.0,
    fee: 4000,
    title: "Leading Dermatologist",
    desc: "Dr. Malini Fernando offers comprehensive dermatological care, including treatment for skin conditions and cosmetic procedures. She is known for her precision and patient care."
  },
  {
    photos: ["https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"],
    address: "654 City St, Galle",
    distance: 5.0,
    fee: 3600,
    title: "Orthopedic Surgeon",
    desc: "Dr. Sanjay Perera is an experienced orthopedic surgeon specializing in joint replacements and sports injuries. He is committed to providing personalized and effective treatment."
  },
];

const Doctor: React.FC = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2], 10); // Convert id to integer
  console.log("HOTEL-ID", id);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const data = dummyData[id - 1]; // Get the dummy data by id
  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1: Date, date2: Date) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // const days =  dayDifference(dates[0].endDate, dates[0].startDate);
  // console.log("Days", days)

  const handleOpen = (i: number) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
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

  // const totalCost = (days * (data.cheapestPrice) * (options.room ?? 1));

  return (
    <div className="homelu">
      <SidebarLu />
      <NavbarLu />
      <>
        <div className="hotelContainerLU">
          {open && (
            <div className="sliderLU">
              <FontAwesomeIcon icon={faCircleXmark} className="closeLU" onClick={() => setOpen(false)} />
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowLU" onClick={() => handleMove("l")} />
              <div className="sliderWrapperLU">
                <img src={data.photos[slideNumber]} alt="" className="sliderImgLU" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
            </div>
          )}
          <div className="hotelWrapperLU">
            <button className="bookNow" onClick={handleClick}>
              Reserve or Book Now!
            </button>
            <h1 className="hotelTitleLU">{data.title}</h1>
            <div className="hotelAddressLU">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistanceLU">Excellent location {data.distance}m from center</span>
            {/* <span className="hotelPriceHighlight">Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi</span> */}
            <div className="hotelImagesLU">
              {data.photos.map((photo, i) => (
                <div className="hotelImgWrapperLU" key={i}>
                  <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetailsLU">
              <div className="hotelDetailsTextsLU">
                <h1 className="hotelTitleLU">{data.title}</h1>
                <p className="hotelDescLU">{data.desc}</p>
              </div>
              <div className="hotelDetailsPriceLU">
                <h1>Perfect for a one-on-one consultation!</h1>
                <span>Located in the real heart of the city, this doctor has an excellent location score of 9.8!</span>
                <h2>
                  <b>Rs. {data.fee}</b> per consultation
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </>
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
    </div>
  );
}

export default Doctor;
