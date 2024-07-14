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

// interface JwtPayload {
//   user_role: Number;
//   [key: string]: any;
// }

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

      // const decodedToken: JwtPayload = jwt_decode(token);
      // const userRole = decodedToken.user_role;

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
    <div className="login">
      <div className="lContainer">
        <h3 className='header'>LOG IN</h3>
        <span>USERNAME</span>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
          value={credentials.username}
        />
        <span>PASSWORD</span>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
          value={credentials.password}
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
