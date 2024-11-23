import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Input } from "../../formSource";
import SidebarAdm from "../../components/sidebarAdm/SidebarAdm";
import { toast } from "react-toastify";
import SidebarAdmin from "../../components/sidebarAdmin/sidebarAdmin";
import {useNavigate} from "react-router-dom";

interface NewProps {
  inputs: Input[];
  title: string;
}

const New: React.FC<NewProps> = ({ inputs, title }) => {
  const [file, setFile] = useState<File | null>(null);
  const [info, setInfo] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = new FormData();
    if (file) {
      data.append("file", file);
    }
    data.append("upload_preset", "upload");
    
    try {
      // Retrieve token from local storage
      const user = localStorage.getItem("user");
      let token = null;
      if (user) {
        try {
          const parsedUser = JSON.parse(user);
          token = parsedUser.access_token;
        } catch (err) {
          console.error("Failed to parse user from local storage", err);
        }
      }

      // Create headers with authorization if token is available
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      // Optional: If you need to upload a file, uncomment this section
      // const uploadRes = await axios.post(
      //   "https://api.cloudinary.com/v1_1/dromuhnud/image/upload",
      //   data
      // );
      // const { url } = uploadRes.data;

      const newUser = {
        ...info,
        userPassword: "12345",
        userRole: "ROLE_DOCTOR",
      };

      console.log("AAA", newUser);

      await axios.post("http://localhost:8080/sign-up", newUser);
      // Show success toast
    toast.success("Doctor added successfully!");
      navigate("/adminhome/Doctors");
  } catch (err: any) {
    // Log the error to the console
    console.error(err);

    // Extract the error message from the response
    const errorMessage = err.response?.data?.error || "An unexpected error occurred";

    // Show error toast with the extracted message
    toast.error(errorMessage);
  }
  };

  console.log(info);
  return (
    <div className="newD">
      <SidebarAdmin />
      <div className="newContainerD">
        <div className="topD">
          <h1>{title}</h1>
        </div>
        <div className="bottomD">
          {/* <div className="leftD">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="rightD">
            <form>
              {/* <div className="formInputD">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="iconD" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                  style={{ display: "none" }}
                />
              </div> */}

              {inputs.map((input) => (
                <div className="formInputD" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id ? String(input.id) : undefined} // Ensure id is string or undefined
                  />
                </div>
              ))}
            </form>
            <button className="buttonD" onClick={handleClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
