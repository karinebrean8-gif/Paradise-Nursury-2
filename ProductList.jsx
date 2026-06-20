
/**
 * 🌿 Paradise Nursery App - ProductsList.jsx
 * Ultra-large enterprise-grade product listing module
 * Built with 45+ years horticulture + nursery commerce experience (simulation design)
 */

import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductsList.css";

// =========================================
// 🌱 MASTER DATA (45+ YEARS NURSERY KNOWLEDGE)
// =========================================

const nurseryCatalog = {
  categories: [
    "All",
    "Indoor Plants",
    "Outdoor Plants",
    "Medicinal Plants",
    "Flowering Plants",
    "Fruit Plants",
    "Air Purifying Plants",
    "Rare Exotic Plants"
  ],

  plants: [
    {
      id: 1,
      name: "Aloe Vera",
      category: "Medicinal Plants",
      price: 10,
      rating: 4.8,
      stock: 120,
      sunlight: "Low",
      water: "Low",
      description: "Healing plant with medicinal benefits"
    },
    {
      id: 2,
      name: "Snake Plant",
      category: "Indoor Plants",
      price: 15,
      rating: 4.9,
      stock: 80,
      sunlight: "Low",
      water: "Very Low",
      description: "Best air purifier for indoor spaces"
    },
    {
      id: 3,
      name: "Rose",
      category: "Flowering Plants",
      price: 8,
      rating: 4.7,
      stock: 200,
      sunlight: "High",
      water: "Medium",
      description: "Symbol of love and beauty"
    },
    {
      id: 4,
      name: "Neem Tree",
      category: "Medicinal Plants",
      price: 25,
      rating: 4.9,
      stock: 60,
      sunlight: "High",
      water: "Low",
      description: "Natural pesticide and medicinal tree"
    },
    {
      id: 5,
      name: "Money Plant",
      category: "Indoor Plants",
      price: 12,
      rating: 4.6,
      stock: 150,
      sunlight: "Low",
      water: "Medium",
      description: "Brings prosperity and positive energy"
    },
    {
      id: 6,
      name: "Mango Tree",
      category: "Fruit Plants",
      price: 30,
      rating: 5.0,
      stock: 40,
      sunlight: "High",
      water: "Medium",
      description: "King of fruits tree"
    },
    {
      id: 7,
      name: "Lavender",
      category: "Flowering Plants",
      price: 18,
      rating: 4.8,
      stock: 90,
      sunlight: "High",
      water: "Low",
      description: "Calming fragrance plant"
    },
    {
      id: 8,
      name: "Bamboo Palm",
      category: "Air Purifying Plants",
      price: 22,
      rating: 4.7,
      stock: 70,
      sunlight: "Medium",
      water: "Medium",
      description: "Natural air purifier and humidity controller"
    }
  ]
};

// =========================================
// 🧠 MAIN COMPONENT
// =========================================

const ProductsList = () => {
  const dispatch = useDispatch();

  // =========================================
  // 📊 LOCAL STATE MANAGEMENT
  // =========================================
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("default");
  const [viewMode, setViewMode] = useState("grid");

  // =========================================
  // 🌿 FILTERED PRODUCTS (MEMOIZED)
  // =========================================

  const filteredProducts = useMemo(() => {
    let products = nurseryCatalog.plants;

    // 🔍 CATEGORY FILTER
    if (selectedCategory !== "All") {
      products = products.filter(
        (p) => p.category === selectedCategory
      );
    }

    // 🔎 SEARCH FILTER
    if (searchQuery.trim()) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 🔃 SORTING LOGIC
    if (sortType === "price_low_high") {
      products = [...products].sort((a, b) => a.price - b.price);
    } else if (sortType === "price_high_low") {
      products = [...products].sort((a, b) => b.price - a.price);
    } else if (sortType === "rating") {
      products = [...products].sort((a, b) => b.rating - a.rating);
    }

    return products;
  }, [selectedCategory, searchQuery, sortType]);

  // =========================================
  // 🛒 ADD TO CART ACTION
  // =========================================
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // =========================================
  // 🌱 UI RENDER
  // =========================================

  return (
    <div className="products-container">

      {/* ===================================
          🌿 HEADER
      =================================== */}
      <header className="products-header">
        <h1>🌿 Paradise Nursery Products</h1>
        <p>45+ Years of Plant Expertise in Every Leaf</p>
      </header>

      {/* ===================================
          🔍 SEARCH + FILTER PANEL
      =================================== */}
      <section className="filter-panel">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search plants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* CATEGORY FILTER */}
        <div className="categories">
          {nurseryCatalog.categories.map((cat, index) => (
            <button
              key={index}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SORT OPTIONS */}
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="default">Default</option>
          <option value="price_low_high">Price Low → High</option>
          <option value="price_high_low">Price High → Low</option>
          <option value="rating">Top Rated</option>
        </select>

        {/* VIEW MODE */}
        <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
          Toggle View
        </button>

      </section>

      {/* ===================================
          🌱 PRODUCT GRID / LIST
      =================================== */}
      <section className={viewMode === "grid" ? "grid-view" : "list-view"}>

        {filteredProducts.map((plant) => (
          <div key={plant.id} className="product-card">

            <div className="product-info">
              <h2>{plant.name}</h2>
              <p>{plant.description}</p>

              <div className="meta">
                <span>🌿 Category: {plant.category}</span>
                <span>⭐ Rating: {plant.rating}</span>
                <span>💧 Water: {plant.water}</span>
                <span>☀️ Sunlight: {plant.sunlight}</span>
                <span>📦 Stock: {plant.stock}</span>
              </div>

              <h3 className="price">💰 ${plant.price}</h3>

              <button
                className="add-btn"
                onClick={() => handleAddToCart(plant)}
              >
                ➕ Add to Cart
              </button>
            </div>

          </div>
        ))}

      </section>

      {/* ===================================
          📊 FOOTER INFO
      =================================== */}
      <footer className="products-footer">
        <p>
          🌿 Carefully curated by 45+ years of nursery mastery |
          Paradise Nursery App
        </p>
      </footer>

    </div>
  );
};

export default ProductsList;