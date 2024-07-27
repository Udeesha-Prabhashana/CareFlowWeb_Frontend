import React, { useState, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import NavbarLu from "../../../components/navbarA/NavbarA";
import SidebarRec from "../../../components/sidebarRec/SidebarRec";
import { SearchContext } from "../../../context/SearchContext";
import "./RBookingsPatients.scss";
import Button from "@mui/material/Button";

interface DateRangeType {
  startDate: Date;
  endDate: Date;
  key: string;
}

const RBookingsPatients: React.FC = () => {
  const [openDate, setOpenDate] = useState(false);
  const [patientName, setPatientName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [sex, setSex] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [dates, setDates] = useState<DateRangeType[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { patientName, age, sex, phoneNumber, dates },
    });
    navigate("/receptionist/bookings/addnewbooking/summary", {
      state: { patientName, age, sex, phoneNumber, dates },
    });
  };

  const handleDateChange = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setDates([selection as DateRangeType]);
  };

  return (
    <div className="rbookingpatients">
      <SidebarRec />
      <NavbarLu />
      <div className="homeContainer2lu">
        <div className="bodyContainerLu">
          <div className="mainTopic">Patient Details</div>
          <div className="subTopic">Fill in the details of the patient</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            marginLeft: "35px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="patientName"
              style={{ marginBottom: "5px", color: "#555" }}
            >
              Patient Name
            </label>
            <input
              id="patientName"
              type="text"
              placeholder="Enter Patient Name"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
              }}
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="age" style={{ marginBottom: "5px", color: "#555" }}>
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="Enter Age"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
              }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="sex" style={{ marginBottom: "5px", color: "#555" }}>
              Sex
            </label>
            <select
              id="sex"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
              }}
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="phoneNumber"
              style={{ marginBottom: "5px", color: "#555" }}
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Enter Phone Number"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
              }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-row space-x-4">
          <Button
            className="ml-14"
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#855CDD",
              marginTop: "8px",
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
            onClick={handleSearch}
          >
            Proceed
          </Button>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              border: "1px solid var(--normal-hover, #5F2BCF)",
              boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)",
              marginTop: "8px",
              color: "#855CDD",
              fontFamily: "Roboto",
              fontSize: "16px",
              width: "90px",
              height: "42px",
              borderRadius: "9px",
            }}
            onClick={() => {
              setPatientName("");
              setAge("");
              setSex("");
              setPhoneNumber("");
            }}
          >
            Clear
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RBookingsPatients;
