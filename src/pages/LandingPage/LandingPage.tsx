import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./LandingPage.scss";
import Footer from "../../components/footer/Footer";
import { FaRobot } from "react-icons/fa"; // Font Awesome bot icon

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white -mt-20">
        <div className="text-center mt-10">
          <h1 className="text-[20px] text-[#855CDD] font-normal leading-[25px]">
            Streamline Your Health with Careflow
          </h1>
          <h2 className="text-[60px] text-black font-bold leading-[66px] mt-4">
            Expert Doctor Appointments <br /> at your Fingertips
          </h2>
        </div>
        <div className="mt-10 relative w-full max-w-[731px] flex items-center justify-center">
          <input
            type="text"
            placeholder="Ask Cura about your symptoms"
            className="w-full h-[93px] rounded-full bg-white shadow-lg pl-10 pr-20 text-[20px] text-gray-500 font-normal leading-[25px] placeholder-gray-400 focus:outline-none"
          />
          <div className="absolute right-5 inset-y-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#855CDD] rounded-full flex items-center justify-center">
              <FaRobot className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[15px] text-[#855CDD] font-normal leading-[14px] text-center">
            Cura is an AI Bot powered by Medical Data. It can provide incorrect
            information sometimes.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <img
          src="/images/locations/DoctorLP.png"
          alt="Doctor"
          className="w-full"
        />
        <div className="absolute top-24 left-24">
          <h1 className="text-[60px] text-white font-bold leading-[66px]">
            Book your Doctor’s <br /> Appointment
          </h1>
          <div className="mt-10 bg-white w-[565px] shadow-lg p-6 rounded-lg">
            <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search by Doctor name"
                  className="w-full border-b border-[#9D7CE5] focus:outline-none text-[20px] font-light pb-2 bg-transparent border-none"
                  />
              </div>
              <div className="mb-4">
              <select
                id="speciality"
                className="w-full border-b border-[#9D7CE5] focus:outline-none text-[20px] font-light pb-2 bg-transparent border-none"
              >
                <option value="" disabled selected hidden>
                  Search by Speciality
                </option>
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
                <input
                  type="date"
                  placeholder="Search by Date"
                  id="date"
                  className="w-full border-b border-[#9D7CE5] focus:outline-none text-[20px] font-light pb-2 bg-transparent border-none"
                  />
              </div>
              <div className="flex justify-start mt-6">
                <button className="w-[221px] h-[53px] bg-[#855CDD] text-white rounded-[11px] flex justify-center items-center">
                  Search Doctor
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-white">
        <div className="text-center mt-10">
          <h1 className="text-[20px] text-[#855CDD] font-normal leading-[25px]">
             What is Careflow?
          </h1>
          <h2 className="text-[60px] text-black font-bold leading-[66px] mt-2">
            How to use&nbsp;<span style={{ color: '#5F2BCF' }}>CareFlow</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center mt-5">
          {[
            { src: "/images/locations/1.png", number: "1", text: "Find Doctors" },
            { src: "/images/locations/2.png", number: "2", text: "Manage your Appointments" },
            { src: "/images/locations/3.png", number: "3", text: "Medical History" },
            { src: "/images/locations/1.png", number: "4", text: "Patient Queue" },
            { src: "/images/locations/2.png", number: "5", text: "Ask AI chatBot" },
            { src: "/images/locations/3.png", number: "6", text: "Find Doctors" },
          ].map((item, index) => (
            <div key={index} className="relative m-2">
              <img src={item.src} alt={item.text} className="w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
                <h1 className="text-[#855CDD] text-[60px] font-bold">{item.number}</h1>
                <h2 className="text-[#424242] text-[30px] font-bold">{item.text}</h2>
              </div>
            </div>
          ))}
        </div>
    </div>

      <div className="relative w-full">
        <img
          src="/images/locations/PRec.png"
          alt="Rectangle"
          className="w-full"
        />
        <div className="absolute top-24 left-24">
          <h1 className="text-[60px] text-white font-bold leading-[66px]">
            Top Specialists
          </h1>
        </div>
        <div className="flex justify-center items-center mt-10">
          {[
            {
              src: "/images/locations/Doc1.png",
              title: "Channel a Physician",
              description: "A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means.",
              buttonText: "Channel",
            },
            // Repeat for the remaining cards as needed
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-4 p-6 rounded-lg bg-white shadow-lg"
              style={{
                borderRadius: '16px',
                background: '#FFF',
                boxShadow: '0px 0px 15px 0px rgba(151, 71, 255, 0.13)',
              }}
            >
              <img src={item.src} alt={item.title} className="w-full h-auto rounded-lg" />
              <h1 className="text-black text-center text-[20px] font-semibold leading-[25px] mt-4">
                {item.title}
              </h1>
              <p className="text-gray-500 text-center text-[16px] font-normal leading-[25px] mt-2">
                {item.description}
              </p>
              <button
                className="mt-4 w-[101px] h-[43px] flex justify-center items-center text-white rounded-[9px]"
                style={{
                  background: '#855CDD',
                }}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h2 className="text-[60px] text-black font-bold leading-[16px] mt-4">
            Save time,&nbsp;<span style={{ color: '#5F2BCF' }}>Save money</span>
          </h2>
          <h1 className="text-[20px] text-[#855CDD] font-normal leading-[25px]">
            Sign up and we'll send best deals to you
          </h1>
        </div>
        <div className="mt-10 relative w-full max-w-[731px] flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-[60px] rounded-[11px] bg-white border border-[#5F2BCF] shadow-lg pl-5 pr-20 text-[20px] text-gray-500 font-normal leading-[25px] placeholder-gray-400 focus:outline-none"
          />
          <button className="absolute right-0 mr-2 w-[150px] h-[53px] bg-[#855CDD] text-white rounded-[11px] flex justify-center items-center">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
