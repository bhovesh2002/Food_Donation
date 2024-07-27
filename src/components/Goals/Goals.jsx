import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../UI/Card";
import "./Goals.css";

const Goals = () => {
  const data = [
    {
      id: 1,
      name: "Goal 1: Reduce Hunger",
      img: "https://data.unicef.org/wp-content/uploads/2022/10/Child-food-poverty-hero-image-scaled.jpg",
      description:
        "Our primary goal is to reduce hunger in our communities by providing nutritious meals to those in need. We aim to serve thousands of meals every month through our food donation drives.",
    },
    {
      id: 2,
      name: "Goal 2: Promote Health",
      img: "https://childrenincorporated.org/wp-content/uploads/2018/05/DSCF7873-2-1024x683.jpeg",
      description:
        "We focus on promoting health and wellness by offering fresh and healthy food options. Our programs are designed to ensure that everyone has access to nutritious food, which is vital for maintaining good health.",
    },
    {
      id: 3,
      name: "Goal 3: Community Engagement",
      img: "https://twofacesofms.com/wp-content/uploads/2020/06/community.jpg",
      description:
        "Engaging the community in our mission is key to our success. We encourage local businesses and individuals to participate in our food donation events, fostering a sense of community and shared responsibility.",
    },
  ];

  return (
    <div className="partner-page">
      <div className="title">
        <h1>Our Goals</h1>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
        showArrows={true}
      >
        {data.map((goal) => (
          <Card
            key={goal.id}
            name={goal.name}
            des={goal.description}
            img={goal.img}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Goals;
