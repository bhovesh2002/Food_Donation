import React from "react";
import "./AboutUs.css";
import Footer from "../components/Footer/Footer";

const AboutUs = () => {
  return (
    <div>
        <div className="aboutus-container">
        <h1>About Us</h1>
        <p>
            Welcome to our Food Donation Camp, "Nourishing Neighbors". We are
            dedicated to connecting those who have surplus food with those in need.
            Our mission is to reduce food waste and provide meals to the
            underprivileged in our community.
        </p>
        <h2>Our Mission</h2>
        <p>
            Our mission is to ensure that no food goes to waste and no person goes
            hungry. We believe in the power of community and the importance of
            sharing resources.
        </p>
        <h2>Our Team</h2>
        <p>
            Our team is comprised of dedicated volunteers who are passionate about
            making a difference. From organizing food drives to distributing meals,
            each member of our team plays a vital role in our operations.
        </p>
        <h2>Contact Us</h2>
        <p>
            If you would like to get involved or have any questions, feel free to
            contact us at <a href="mailto:info@nourishingneighbors.com">info@nourishingneighbors.com</a>.
        </p>
        </div>
        <Footer />
    </div>
  );
};

export default AboutUs;
