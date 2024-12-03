import React, { useEffect, useState } from "react";
import "./widgetDoc.scss";

import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from "axios";
import { toast } from "react-toastify";

type WidgetProps = {
  type: "ong_appointments" | "upcom_appointments" | "miss_appointments";
};

const WidgetDoc: React.FC<WidgetProps> = ({ type }) => {
  const [count, setCount] = useState<number>(0);

  const getAppointmentData = async () => {
    try {
      const user = localStorage.getItem("user");
      let token = null;

      if (user) {
        const parsedUser = JSON.parse(user);
        token = parsedUser.access_token;

        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/get_appointments/${type}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCount(response.data.count);
      } else {
        toast.error("Field Authentication");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    getAppointmentData();
  }, [type]);

  let data: {
    title: string;
    icon: JSX.Element;
  };

  switch (type) {
    case "ong_appointments":
      data = {
        title: "Ongoing Appointments",
        icon: <MedicalServicesOutlinedIcon style={{ color: "black" }} />,
      };
      break;
    case "upcom_appointments":
      data = {
        title: "Upcoming Appointments",
        icon: <RestoreOutlinedIcon style={{ color: "black" }} />,
      };
      break;
    case "miss_appointments":
      data = {
        title: "Missed Appointments",
        icon: <CancelOutlinedIcon style={{ color: "black" }} />,
      };
      break;
    default:
      throw new Error("Invalid type");
  }

  return (
    <div className="widgetDoc">
      <div className="left">
        <span className="title"> {data.title.split(" ")[0]} </span>
        <span className="title"> {data.title.split(" ")[1]} </span>
        {data.icon}
      </div>
      <div className="right">
        <div className="counter">{count}</div>
      </div>
    </div>
  );
};

export default WidgetDoc;
