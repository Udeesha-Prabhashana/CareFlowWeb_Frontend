import "./LUBookingsDoctorsView.scss";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import NavbarLu from "../../components/navbarA/NavbarA";
import SidebarRec from "../../components/sidebarRec/SidebarRec";
import { Link } from 'react-router-dom';
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import { toast } from 'react-toastify';

const dummyData = [
  {
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MRNQQfqm_G3F-AQ17YCJiTqnd-fCHKrsO_vqDM7KjwPAvM2IOs5ctb7k77wAhW11gmE&usqp=CAU",
    ],
    name: "Dr. Ajith Kumara",
    specialty: "Gastroenterologist specializing in the diagnosis, treatment, and management of digestive system disorders.",
    experience: "With over 15 years of clinical practice, Dr. Ajith is dedicated to providing comprehensive care.",
    fee: 3000,
    email: "ajithkumara@gmail.com",
    title: "Gastroenterologist",
    desc: "Dr. Ajith Kumara is a highly skilled and experienced Gastroenterologist specializing in the diagnosis, treatment, and management of digestive system disorders. With over 15 years of clinical practice, Dr. Ajith is dedicated to providing comprehensive care for conditions affecting the gastrointestinal tract, liver, pancreas, and gallbladder.",
  },
  {
    photos: [
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    ],
    name: "Dr. Sampath Samarasinghe",
    specialty: "Cardiologist with expertise in preventive care and advanced treatments.",
    experience: "Dr. Sampath has over 20 years of experience, focusing on patient-centered care.",
    fee: 3500,
    email: "sampaths@gmail.com",
    title: "Renowned Cardiologist",
    desc: "Dr. Sampath Samarasinghe specializes in cardiology with a focus on preventive care and advanced treatments. His expertise and patient-centered approach have earned him high regard.",
  },
  {
    photos: [
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    ],
    name: "Dr. Nimal Jayasinghe",
    specialty: "Pediatrician with a passion for children's health.",
    experience: "With over 10 years of pediatric experience, Dr. Nimal provides expert care.",
    fee: 3200,
    email: "nimalj@gmail.com",
    title: "Pediatric Specialist",
    desc: "Dr. Nimal Jayasinghe is a dedicated pediatrician with a passion for children's health and development. He provides expert care in a friendly and welcoming environment.",
  },
  {
    photos: [
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    ],
    name: "Dr. Malini Fernando",
    specialty: "Dermatologist specializing in skin conditions and cosmetic procedures.",
    experience: "Dr. Malini has over 12 years of experience in dermatology.",
    fee: 4000,
    email: "malinif@gmail.com",
    title: "Leading Dermatologist",
    desc: "Dr. Malini Fernando offers comprehensive dermatological care, including treatment for skin conditions and cosmetic procedures. She is known for her precision and patient care.",
  },
  {
    photos: [
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    ],
    name: "Dr. Sanjay Perera",
    specialty: "Orthopedic Surgeon specializing in joint replacements and sports injuries.",
    experience: "Dr. Sanjay has over 15 years of experience in orthopedic surgery.",
    fee: 3600,
    email: "sanjayp@gmail.com",
    title: "Orthopedic Surgeon",
    desc: "Dr. Sanjay Perera is an experienced orthopedic surgeon specializing in joint replacements and sports injuries. He is committed to providing personalized and effective treatment.",
  },
];


const LUBookingsDoctorsView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [openModel, setOpenModel] = useState(false);

  const id = parseInt(location.pathname.split("/").pop()!, 10); // Extract ID from the URL

  // Ensure the ID is within the bounds of dummyData
  if (isNaN(id) || id < 1 || id > dummyData.length) {
    return <div>Doctor not found</div>;
  }

  const data = dummyData[id - 1]; // Get the dummy data by ID

  const handleClick = () => {
    if (user) {
      // setOpenModel(true);
      // toast.success("Doctor booked successfully!"); // Show success toast
      navigate("/bookingSummaryPay")
    } else {
      // toast.success("Doctor booked successfully!"); 
      navigate("/bookingSummaryPay")
    }
  };

  return (
    <div className="LUDVDoctorsView">
      <SidebarPatient />
      <div className="LUDVhomeContainer2lu">
        <div className="LUDVbodyContainerLu">
          <div className="flex items-center mb-4 text-purple-600 pl-14">
            <Link to="/doclist" className="flex items-center">
              <FontAwesomeIcon icon={faCircleArrowLeft} />
              <span className="ml-2 font-roboto text-lg cursor-pointer">Go back</span>
            </Link>
          </div>

          <div className="flex flex-row ml-14">
            <div className="flex flex-col items-center mr-6 w-1/3">
              <img
                src={data.photos[0]}
                alt={data.title}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <div className="p-4 bg-white rounded-lg shadow-md w-full flex flex-col items-center mx-auto">
                <h2 className="text-lg font-bold mb-4">Availability</h2>
                <div className="flex flex-row mb-2 w-full justify-center">
                  <span className="text-gray-600 font-bold w-32 flex-shrink-0">Monday - Friday:</span>
                  <span className="text-gray-600 flex-grow text-center">08.00 - 14.00</span>
                </div>
                <div className="flex flex-row mb-2 w-full justify-center">
                  <span className="text-gray-600 font-bold w-32 flex-shrink-0">Saturday:</span>
                  <span className=" flex-grow text-center">12.00 - 18.00</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/3 ml-14">
              <h1 className="text-black text-3xl font-semibold leading-none mb-2">
                {data.name}
              </h1>
              <h2 className="text-purple-600 text-xl mb-4">
                {data.title}
              </h2>
              <p className="text-gray-600 text-base mb-4">
                {data.desc}
              </p>
              <div className="flex flex-row mb-2">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Speciality:</span>
                <span className="text-gray-600 flex-grow">{data.specialty}</span>
              </div>
              <div className="flex flex-row mb-2">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Experience:</span>
                <span className="text-gray-600 flex-grow">{data.experience}</span>
              </div>
              <div className="flex flex-row mb-4">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Fee:</span>
                <span className="text-gray-600 flex-grow">{data.fee}</span>
              </div>
              <div className="flex flex-row mb-4">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Email:</span>
                <span className="text-gray-600 flex-grow">{data.email}</span>
              </div>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition w-32"
                onClick={handleClick}
              >
                Book Doctor
              </button>
            </div>
          </div>
          {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
        </div>
      </div>
    </div>
  );
};

export default LUBookingsDoctorsView;