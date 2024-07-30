import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturesProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";
import "./home1.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget_L from "../../components/widget_L/Widget_L";
const Home: React.FC = () => {
  useEffect(() => {
    // Create script elements
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/ca64de85-f6f8-4c02-9bde-a7f2e687335c/webchat/v2/config.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  
  return (
    <div>
      <Navbar />
      <Header type="no-list" />
      <div className="flex flex-col min-h-screen bg-white">
        <div className="text-center mt-10">
          <h1 className="text-[20px] text-[#855CDD] font-normal leading-[25px]">
            What is Careflow?
          </h1>
          <h2 className="text-[60px] text-black font-bold leading-[66px] mt-1">
            How to use&nbsp;<span style={{ color: "#5F2BCF" }}>CareFlow</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          {[
            {
              src: "/images/locations/1.png",
              number: "1",
              text: "Find your",
              subtext: "Doctors",
            },
            {
              src: "/images/locations/2.png",
              number: "2",
              text: "Manage your",
              subtext: "Appointments",
            },
            {
              src: "/images/locations/3.png",
              number: "3",
              text: "View Medical",
              subtext: "History",
            },
            {
              src: "/images/locations/1.png",
              number: "4",
              text: "Patient",
              subtext: "Queue",
            },
            {
              src: "/images/locations/2.png",
              number: "5",
              text: "Ask AI",
              subtext: "ChatBot",
            },
            {
              src: "/images/locations/3.png",
              number: "6",
              text: "Find Doctors",
              subtext: "Appointments",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.src}
                alt={item.text}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start pl-4">
                <h1 className="text-[#855CDD] text-[60px] font-bold mb-1 ml-14">
                  {item.number}
                </h1>
                <h2 className="text-[#424242] text-[30px] font-bold -mb-5 ml-14">
                  {item.text}
                </h2>
                <h2 className="text-[#424242] text-[30px] font-bold ml-14">
                  {item.subtext}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <img
          src="/images/locations/PRec.png"
          alt="Rectangle"
          className="w-full"
        />
        <div className="absolute top-10 left-24">
          <h1 className="text-[60px] text-white font-bold leading-[50px] text-left">
            Top Specialists
          </h1>
        </div>
        <div className="absolute top-40 flex justify-center items-start mt-10 space-x-10">
          {[
            {
              src: "/images/locations/Doc1.png",
              title: "Channel a Physician",
              description:
                "A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means.",
              buttonText: "Channel",
            },
            {
              src: "/images/locations/Doc3.png",
              title: "Channel a Gynecologist",
              description:
                "A gynecologist specializes in women's reproductive systems and health, and care of conditions related to the uterus, ovaries, fallopian tubes, and breasts.",
              buttonText: "Channel",
            },
            {
              src: "/images/locations/Doc2.png",
              title: "Channel a Cardiologist",
              description:
                "A Cardiologist is a Medical Doctor who specializes in the diagnosis and treatment of heart conditions.",
              buttonText: "Channel",
            },
            {
              src: "/images/locations/Doc4.png",
              title: "Channel a Pediatrician",
              description:
                "A Pediatrician specializes in the health and medical care of infants, children, and adolescents.",
              buttonText: "Channel",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg shadow-lg"
              style={{
                width: "288px",
                height: "550px",
                borderRadius: "16px",
                background: "#FFF",
                boxShadow: "0px 0px 15px 0px rgba(151, 71, 255, 0.13)",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto rounded-lg"
              />
              <h1 className="text-black text-center text-[20px] font-semibold leading-[25px] mt-4">
                {item.title}
              </h1>
              <p className="text-[#737373] text-center text-[16px] font-normal leading-[25px] mt-2">
                {item.description}
              </p>
              <button
                className="mt-4 w-[101px] h-[43px] flex justify-center items-center text-white rounded-[9px]"
                style={{
                  background: "#855CDD",
                }}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center bg-white mt-20">
        <div className="text-center">
          <h2 className="text-[60px] text-black font-bold leading-[30px] mt-4">
            Save time,&nbsp;<span style={{ color: "#5F2BCF" }}>Save money</span>
          </h2>
          <h1 className="text-[20px] text-[#855CDD] font-normal leading-[20px]">
            Sign up and we'll send best deals to you
          </h1>
        </div>
        <div className="mt-10 relative w-full max-w-[731px] flex items-center justify-center mb-5">
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
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
