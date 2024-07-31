import axios from "axios";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import { toast } from "react-toastify";

interface Credentials {
  userName: string;
  userPassword: string;
  userEmail: string;
  name: string;
  userMobileNo: string;
  userRole: string;
}

const Register = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    userName: "",
    userPassword: "",
    userEmail: "",
    name: "",
    userMobileNo: "",
    userRole: "ROLE_USER",
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
      const res = await axios.post<{ res: any }>("http://localhost:8080/sign-up", credentials);
      console.log("Response:", res.data.res);
      toast.success("You were added successfully!");
      navigate("/login");
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data });
      // Extract the error message from the response
    const errorMessage = err.response?.data?.error || "An unexpected error occurred";
    toast.error(errorMessage);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Half with Form Fields */}
      <div className="w-3/5 p-8 flex flex-col justify-center mx-auto ml-[150px]">
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
            className="w-[350px] h-[30px] px-4 py-2 border border-gray-300 rounded-lg shadow-md"
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
            id="userName"
            type="text"
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-[350px] h-[30px] px-4 py-2 border border-gray-300 rounded-lg shadow-md"
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
            id="userPassword"
            type="password"
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-[350px] h-[30px] px-4 py-2 border border-gray-300 rounded-lg shadow-md"
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
            id="userEmail"
            type="email"
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-[350px] h-[30px] px-4 py-2 border border-gray-300 rounded-lg shadow-md"
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
            id="userMobileNo"
            type="tel"
            onChange={handleChange}
            placeholder="+94 -  XXX XXX XX"
            className="w-[350px] h-[30px] px-4 py-2 border border-gray-300 rounded-lg shadow-md"
          />
        </div>
        <button
          disabled={loading}
          onClick={handleClick}
          className="bg-violet-600 text-white px-4 py-2 mt-8 rounded-lg w-[380px]"
        >
          Register
        </button>
        {error && <span className="text-red-500 mt-8">{error.message}</span>}
      </div>

      {/* Right Section with Background Image */}
      <div
        className="w-[1000px] flex flex-col items-center p-8"
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
          {/*<span className="text-purple-600 cursor-pointer">Login to your account</span>*/}
          <Link to="/login" className="text-violet-600 cursor-pointer">Login to your account</Link>

        </p>
      </div>
    </div>
  );
};

export default Register;
