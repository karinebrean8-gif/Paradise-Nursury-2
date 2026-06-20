
/**
 * 🌿 Paradise Nursery App - App.jsx
 * Built with 45+ years of horticulture-inspired enterprise architecture
 * Giant scalable React root component (routing + layout + dashboard style)
 */

import React, { useState } from "react";
import "./App.css";

// ===============================
// 🌱 MOCK DATA (45+ Years Legacy)
// ===============================

const nurseryData = {
  name: "Paradise Nursery",
  experience: "45+ Years of Excellence",
  tagline: "Where Nature Meets Expertise",

  categories: [
    "Indoor Plants",
    "Outdoor Plants",
    "Medicinal Plants",
    "Air Purifying Plants",
    "Flowering Plants",
    "Fruit Plants"
  ],

  plants: [
    { id: 1, name: "Aloe Vera", category: "Medicinal Plants", price: 10 },
    { id: 2, name: "Snake Plant", category: "Indoor Plants", price: 15 },
    { id: 3, name: "Rose", category: "Flowering Plants", price: 8 },
    { id: 4, name: "Neem Tree", category: "Medicinal Plants", price: 20 },
    { id: 5, name: "Money Plant", category: "Indoor Plants", price: 12 },
    { id: 6, name: "Mango Tree", category: "Fruit Plants", price: 25 }
  ],

  stats: {
    plantsGrown: "1,000,000+",
    customers: "250,000+",
    experience: "45+ Years",
    countries: "15+"
  }
};

// ===============================
// 🧠 MAIN APP COMPONENT
// ===============================

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // ===============================
  // 🌿 FILTER PLANTS
  // ===============================
  const filteredPlants =
    selectedCategory === "All"
      ? nurseryData.plants
      : nurseryData.plants.filter(
        (plant) => plant.category === selectedCategory
      );

  // ===============================
  // 🛒 ADD TO CART
  // ===============================
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // ===============================
  // ❌ REMOVE FROM CART
  // ===============================
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ===============================
  // 💰 TOTAL PRICE CALCULATION
  // ===============================
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-container">

      {/* ===================================
          🌿 HEADER SECTION
      =================================== */}
      <header className="header">
        <h1>🌿 {nurseryData.name}</h1>
        <p>{nurseryData.tagline}</p>
        <span>{nurseryData.experience}</span>
      </header>

      {/* ===================================
          📊 STATS DASHBOARD
      =================================== */}
      <section className="stats">
        <div>🌱 Plants: {nurseryData.stats.plantsGrown}</div>
        <div>👨‍🌾 Customers: {nurseryData.stats.customers}</div>
        <div>🌍 Countries: {nurseryData.stats.countries}</div>
        <div>⏳ Experience: {nurseryData.stats.experience}</div>
      </section>

      {/* ===================================
          🌿 CATEGORY FILTER
      =================================== */}
      <section className="categories">
        <button onClick={() => setSelectedCategory("All")}>All</button>

        {nurseryData.categories.map((cat, index) => (
          <button key={index} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </section>

      {/* ===================================
          🌱 PLANT LIST SECTION
      =================================== */}
      <section className="plant-list">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <h3>{plant.name}</h3>
            <p>{plant.category}</p>
            <p>💰 ${plant.price}</p>

            <button onClick={() => addToCart(plant)}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* ===================================
          🛒 CART SECTION
      =================================== */}
      <aside className="cart">
        <h2>🛒 Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty 🌿</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))
        )}

        <h3>Total: ${totalPrice}</h3>
      </aside>

      {/* ===================================
          🌼 FOOTER
      =================================== */}
      <footer className="footer">
        <p>
          🌿 Built with 45+ years of nursery expertise | Paradise Nursery App
        </p>
      </footer>

    </div>
  );
};

export default App;