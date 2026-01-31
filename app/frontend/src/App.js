import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [perfumes, setPerfumes] = useState([]);
  const [cart, setCart] = useState([]);

  // Load perfumes from Backend API
  useEffect(() => {
    // In Production, this URL will come from an Environment Variable
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8081/api/perfumes";
    axios.get(API_URL)
      .then(response => setPerfumes(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (perfume) => {
    setCart([...cart, perfume]);
    alert(`Added ${perfume.name} to Cart!`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">✨ Scent-Luxe Store</h1>
      <div className="text-end mb-3">
        <button className="btn btn-dark">🛒 Cart ({cart.length})</button>
      </div>

      <div className="row">
        {perfumes.map(perfume => (
          <div className="col-md-4 mb-4" key={perfume.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{perfume.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{perfume.brand}</h6>
                <p className="card-text">Notes: {perfume.scentNotes}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5">${perfume.price}</span>
                  <button onClick={() => addToCart(perfume)} className="btn btn-outline-dark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;