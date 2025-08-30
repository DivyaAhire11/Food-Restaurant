import React from "react";
import "./card.css";

const ProductCard = ({ img, name, buttonText, onClick, children }) => {
  return (
    <div className="menu-card" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <img src={img} alt={name} className="menu-img" />
      <h3 className="menu-name">{name}</h3>
      {children} {/* Render description or any extra content */}
      {buttonText && <button className="menu-btn">{buttonText}</button>}
    </div>
  );
};

export default ProductCard;
