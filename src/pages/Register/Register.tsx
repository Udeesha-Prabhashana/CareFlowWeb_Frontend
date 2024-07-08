import axios from "axios";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

interface Credentials {
  username: string;
  password: string;
  email: string;
  name: string;
  contact_no: string;
}

const Register = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
    email: "",
    name: "",
    contact_no: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<{ res: any }>("http://127.0.0.1:5000/addCustomer", credentials);
      console.log("Response:", res.data.res);
      navigate("/login");
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h3 className="header">REGISTER</h3>
        <span>USERNAME</span>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <span>PASSWORD</span>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <span>EMAIL</span>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <span>NAME</span>
        <input
          type="text"
          placeholder="Enter name"
          id="name"
          onChange={handleChange}
          className="lInput"
        />
        <span>CONTACT NUMBER</span>
        <input
          type="tel"
          placeholder="Enter contact number"
          id="contact_no"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
