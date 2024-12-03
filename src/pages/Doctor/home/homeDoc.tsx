import React, { useEffect, useState } from "react";
import WidgetDoc from "../../../components/widgetDoc/widgetDoc";
import SidebarDoc from "../../../../src/components/sidebarDoctor/sidebarDoc";
import axios from "axios";
import { toast } from "react-toastify";
import "./homeDoc.scss";

const HomeDoc: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    mobileNumber: "",
    photoUrl: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch user profile data
   useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = localStorage.getItem("user");
        let token = null;
        if (user) {
        const parsedUser = JSON.parse(user);
        token = parsedUser.access_token;

        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/getUserById`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // Ensure this is set
            },
          }
        );

        setFormData(response.data); // Populate form with existing data
        setLoading(false);
       } else {
                    toast.error("Field Authentication");
                }
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile data.</div>;
  }

  return (
    <div className="sideDoc">
      <SidebarDoc />
      <div className="navDoc">
        <div className="bodyContainerDocHome">
          <div className="mainTopicDocHome">
            Good Morning, <span className="purpleTextDoc">Dr. {formData.name}</span>
          </div>
          <div className="subTopicDocHome">
            Welcome to your Dashboard
          </div>
          <div className="widgetsDoc">
            <WidgetDoc type="ong_appointments" />
            <WidgetDoc type="upcom_appointments" />
            <WidgetDoc type="miss_appointments" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDoc;