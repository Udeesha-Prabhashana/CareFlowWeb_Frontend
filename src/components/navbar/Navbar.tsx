import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar: React.FC = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Neotropolice</span>
                </Link>
                {user ? (
                    <div className="newTtem">
                        <button className="navButton" onClick={() => navigate("/login")}>Logout</button>
                    </div>
                ) : (
                    <div className="newTtem">
                        <button className="navButton" onClick={() => navigate("/register")}>Register</button>
                        <button className="navButton" onClick={() => navigate("/login")}>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
