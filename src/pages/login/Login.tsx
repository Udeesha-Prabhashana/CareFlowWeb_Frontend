import axios from "axios";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

import { toast } from "react-toastify";

interface Credentials {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const setCookie = (name: string, value: string, daysToExpire: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      console.log("Credentials", credentials);
      console.log(`Basic ${btoa(`${credentials.username}:${credentials.password}`)}`);
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, null, {
        headers: {
          'Authorization': `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`
        }
      });

      console.log("Response", res);
      console.log("Token", res.data.access_token);
      setCookie('JWT', "Bearer " + res.data.access_token, res.data.access_token_expiry);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      toast.success("Login successfully!");

      if (res.data.user_role === "ROLE_MANAGER") {
        navigate("/");
      } else if (res.data.user_role === "ROLE_ADMIN") {
        navigate("/adminhome");
      } else if (res.data.user_role === "ROLE_USER") {
        navigate("/userloginhome");
      }
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      toast.error("Login unsuccessfully!");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section with Background Image */}
      <div
        className="w-2/5 flex flex-col items-center p-8"
        style={{
          backgroundImage: 'url(/images/locations/Log.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="/images/locations/Logo.png"
          alt="Logo"
          className="h-20 mt-8 mb-4 object-contain mr-20"
        />
        <p className="text-center text-gray-700 mr-20">
          Don’t have an account ?{" "}
          <Link to="/register" className="text-violet-600 cursor-pointer">Register in to CareFlow</Link>
        </p>
      </div>

      {/* Right Half with Form Fields */}
      <div className="w-[550px] p-8 flex flex-col justify-center mx-auto ml-50 mr-20 mt-[0.1px]">
        <h1 className="text-black text-left text-3xl font-semibold mb-6">Login</h1>
        <div className="mb-8 mt-6">
          <label
            htmlFor="username"
            className="block text-left text-gray-700 text-lg font-roboto font-normal leading-6 mb-2"
          >
            Username/email
          </label>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            placeholder="Enter your username or email"
            className="w-[300px] h-[30px] px-4 py-2 border border-violet-500 rounded-lg shadow-md"
            value={credentials.username}
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
            className="w-[300px] h-[30px] px-4 py-2 border border-violet-500 rounded-lg shadow-md"
            value={credentials.password}
          />
        </div>
        <div className="mb-1 mt-3">
          <input
            id="rememberMe"
            type="checkbox"
            onChange={handleRememberMeChange}
            checked={rememberMe}
            className="mr-2"
          />
          <label
            htmlFor="rememberMe"
            className="text-left text-gray-500 text-lg font-roboto font-normal leading-6"
          >
            Remember Me
          </label>
        </div>
        <button
          disabled={loading}
          onClick={handleClick}
          className="bg-violet-600 text-white px-4 py-2 mt-8 rounded-lg w-[335px]"
        >
          Login
        </button>
        {error && <span className="text-red-500 mt-8">{error.message}</span>}
        <div className="mt-4">
          <span className="text-gray-600 cursor-pointer">Forgot password? </span>
          <span className="text-violet-600 cursor-pointer">Click here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
