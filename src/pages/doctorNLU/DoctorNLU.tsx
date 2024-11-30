import "./doctorNLU.css";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
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
import Navbar from "../../components/navbar/Navbar";
import moment from "moment";

export interface AvailabilitySlot {
  availableDate: string;
  availableTime: string;
  suggestTime: string;
  bookedSlots: number;
  totalSlots: number;
}

export interface Item {
  id: string;
  name: string;
  photoUrl: string;
  description: string;
  docCharge: string;
  rating?: number;
  specialization?: string;
  availability: AvailabilitySlot[];
}

const DoctorNLU: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [openModel, setOpenModel] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availableTime, setAvailableTime] = useState<string>("");
  const [suggestTime, setSuggestTime] = useState<string>("");

  const state = location.state as { item?: Item };
  const item = state?.item;

  const id = parseInt(location.pathname.split("/").pop()!, 10); // Extract ID from the URL

  // Ensure the ID is within the bounds of dummyData

  useEffect(() => {
    if (selectedDate && item) {
      const slot = item.availability.find(slot => slot.availableDate === selectedDate);
      if (slot) {
        const [startTime, endTime] = slot.availableTime.split(" - ");
        const startMoment = moment(startTime, "hh:mm A");
        const endMoment = moment(endTime, "hh:mm A");

        const totalMinutes = endMoment.diff(startMoment, 'minutes');
        const slotDuration = totalMinutes / slot.totalSlots;

        const userAppointmentTime = startMoment.add(slot.bookedSlots * slotDuration - 15, 'minutes');
        const formattedTime = userAppointmentTime.format("hh:mm A");

        // Update state only if the value changes
        if (formattedTime !== suggestTime) {
          setSuggestTime(formattedTime);
        }
      } else {
        setSuggestTime(""); // Clear suggestTime if no slot is found
      }
    }
  }, [selectedDate, item, suggestTime]);

  const handleClick = () => {
    if (user) {
      // setOpenModel(true);
      toast.error("Unable to book. You have to log in!"); // Show success toast
      // navigate("/bookingSummaryPay")
    } else {
      toast.error("Unable to book. You have to log in!"); 
      // navigate("/bookingSummaryPay")
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);

    if (item) {
      const slot = item.availability.find(slot => slot.availableDate === selectedDate);
      if (slot) {
        setAvailableTime(slot.availableTime);
      } else {
        setAvailableTime("");
        setSuggestTime(""); // Clear suggestTime if no slot is found
      }
    }
  };

  const availableAppointments = item?.availability.find(slot => slot.availableDate === selectedDate)?.bookedSlots || 0;


  return (
    
    <div className="navbarnlu">
       <div className="navebarnlu3">
       <Navbar />
        </div> 
    <div>
    <div className="DoctorNLU">
      <div className="LUDVhomeContainer2lu">
        <div className="LUDVbodyContainerLu">
          <div className="flex items-center mb-4 text-purple-600 pl-14">
            <Link to="/doctorlistNlu" className="flex items-center">
              <FontAwesomeIcon icon={faCircleArrowLeft} />
              <span className="ml-2 font-roboto text-lg cursor-pointer">Go back</span>
            </Link>
          </div>

        {item ? (
          <div className="flex flex-row ml-14">
            <div className="flex flex-col items-center mr-6 w-1/3">
              <img
                src={item.photoUrl}
                alt={item.name}
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
                {item.name}
              </h1>
              {/* <h2 className="text-purple-600 text-xl mb-4">
                {item.title}
              </h2> */}
              <p className="text-gray-600 text-base mb-4">
                {item.description}
              </p>
              <div className="flex flex-row mb-2">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Speciality:</span>
                <span className="text-gray-600 flex-grow">{item.specialization}</span>
              </div>
              {/* <div className="flex flex-row mb-2">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Experience:</span>
                <span className="text-gray-600 flex-grow">{item.experience}</span>
              </div> */}
              <div className="flex flex-row mb-4">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Fee:</span>
                <span className="text-gray-600 flex-grow">{item.docCharge}</span>
              </div>
              <div className="flex flex-row mt-14">
                  <div className="flex flex-col w-full bg-violet-200 text-white p-4 rounded-lg">
                    <label htmlFor="date" className="text-black font-bold mb-2">Select Date:</label>
                    <select
                      id="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      className="p-2 border rounded-lg w-full"
                    >
                      <option value="">Select Date</option>
                      {item.availability.map(slot => (
                        <option key={slot.availableDate} value={slot.availableDate}>
                          {new Date(slot.availableDate).toLocaleDateString()}
                        </option>
                      ))}
                    </select>
                    {selectedDate && (
                      <div className="mt-2">
                        <p className="text-black font-bold">Available Appointment Number: {availableAppointments + 1}</p>
                        <p className="text-black font-bold">Arrival Time Based on Your Booking: {suggestTime}</p>
                      </div>
                    )}
                  </div>
                </div>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition w-32"
                onClick={handleClick}
              >
                Book Doctor
              </button>
            </div>
          </div>
          // {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
        ) : (
          <p>No doctor information available.</p>
        )}
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default DoctorNLU;