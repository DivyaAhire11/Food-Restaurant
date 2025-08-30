import React from "react";
import ProductCard from "../ProductCard/ProductCard.js"; // Reuse ProductCard for layout

const CategoryGrid = ({ categories, onCategoryClick }) => {
  return (
    <div className="menu-grid">
      {categories.map((cat) => (
        <ProductCard
          key={cat.id}
          img={cat.img}
          name={cat.name}
          buttonText={null} // Categories don't need "Order Now"
          onClick={() => onCategoryClick(cat.name)}
        >
          <p className="menu-desc">{cat.description.substring(0, 60)}...</p>
        </ProductCard>
      ))}
    </div>
  );
};

export default CategoryGrid;
