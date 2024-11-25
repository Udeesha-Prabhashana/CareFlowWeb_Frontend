import axios from "axios";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "./register.css";

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
  const [otp, setOtp] = useState<string>("");
  const [showOtpModal, setShowOtpModal] = useState<boolean>(false);
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleRegister = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<{ res: any }>("http://localhost:8080/sign-up", credentials);
      console.log("Response:", res.data.res);
      toast.success("Registration successful! Please verify OTP.");
      setShowOtpModal(true); // Show OTP modal after registration success
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data });
      const errorMessage = err.response?.data?.error || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  const handleVerifyOtp = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // Send OTP and mobile number to the server for verification
      const res = await axios.post("http://localhost:8080/verify-otp", {
        mobileNumber: credentials.userMobileNo,
        otp: otp,
      });

      // Check if the response is successful based on the response data
      if (res.status === 200 && res.data.includes("OTP verified successfully")) {
        toast.success("OTP verified successfully!");
        navigate("/login"); // Redirect to login after successful OTP verification
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (err: any) {
      toast.error("Error verifying OTP. Please try again later.");
    }
  };

  // Resend OTP function
  const handleResendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:8080/resend-otp2", {
        mobileNumber: credentials.userMobileNo,
      });
      if (res.status === 200 && res.data.includes("OTP resent successfully")) {
        toast.success("OTP resent successfully!");
      } else {
        toast.error("Error resending OTP. Please try again later.");
      }
    } catch (err: any) {
      toast.error("Error resending OTP. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Half with Form Fields */}
      <div className="w-3/5 p-8 flex flex-col justify-center mx-auto ml-[150px]">
        <h1 className="text-black text-left text-3xl font-semibold mb-6">Register</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2">
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
          <label htmlFor="username" className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2">
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
          <label htmlFor="password" className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2">
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
          <label htmlFor="email" className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2">
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
          <label htmlFor="contact_no" className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2">
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
          onClick={handleRegister}
          className="bg-violet-600 text-white px-4 py-2 rounded-lg w-[380px] border rounded-lg mb-4"
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
        <img src="/images/locations/Logo.png" alt="Logo" className="h-20 mt-8 mb-4 object-contain" />
        <p className="text-center text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-600 cursor-pointer">
            Login to your account
          </Link>
        </p>
      </div>

      {/* OTP Modal Popup */}
      {showOtpModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
            <p className="mb-4">Please enter the OTP sent to your phone/email.</p>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              className="w-[365px] h-[30px] px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={handleVerifyOtp}
              className="bg-violet-600 text-white px-4 py-2 rounded-lg w-full"
            >
              Verify OTP
            </button>
            <button
              onClick={handleResendOtp}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 w-full"
            >
              Resend OTP
            </button>
            <button
              onClick={() => setShowOtpModal(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
