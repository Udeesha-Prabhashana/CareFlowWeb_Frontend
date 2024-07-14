import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { Input } from "../../formSource";
import SidebarLu from "../../components/sidebarLu/SidebarLu";


interface Room {
  _id: string;
  title: string;
}

interface NewHotelProps {
  inputs: Input[];
  title: string;
}

const NewHotel: React.FC<NewHotelProps> = ({ inputs, title }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [info, setInfo] = useState<Record<string, string>>({});
  const [rooms, setRooms] = useState<string[]>([]);

  const { data, loading, error } = useFetch<Room[]>("/rooms");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedRooms = Array.from(e.target.selectedOptions, (option) => option.value);
    setRooms(selectedRooms);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!files) {
      console.log("No files selected");
      return;
    }

    const data = new FormData();
    Array.from(files).forEach((file) => {
      data.append("files", file);
    });
    data.append("upload_preset", "upload");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dromuhnud/image/upload",
        data
      );

      const photoUrls = uploadRes.data.resources.map((resource: any) => resource.secure_url);

      const newHotel = {
        ...info,
        rooms,
        photos: photoUrls,
      };

      await axios.post("/hotels", newHotel);
      console.log("Hotel created successfully:", newHotel);
    } catch (err) {
      console.error("Error creating hotel:", err);
    }
  };

  return (
    <div className="new">
      <SidebarLu />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id ? String(input.id) : undefined} // Ensure id is string or undefined
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>

              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading ? (
                    <option>Loading...</option>
                  ) : error ? (
                    <option>Error loading rooms</option>
                  ) : (
                    data &&
                    data.map((room) => (
                      <option key={room._id} value={room._id}>
                        {room.title}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
