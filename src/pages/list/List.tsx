import "./list.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
// import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
import SearchItemR from "../../components/searchItemR/searchItemR";
import SidebarRec from "../../components/sidebarRec/SidebarRec";
import NavbarLu from "../../components/navbarA/NavbarA";
import Button from "@mui/material/Button";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import SearchItemnlu from "../../components/searchItemnlu/searchItemnlu";
import Navbar from "../../components/navbar/Navbar";


interface Doctor {
  id: string;
  name: string;
  address: string;
  city: string;
  photoUrl: string;
  title: string;
  description: string;
  featured: boolean;
}

const dummyData: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ajith Kumara",
    address: "123 Sunshine St, Kottawa",
    city: "Kottawa",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MRNQQfqm_G3F-AQ17YCJiTqnd-fCHKrsO_vqDM7KjwPAvM2IOs5ctb7k77wAhW11gmE&usqp=CAU",
    title: "Expert General Practitioner",
    description: "Dr. Ajith Perera has over 20 years of experience in general medicine. He is known for his compassionate care and comprehensive approach to patient health.",
    featured: true,
  },
  {
    id: "2",
    name: "Dr. Sampath Samarasinghe",
    address: "456 Mountain Rd, Colombo",
    city: "Colombo",
    photoUrl: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    title: "Renowned Cardiologist",
    description: "Dr. Sampath Samarasinghe specializes in cardiology with a focus on preventive care and advanced treatments. His expertise and patient-centered approach have earned him high regard.",
    featured: false,
  },
  {
    id: "3",
    name: "Dr. Nimal Jayasinghe",
    address: "789 Ocean Ave, Colombo",
    city: "Colombo",
    photoUrl: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    title: "Pediatric Specialist",
    description: "Dr. Nimal Jayasinghe is a dedicated pediatrician with a passion for children's health and development. He provides expert care in a friendly and welcoming environment.",
    featured: true,
  },
  {
    id: "4",
    name: "Dr. Malini Fernando",
    address: "321 Garden St, Kandy",
    city: "Kandy",
    photoUrl: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    title: "Leading Dermatologist",
    description: "Dr. Malini Fernando offers comprehensive dermatological care, including treatment for skin conditions and cosmetic procedures. She is known for her precision and patient care.",
    featured: false,
  },
  {
    id: "5",
    name: "Dr. Sanjay Perera",
    address: "654 City St, Galle",
    city: "Galle",
    photoUrl: 
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    title: "Orthopedic Surgeon",
    description: "Dr. Sanjay Perera is an experienced orthopedic surgeon specializing in joint replacements and sports injuries. He is committed to providing personalized and effective treatment.",
    featured: true,
  },
];
const List: React.FC = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state?.destination || ""
  )
  const [doctorName, setDoctorName] = useState(location.state?.doctorName || "");
  const [specialization, setSpecialization] = useState(location.state?.specialization || "");
  const [date, setDate] = useState<string>(location.state?.date || "");

  const { data, loading, error, reFetch } = useFetch<Doctor[]>(
    `http://localhost:8080/getAllFilteredDoctors?roles=ROLE_DOCTOR&name=${doctorName}&specialization=${specialization}&date=${date}`
  );

  // useEffect(() => {
  //   if (location.state?.destination) setDestination(location.state.destination);
  // }, [location.state]);

  console.log(" DATA", data);

  const handleClick = () => {
    reFetch();
  };

  return (
    <div className="navbarnlu">
      <div className="navebarnlu2">
          <Navbar />
      </div>
      <div>
      <div className="List">
        <div className="navebarlist">
        </div>
        <div className="NLUhomeContainer2lu">
          <div className="NLUbodyContainerLu">
          <div className="flex flex-col space-y-4 ml-5 mt-5">
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Doctor Name</label>
                <input
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                  placeholder="Enter Doctor Name"
                  type="text"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Specialty</label>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                >
                  <option value="">Select Specialty</option>
                  <option value="General Practitioner">
                    General Practitioner
                  </option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Oncologist">Oncologist</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]} // Minimum date set to today
                />
              </div>
              <Button
            className="ml-14"
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#855CDD",
              marginTop: "20px",
              marginLeft: "20px",
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
            onClick={handleClick}
          >
            Apply filters
          </Button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="NLUsearchItamDoctors">
        <div className="flex flex-col space-y-4 mt-6">
            {loading ? (
              <p>Loading...</p>
            ) : (
              (data || dummyData)?.map((item) => (
                <div key={item.id} className="p-4">
                  <SearchItemnlu item={item} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default List;
