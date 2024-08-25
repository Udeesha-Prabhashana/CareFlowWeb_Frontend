import React, { useContext, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRobot } from "react-icons/fa6";
import "./header.css";

interface HeaderProps {
  type: string;
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const { user } = useContext(AuthContext);
  const [doctorName, setDoctorName] = useState<string>("");
  const [specialization, setSpecialization] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date()); // Handle single date
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
    dispatch({ type: "NEW_SEARCH", payload: { doctor: doctorName, specialization, date: selectedDate, options } });
    navigate("/doctorlistNlu", { state: { doctorName, date: selectedDate, options } });
  };

  const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSpecialization(e.target.value);
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        {type !== "list" && (
          <>
            <div className="flex flex-col items-center justify-center min-h-screen mt-2 relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/locations/Pattern.png')" }}></div>
              <div className="relative text-center mt-10 z-10">
                <h1 className="text-[20px] text-[#855CDD] font-normal leading-[25px]">Streamline Your Health with Careflow</h1>
                <h2 className="text-[60px] text-black font-bold leading-[66px] mt-4">Expert Doctor Appointments <br /> at your Fingertips</h2>
              </div>
              <div className="relative mt-10 w-full max-w-[740px] flex items-center justify-center z-10">
                <input
                  type="text"
                  placeholder="Ask Cura about your symptoms"
                  className="w-full h-[60px] rounded-full bg-white shadow-lg pl-10 pr-20 text-[20px] text-gray-500 font-normal leading-[25px] placeholder-gray-400 focus:outline-none"
                />
                <div className="absolute right-5 inset-y-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#855CDD] rounded-full flex items-center justify-center">
                    <FaRobot className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="relative mt-4 z-10">
                <p className="text-[15px] text-[#855CDD] font-normal leading-[14px] text-center">
                  Cura is an AI Bot powered by Medical Data. It can provide incorrect information sometimes.
                </p>
              </div>
            </div>

            <div className="relative w-full -mt-10">
              <img src="/images/locations/DoctorLP.png" alt="Doctor" className="w-full" />
              <div className="absolute top-24 left-24">
                <h1 className="text-[60px] text-white font-bold leading-[66px]">Book your Doctor’s <br /> Appointment</h1>
                <div className="mt-10 bg-white w-[565px] shadow-lg p-6 rounded-lg">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Search by Doctor name"
                      className="w-full border-b border-[#9D7CE5] focus:outline-none text-[20px] font-light pb-2 bg-transparent border-none"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      id="speciality"
                      className="w-full border-b border-[#9D7CE5] focus:outline-none text-[20px] font-light pb-2 bg-transparent border-none"
                      value={specialization}
                      onChange={handleSpecializationChange}
                    >
                      <option value="" disabled hidden>Select Specialization</option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Physician">Physician</option>
                      <option value="Gastroenterologist">Gastroenterologist</option>
                      <option value="Cardiologist">Cardiologist</option>
                      <option value="Dermatologist">Dermatologist</option>
                      <option value="Pediatrician">Pediatrician</option>
                      <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                      <option value="Ophthalmologist">Ophthalmologist</option>
                      <option value="ENT Specialist">ENT Specialist</option>
                      <option value="General Surgeon">General Surgeon</option>
                      <option value="Urologist">Urologist</option>
                      <option value="Oncologist">Oncologist</option>
                      <option value="Psychiatrist">Psychiatrist</option>
                      <option value="Dentist">Dentist</option>
                      <option value="Endocrinologist">Endocrinologist</option>
                      <option value="Nephrologist">Nephrologist</option>
                      <option value="Pulmonologist">Pulmonologist</option>
                      <option value="Rheumatologist">Rheumatologist</option>
                      <option value="Infectious Disease Specialist">Infectious Disease Specialist</option>
                      <option value="Hematologist">Hematologist</option>
                      <option value="Allergist">Allergist</option>
                      <option value="Anesthesiologist">Anesthesiologist</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: Date | null) => setSelectedDate(date ?? undefined)}
                      dateFormat="MM/dd/yyyy"
                      className="w-full border-b border-[#9D7CE5] focus:outline-none text-[20px] font-light pb-2 bg-transparent border-none"
                      minDate={new Date()}
                    />
                  </div>
                  <div className="flex justify-start mt-6">
                    <button
                      className="w-[221px] h-[53px] bg-[#855CDD] text-white rounded-[11px] flex justify-center items-center"
                      onClick={handleSearch}
                    >
                      Search Doctor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
