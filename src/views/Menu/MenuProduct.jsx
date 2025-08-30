import React, { useState, useEffect } from "react";
import axios from "axios";
import "./menu.css";
import Btn from "../../Components/Button/Btn.jsx" 

const MenuProduct = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("pizza");
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState(null);
 



  // Fetch products from Spoonacular API
  useEffect(() => {
    const fetchProducts = async () => {
      if (!query || showCategories) return;
      setLoading(true);
      try {
        const result = await axios.get(
          "https://api.spoonacular.com/food/products/search",
          {
            params: {
              query,
              number: 8,
              apiKey: import.meta.env.VITE_SPOON_KEY,
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

  // Fetch categories from TheMealDB

    const fetchCategories = async () => {
      setLoading(true);
      setSelectedCategory(null);
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        const mealDBCategories = response.data.categories.map((cat) => ({
          id: cat.idCategory,
          name: cat.strCategory,
          img: cat.strCategoryThumb,
          description: cat.strCategoryDescription,
          source: "themealdb",
        }));

        setCategories(mealDBCategories);
        setShowCategories(true);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }

    };
   




  return (
    <>
      <div className="MenuItem">
        <div className="menu-container">
          <h2 className="menu-title">🍽️ Our Menu</h2>

                
      {/* See More Button */}
      <Btn info="🍛 See Restaurant Categories" onClick={fetchCategories} />

           </div>
      </div>

    </>

  )
}



export default MenuProduct;
