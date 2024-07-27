import React from "react";

import ImgDisplay from "../components/ImgDisplay/ImgDisplay";
import AboutUs from "../components/About Us/AboutUs";
import Goals from "../components/Goals/Goals";
import Footer from "../components/Footer/Footer";
import Contribute from "../components/Contribute/Contribute";

const Home = () => {
  return (
    <div>
      <ImgDisplay />
      <AboutUs />
      <Goals />
      <Contribute />
      <Footer />
    </div>
  );
};

export default Home;
