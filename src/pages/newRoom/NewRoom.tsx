import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, ChangeEvent, FormEvent } from "react";
import useFetch from "../../hooks/useFetch";
import axios, { AxiosError } from "axios"; // Import AxiosError for type safety
import { useNavigate } from "react-router-dom";
import { Input } from "../../formSource";

interface Hotel {
  hotel_id: string;
  name: string;
}

interface NewRoomProps {
  inputs: Input[];
  title: string;
}

const NewRoom: React.FC<NewRoomProps> = ({ inputs, title }) => {
  const [info, setInfo] = useState<Record<string, string>>({});
  const [hotelId, setHotelId] = useState<string | undefined>(undefined);
  const [rooms, setRooms] = useState<string[]>([]);
  const navigate = useNavigate();

  const { data, loading, error } = useFetch<Hotel[]>("/hotels");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const dataToSend = {
      hotel_id: hotelId,
      ...info,
      rooms: rooms.join(", "), // Join rooms array into a comma-separated string
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/addroom", dataToSend);
      console.log('Response:', response.data);
      navigate("/rooms"); // Redirect to '/rooms' after successful room addition
    } catch (err: any) {
      // Handle error response or message
      if (axios.isAxiosError(err)) {
        console.error('Error:', err.response?.data ?? err.message);
      } else {
        console.error('Unknown Error:', err);
      }
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    id={String(input.id)} // Ensure id is string
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value.split(",").map(room => room.trim()))}
                  placeholder="Enter room numbers, separated by commas"
                />
              </div>
              <div className="formInput">
                <label>Choose a hotel</label>
                <select id="hotelId" onChange={(e) => setHotelId(e.target.value)}>
                  {loading ? (
                    <option>Loading...</option>
                  ) : data && (
                    data.map((hotel) => (
                      <option key={hotel.hotel_id} value={hotel.hotel_id}>
                        {hotel.name}
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

export default NewRoom;
