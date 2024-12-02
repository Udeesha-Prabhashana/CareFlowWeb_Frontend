import "./LUBookingsDoctorsView.scss";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import moment from "moment";
import SidebarPatient from "../../components/sidebarPatient/sidebarPatient";

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

const LUBookingsDoctorsView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availableTime, setAvailableTime] = useState<string>("");
  const [suggestTime, setSuggestTime] = useState<string>("");

  const state = location.state as { item?: Item };
  const item = state?.item;

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
  }, [selectedDate, item, suggestTime]); // Dependency array includes `selectedDate`, `item`, and `suggestTime`

  const handleClick = () => {
    if (selectedDate && item) {
      const availableAppointments = item.availability.find(slot => slot.availableDate === selectedDate)?.bookedSlots || 0;

      const data = {
        doctor: item,
        selectedDate,
        time: suggestTime,
        availableAppointments: availableAppointments + 1 || 0,
        patientName: user?.name,
        patientAge: user?.age,
        patientSex: user?.sex,
        patientAddress: user?.address,
      };
      navigate("/bookingSummaryPay", { state: data });
    } else {
      alert("Please select a date.");
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

  // Safeguard against item being undefined
  const availableAppointments = item?.availability.find(slot => slot.availableDate === selectedDate)?.bookedSlots || 0;

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
                  {item.availability.map((slot, index) => (
                    <div key={index} className="flex flex-row mb-2 w-full justify-center">
                      <span className="text-gray-600 font-bold w-28 flex-shrink-0">{new Date(slot.availableDate).toLocaleDateString()} :</span>
                      <span className="text-gray-600 font-bold w-32 mb-4 flex-shrink-0">{slot.availableTime}</span>
                      <span className="text-gray-600 flex-grow text-center">No  {slot.bookedSlots + 1} available</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-2/3 ml-14">
                <h1 className="text-black text-3xl font-semibold leading-none mb-2">
                  {item.name}
                </h1>
                <p className="text-gray-600 text-base mb-4">{item.description}</p>
                <div className="flex flex-row mb-2">
                  <span className="text-gray-600 font-bold w-32 flex-shrink-0">Speciality:</span>
                  <span className="text-gray-600 flex-grow">{item.specialization}</span>
                </div>
                <div className="flex flex-row mb-2">
                  <span className="text-gray-600 font-bold w-32 flex-shrink-0">Experience:</span>
                  <span className="text-gray-600 flex-grow">{item.description}</span>
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
          ) : (
            <p>No doctor information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LUBookingsDoctorsView;
