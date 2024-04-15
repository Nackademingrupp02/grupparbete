import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/Homepage/HomePage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import useProductFetcher from "./Components/ProductFilter";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [filterButton, setFilterButton] = useState("Alla");
  const filterProducts = useProductFetcher(filterButton);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://grupparbete.onrender.com/category/all"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };
    fetchCategories();
  }, []);

  function filterHandler(string) {
    setFilterButton(string);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage {...{ filterHandler, categories, filterProducts }} />
          }
        />
        <Route
          path={"/adminpage"}
          element={<AdminPage {...{ categories }} />}
        />
        <Route
          path="/kategori/:category"
          element={
            <HomePage {...{ filterHandler, categories, filterProducts }} />
          }
        />
        <Route
          path="/produkter/alla"
          element={
            <HomePage
              filterProducts={filterProducts}
              categories={categories}
              filterHandler={() => filterHandler("Alla")}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
