import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import "./Food.css";

const Food = () => {
  const [food, setFood] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const fetchFoodItems = () => {
    // Hardcoded food items data
    const foodData = [
      {
        _id: 1,
        foodName: "Rice",
        foodTag: "veg",
        quantity: 10,
        expiryDate: "2024-08-01",
        address: "Kailashpuri",
        imageUrl: "https://mlnf6rdzbkm2.i.optimole.com/w:1619/h:1080/q:mauto/f:best/https://www.formhealth.co/blog/wp-content/uploads/2023/04/iStock-153737841-scaled.jpg", // Add the image URL here
      },
      {
        _id: 2,
        foodName: "Eggs",
        foodTag: "nonveg",
        quantity: 5,
        expiryDate: "2024-07-28",
        address: "Raj Nagar",
        imageUrl: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg", // Add the image URL here
      },
      {
        _id: 3,
        foodName: "Apples",
        foodTag: "veg",
        quantity: 8,
        expiryDate: "2024-07-30",
        address: "Dwarka",
        imageUrl: "https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_1", // Add the image URL here
      },
    ];
    setFood(foodData);
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const filteredFood =
    selectedTag === "all"
      ? food
      : food.filter((item) => item.foodTag === selectedTag);

  return (
    <div className="food">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1 style={{ color: "white" }}>Food Available</h1>
        <div
          className="tags"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <label style={{ color: "white"}} htmlFor="tags">Filter by tag:</label>
          <select
            id="tags"
            name="tags"
            value={selectedTag}
            onChange={handleTagChange}
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
            }}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}
      >
        {filteredFood.map((item) => (
          <FoodCard
            key={item._id}
            name={item.foodName}
            quantity={item.quantity}
            date={item.expiryDate}
            address={item.address}
            tag={item.foodTag}
            imageUrl={item.imageUrl} // Pass the imageUrl prop
          />
        ))}

      </div>
    </div>
  );
};

export default Food;
