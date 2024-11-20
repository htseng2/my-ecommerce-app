import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to My E-Commerce Store</h1>
        <p>Your one-stop shop for all your needs</p>
      </header>
      <section className="hero">
        <img src="https://mock.shop/assets/hero-image.jpg" alt="Hero" />
        <h2>Discover Amazing Products</h2>
        <p>Explore our wide range of products and find what you love.</p>
      </section>
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="https://mock.shop/assets/product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$29.99</p>
          </div>
          <div className="product-item">
            <img src="https://mock.shop/assets/product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$39.99</p>
          </div>
          <div className="product-item">
            <img src="https://mock.shop/assets/product3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$49.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
