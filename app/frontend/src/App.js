import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [perfumes, setPerfumes] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || "/api/perfumes";

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPerfumes(data))
      .catch(err => console.error("Error loading products:", err));
  }, [API_URL]);

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">SCENT<span className="gold">LUXE</span></div>
        <div className="nav-links">
          <a href="#home">Collections</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
          <button className="cart-btn">Cart (0)</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Find Your Signature Scent</h1>
          <p>Experience the essence of luxury with our exclusive collection.</p>
          <button className="shop-now-btn">Shop Collection</button>
        </div>
      </header>

      {/* Product Grid */}
      <section className="products-section">
        <h2>Exclusive Arrivals</h2>
        <div className="product-grid">
          {perfumes.length === 0 ? (
            <p className="loading">Loading Exquisite Scents...</p>
          ) : (
            perfumes.map((perfume) => (
              <div key={perfume.id} className="product-card">
                <div className="image-placeholder"></div>
                <div className="card-details">
                  <span className="brand">{perfume.brand}</span>
                  <h3>{perfume.name}</h3>
                  <p className="description">{perfume.description}</p>
                  <div className="price-row">
                    <span className="price">${perfume.price}</span>
                    <button className="add-btn">Add to Bag</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 ScentLuxe. Redefining Elegance.</p>
      </footer>
    </div>
  );
}

export default App;