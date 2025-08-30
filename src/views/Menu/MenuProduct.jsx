import React, { useState, useEffect } from "react";
import axios from "axios";
import Btn from "../../Components/Button/Btn.jsx";
import SearchBar from "../../Components/SearchBar/Search.jsx";
import ProductCard from "../../Components/ProductCard/Card.jsx";
import CategoryGrid from "../../Components/CategoryGrid/Grid.jsx";
import MealGrid from "../../Components/MealGrid/Meal.jsx";
import "./menu.css";

const MenuProduct = () => {
  // States
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("pizza"); // default search
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryMeals, setCategoryMeals] = useState([]);

  // Fetch default products from Spoonacular API
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
        }));

        setProducts(spoonacularProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query, showCategories]);

  // Fetch categories from MealDB
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
      }));
      setCategories(mealDBCategories);
      setShowCategories(true);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch meals in a category
  const fetchCategoryMeals = async (categoryName) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      const meals = response.data.meals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        img: meal.strMealThumb,
      }));
      setCategoryMeals(meals);
      setSelectedCategory(categoryName);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      setQuery(searchInput.trim());
      setShowCategories(false);
      setSelectedCategory(null);
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

      {/* See Categories Button */}
      <Btn info="🍛 See Restaurant Categories" onClick={fetchCategories} />

      {/* Loading */}
      {loading && <div className="menu-loading">Loading...</div>}

      {/* Categories Grid */}
      {showCategories && !selectedCategory && !loading && (
        <CategoryGrid
          categories={categories}
          onCategoryClick={fetchCategoryMeals}
        />
      )}

      {/* Meals in a selected category */}
      {selectedCategory && !loading && (
        <MealGrid
          meals={categoryMeals}
          categoryName={selectedCategory}
          onBackClick={() => setSelectedCategory(null)}
        />
      )}

      {/* Product Grid */}
      {!showCategories && !loading && products.length > 0 && (
        <div className="menu-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              buttonText="Order Now"
            />
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && !showCategories && products.length === 0 && (
        <p className="menu-empty">No products found. Try another search!</p>
      )}
    </div>
  );
};

export default MenuProduct;
