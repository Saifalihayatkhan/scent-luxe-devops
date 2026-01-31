import React, { useState } from 'react';
import './App.css';

function App() {
  // MANUAL DATA: Guaranteed to display immediately
  const [perfumes] = useState([
    {
      id: 1,
      name: "Sauvage Elixir",
      brand: "DIOR",
      price: 160.00,
      description: "A concentrated fragrance steeped in the emblematic freshness of Sauvage."
    },
    {
      id: 2,
      name: "Bleu de Chanel",
      brand: "CHANEL",
      price: 145.00,
      description: "A woody, aromatic fragrance for the man who defies convention."
    },
    {
      id: 3,
      name: "Aventus",
      brand: "CREED",
      price: 365.00,
      description: "The exceptional Aventus was inspired by the dramatic life of a historic emperor."
    },
    {
      id: 4,
      name: "Black Orchid",
      brand: "TOM FORD",
      price: 195.00,
      description: "A luxurious and sensual fragrance of rich, dark accords and black orchids."
    }
  ]);

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">SCENT<span className="gold">LUXE</span></div>
        <div className="nav-links">
          <a href="#home">Collections</a>
          <a href="#about">Our Story</a>
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
            {perfumes.map((perfume) => (
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
            ))}
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