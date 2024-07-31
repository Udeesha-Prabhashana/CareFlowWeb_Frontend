import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../components/images/logo.png";

const Navbar: React.FC = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ textDecoration: "none" }} >
                    <img src={logo} alt="CareFlow Logo" className="logo" />
                </Link>
                {user ? (
                    <div className="navButtons">
                        <button className="navButton" onClick={() => navigate("/login")}>Logout</button>
                    </div>
                ) : (
                    <div className="navButtons">
                        <button className="navButton filledButton" onClick={() => navigate("/login")}>Login</button>
                        <button className="navButton outlinedButton" onClick={() => navigate("/register")}>Signup</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
