import React, { useState, useEffect } from "react";
import axios from "axios";
import "./menu.css";

const MenuProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("pizza"); // default search
  const [searchInput, setSearchInput] = useState("");

  // Fetch products from Spoonacular API
  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const result = await axios.get(
          "https://api.spoonacular.com/food/products/search",
          {
            params: {
              query,
              number: 8,
              apiKey: import.meta.env.VITE_SPOON_KEY, // your env key
            },
          }
        );

        const spoonacularProducts = result.data.products.map((item) => ({
          id: item.id,
          name: item.title,
          img: item.image,
          source: "spoonacular",
        }));

        setProducts(spoonacularProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      setQuery(searchInput.trim());
    }
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">🍽️ Our Menu</h2>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="menu-search">
        <input
          type="text"
          placeholder="Search food (e.g. burger, pasta)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading */}
      {loading && <div className="menu-loading">Loading products...</div>}

      {/* Product Grid */}
      {!loading && products.length > 0 && (
        <div className="menu-grid">
          {products.map((product) => (
            <div key={product.id} className="menu-card">
              <img
                src={product.img}
                alt={product.name}
                className="menu-img"
              />
              <h3 className="menu-name">{product.name}</h3>
              <button className="menu-btn">Order Now</button>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && products.length === 0 && (
        <p className="menu-empty">No products found. Try another search!</p>
      )}
    </div>
  );
};

export default MenuProduct;
