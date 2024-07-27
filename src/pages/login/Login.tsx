import axios from "axios";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import jwt_decode from "jwt-decode";

interface Credentials {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
      const res = await axios.post("http://localhost:8080/sign-in", null, {
        headers: {
          'Authorization': `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`
        }
      });

      console.log("Response", res);
      console.log("Token", res.data.access_token);
      setCookie('JWT', "Bearer " + res.data.access_token, res.data.access_token_expiry);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      if (res.data.user_role === "ROLE_MANAGER") {
        navigate("/");
      } else if (res.data.res.user_role === 2) {
        navigate("/adminhome");
      }
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
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
          Already have an account?{" "}
          <span className="text-purple-600 cursor-pointer">Login to your account</span>
        </p>
      </div>

      {/* Right Half with Form Fields */}
      <div className="w-3/5 p-8 flex flex-col justify-center mx-auto ml-24">
        <h1 className="text-black text-left text-3xl font-semibold mb-6">Login</h1>
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
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-lg shadow-md"
            value={credentials.password}
          />
        </div>
        <button
          disabled={loading}
          onClick={handleClick}
          className="bg-purple-600 text-white px-4 py-2 mt-8 rounded-lg w-4/5"
        >
          Login
        </button>
        {error && <span className="text-red-500 mt-8">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
