import React, { useState } from "react";
import "./ContactUs.css";
import Footer from "../components/Footer/Footer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for contacting us! We shall contact you soon!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
        
        <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or would like to get involved, please reach out to us. We shall contact you asap.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div className="form-element">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="form-element">
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            </div>
            <button className="contact-button" type="submit">Submit</button>
        </form>
        </div>
        <Footer />
    </div>
  );
};

export default ContactUs;
