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
    <div className="flex h-screen">
      {/* Left Half with Form Fields */}
      <div className="w-3/5 p-8 flex flex-col justify-center mx-auto ml-24">
      <h1 className="text-black text-left text-3xl font-semibold mb-6">Register</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-lg shadow-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-lg shadow-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-lg shadow-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-lg shadow-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contact_no"
            className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2"
          >
            Phone Number
          </label>
          <input
            id="contact_no"
            type="tel"
            onChange={handleChange}
            placeholder="+94 -  XXX XXX XX"
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-lg shadow-md"
          />
        </div>
        <button
          disabled={loading}
          onClick={handleClick}
          className="bg-purple-600 text-white px-4 py-2 mt-8 rounded-lg w-4/5"
        >
          Register
        </button>
        {error && <span className="text-red-500 mt-8">{error.message}</span>}
      </div>

      {/* Right Section with Background Image */}
      <div
        className="w-2/5 flex flex-col items-center p-8"
        style={{
          backgroundImage: 'url(/images/locations/reg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="/images/locations/Logo.png"
          alt="Logo"
          className="h-20 mt-8 mb-4 object-contain"
        />
        <p className="text-center text-gray-700">
          Already have an account?{" "}
          <span className="text-purple-600 cursor-pointer">Login to your account</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
