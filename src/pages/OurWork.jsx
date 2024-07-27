import React from "react";
import "./OurWork.css";
import Footer from "../components/Footer/Footer";

const OurWork = () => {
  return (
    <div>
        <div className="ourwork-container">
        <h1>Our Work</h1>
        <p>
            At "Nourishing Neighbors", we are committed to making a difference in our community. 
            Here are some of the initiatives and activities we have undertaken.
        </p>
        <div className="work-gallery">
            <div className="work-item">
            <img src="https://pragateefoundation.org/wp-content/uploads/2022/02/FotoJet-1.jpg" alt="Food Donation Drive" />
            <h2>Food Donation Drive</h2>
            <p>We organize food donation drives to collect surplus food from local businesses and individuals.</p>
            </div>
            <div className="work-item">
            <img src="https://bl-i.thgim.com/public/news/national/k0yolz/article31309813.ece/alternates/FREE_1200/kerala" alt="Community Kitchen" />
            <h2>Community Kitchen</h2>
            <p>Our community kitchen prepares meals from donated food to serve those in need.</p>
            </div>
            <div className="work-item">
            <img src="https://ajmalfoundation.com/wp-content/uploads/2018/07/IMG-20170722-WA0026-min-1.jpg" alt="Food Distribution" />
            <h2>Food Distribution</h2>
            <p>We distribute meals and food supplies to various shelters and community centers.</p>
            </div>
            <div className="work-item">
            <img src="https://image.volunteerworld.com/876d56779b8554de71f8913ed065cbdc06da8d64/asia-2.jpg?auto=format&crop=faces&fit=crop&h=317&w=562" alt="Volunteer Events" />
            <h2>Volunteer Events</h2>
            <p>Our volunteers participate in various events to help raise awareness and support our mission.</p>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default OurWork;
