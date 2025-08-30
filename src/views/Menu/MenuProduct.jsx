import React, { useState } from "react";
import Btn from "../../Components/Button/Btn.jsx";
import "./menu.css";
import SearchBar from "../../Components/SearchBar/search.jsx";
import ProductCard from "../../Components/Productcard/Card.jsx";

const MenuProduct = () => {
  const [searchInput, setSearchInput] = useState("");

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      alert("You searched for: " + searchInput);
    }
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">🍽️ Our Menu</h2>

      {/* Search Bar */}
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <ProductCard img={product.img} name={product.name} buttonText="Order Now" />

      {showCategories && !selectedCategory && !loading && (
        <CategoryGrid
          categories={categories}
          onCategoryClick={fetchCategoryMeals}
        />
      )}

      {selectedCategory && !loading && (
        <MealGrid
          meals={categoryMeals}
          categoryName={selectedCategory}
          onBackClick={() => setSelectedCategory(null)}
        />
      )}




    </div>
  );
};

export default MenuProduct;
