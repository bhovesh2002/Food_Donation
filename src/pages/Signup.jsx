import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hardcodedUser = {
      name: "Ankit Tanwar",
      email: "abc@abc.com",
      password: "12345",
      number: "1234567890",
    };

    if (
      formData.name === hardcodedUser.name &&
      formData.email === hardcodedUser.email &&
      formData.password === hardcodedUser.password &&
      formData.number === hardcodedUser.number
    ) {
      console.log("User authenticated");
      navigate("/"); // redirect to home page
    } else {
      console.error("Authentication failed");
    }
  };

  return (
    <div className="signup_container">
      <div className="signup_main-img"></div>

      <div className="signup_wrapper">
        <form>
          <h1>Sign-Up</h1>
          <p>Create your free account on Food-donation</p>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            id="name"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            id="email"
          />
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            id="password"
          />
          <input
            type="phone"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            id="phone"
          />

          <button type="submit" id="signup-btn" onClick={handleSubmit}>
            Sign Up
          </button>

          <div className="login">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
