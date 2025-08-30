import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx"; // Reuse ProductCard
import Btn from "../Button/Btn.jsx";

const MealGrid = ({ meals, categoryName, onBackClick }) => {
  return (
    <div>
      <h3 className="menu-subtitle">🍴 {categoryName} Dishes</h3>
      <div className="menu-grid">
        {meals.map((meal) => (
          <ProductCard
            key={meal.id}
            img={meal.img}
            name={meal.name}
            buttonText="Order Now"
          />
        ))}
      </div>

<Btn info="⬅ Back to Categories" onClick={onBackClick} className="menu-back-btn" />


      {/* <button className="menu-btn back-btn" onClick={onBackClick}>
        
      </button> */}
    </div>
  );
};

export default MealGrid;
