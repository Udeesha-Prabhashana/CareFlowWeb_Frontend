import "./LUBookingsDoctorsView.scss";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";
import { toast } from "react-toastify";

export interface AvailabilitySlot {
  availableDate: string;
  bookedSlots: number;
}

interface AppointmentsData {
  [key: string]: number;
}

export interface Item {
  id: string;
  name: string;
  photoUrl: string; 
  description: string;
  rating?: number;
  specialization?:string;
  availability: AvailabilitySlot[]; // Add availability slots
}

const LUBookingsDoctorsView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [openModel, setOpenModel] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const appointmentsData: Record<string, number> = { /* Your data here */ };

  const state = location.state as { item: Item } | undefined;
  const item = state?.item;

  if (!item) {
    return <div>Doctor not found</div>;
  }

  const handleClick = () => {
    // Check if a date is selected
    if (selectedDate) {
        // Prepare the data to pass
        const data: {
            doctor?: any;
            selectedDate: string;
            availableAppointments: number;
            patientName?: string;
            patientAge?: string;
            patientSex?: string;
            patientAddress?: string;
        } = {
            doctor: item,
            selectedDate,
            availableAppointments: availableAppointments + 1|| 0
        };

        // Add user details if available
        if (user) {
            data.patientName = user.user_name;
            data.patientAge = user.age;
            data.patientSex = user.sex;
            data.patientAddress = user.address;
        }

        // Navigate to the BookingSummaryPay page with data
        navigate("/bookingSummaryPay", { state: data });
    } else {
        // Alert if no date is selected
        alert("Please select a date.");
    }
};

  

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  // Find available slots for the selected date
  const availableAppointments = item.availability.find(
    slot => slot.availableDate === selectedDate
  )?.bookedSlots || 0;

  // const availableAppointments = selectedDate in appointmentsData ? appointmentsData[selectedDate] : 0;

  return (
    <div className="LUDVDoctorsView">
      <SidebarPatient />
      <div className="LUDVhomeContainer2lu">
        <div className="LUDVbodyContainerLu">
          <div className="flex items-center mb-8 text-purple-600 pl-14">
            <Link to="/doclist" className="flex items-center">
              <FontAwesomeIcon icon={faCircleArrowLeft} />
              <span className="ml-2 font-roboto text-lg cursor-pointer">Go back</span>
            </Link>
          </div>

          <div className="flex flex-row ml-14">
            <div className="flex flex-col items-center mr-6 w-1/3">
              <img
                src={item.photoUrl}
                alt={item.name}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <div className="p-4 bg-white rounded-lg shadow-md w-full flex flex-col items-center mx-auto">
                <h2 className="text-lg font-bold mb-4">Availability</h2>
                {/* Display availability based on item.availability data */}
                {item.availability.map((slot, index) => (
                  <div key={index} className="flex flex-row mb-2 w-full justify-center">
                    <span className="text-gray-600 font-bold w-32 flex-shrink-0">{new Date(slot.availableDate).toLocaleDateString()} :</span>
                    <span className="text-gray-600 flex-grow text-center">No  {slot.bookedSlots + 1} available</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-2/3 ml-14">
              <h1 className="text-black text-3xl font-semibold leading-none mb-2">
                {item.name}
              </h1>
              <h2 className="text-violet-600 text-xl mb-4">
                {/* {item.title} */}
              </h2>
              <p className="text-gray-600 text-base mb-4">
                {/* {item.desc} */}
              </p>
              <div className="flex flex-row mb-2">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Speciality:</span>
                <span className="text-gray-600 flex-grow">{item.specialization}</span>
              </div>
              <div className="flex flex-row mb-2">
                <span className="text-gray-600 font-bold w-32 flex-shrink-0">Experience:</span>
                <span className="text-gray-600 flex-grow">{item.description}</span>
              </div>
              <div className="flex flex-row mt-14 ">
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
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <button
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition w-32"
                  onClick={handleClick}
                >
                  Book Doctor
                </button>
              </div>
            </div>
          </div>
          {/* {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />} */}
        </div>
      </div>
    </div>
  );
};

export default LUBookingsDoctorsView;
