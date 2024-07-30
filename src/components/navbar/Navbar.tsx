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
                {/* <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <img className="logo" src={logo} alt="CareFlow Logo">Care Flow</img>
                </Link> */}
                <Link to="/" style={{ textDecoration: "none" }} >
                    <img src={logo} alt="CareFlow Logo" className="logo" />
                </Link>
                    {user ? (
                        <div className="newItem">
                            <button className="navButton" onClick={() => navigate("/login")}>Logout</button>
                        </div>
                    ) : (
                        <div className="newItem">
                            <button className="navButton" onClick={() => navigate("/register")}>Register</button>
                            <button className="navButton" onClick={() => navigate("/login")}>Login</button>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Navbar;
