import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  const { id } = useParams();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="main">
      <div className="logo">
        <h2>
          Feed Hope
        </h2>
      </div>
      <div className={showMenu ? "nav-items mobile-menu-link" : "nav-items"}>
        <ul>
          <li>
            <Link
              style={{
                fontSize: "1.5rem",
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                fontSize: "1.5rem",
              }}
              to="/aboutus"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              style={{
                fontSize: "1.5rem",
              }}
              to="/work"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              style={{
                fontSize: "1.5rem",
              }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-login">
        {
          // if token is present then show logout button else show login and signup button
          token ? (
            <Link className="link" to="/dashboard">
              <button className="btn-nav">Dashboard</button>
            </Link>
          ) : (
            <div className="l-btn">
              <Link className="link" to="/login">
                <button className="btn-nav">Login</button>
              </Link>
              <Link className="link" to="/signup">
                <button className="btn-nav">Signup</button>
              </Link>
            </div>
          )
        }
        <div className="hamburger-menu">
          <a href="#" onClick={handleClick}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
