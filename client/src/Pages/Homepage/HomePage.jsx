import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import useProductFetcher from "../../Components/ProductFilter";
import { useNavigate, useParams } from "react-router-dom";

const HomePage = ({ categories }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { category } = params;
  const [filterButton, setFilterButton] = useState("Alla");
  const [products, setProducts] = useState([]);

  const { products: filteredProducts } = useProductFetcher(
    filterButton,
    categories
  );

  useEffect(() => {
    setFilterButton(category || "Alla");
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [filterButton]);

  async function fetchData() {
    try {
      const url = category
        ? `https://grupparbete.onrender.com/product/category/${category}`
        : "https://grupparbete.onrender.com/category/all";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
      setProducts([]);
    }
  }

  function filterHandler(string) {
    setFilterButton(string);
    if (string === "Alla") {
      navigate("/produkter/alla");
    } else {
      navigate(`/kategori/${string.toLowerCase()}`);
    }
  }

  return (
    <>
      <Header />
      <div className="category-buttons">
        <button onClick={() => filterHandler("Alla")}>Alla Produkter</button>
        {categories.map((category, index) => (
          <button key={index} onClick={() => filterHandler(category.name)}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </button>
        ))}
      </div>
      <Main products={filteredProducts} />
      <Footer />
    </>
  );
};

export default HomePage;
