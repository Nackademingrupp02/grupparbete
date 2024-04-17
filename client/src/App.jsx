  import "./App.css";
  import React, { useState, useEffect } from "react";
  import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
  import axios from 'axios';
  import Header from "./Pages/Homepage/Header";
  import HomePage from "./Pages/Homepage/HomePage";
  import AdminPage from "./Pages/AdminPage/AdminPage";
  import LoginPage from "./Pages/AdminPage/LoginPage";
  import useProductFetcher from "./Components/ProductFilter";
  import Checkout from './Pages/CheckOutPage/CheckOutPage'

  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [categories, setCategories] = useState([]);
    const [filterButton, setFilterButton] = useState("Alla");
    const filterProducts = useProductFetcher(filterButton);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
      } else {
        setIsLoggedIn(false);
      }
    }, []);

    const handleLogin = async (credentials) => {
      try {
        const response = await axios.post('http://localhost:8080/adminpage/login', credentials);
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          setIsLoggedIn(true);
          navigate('/adminpage');
          return true;
        } else {
          console.error('Login failed', response.data.message);
          return false;
        }
      } catch (error) {
        console.error('Error logging in', error);
        return false;
      }
    };

    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/login');
    };

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch("https://grupparbete.onrender.com/category/all");
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
      <Header onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage {...{ filterHandler, categories, filterProducts }} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/adminpage" element={
  localStorage.getItem('token') ? (
    <AdminPage onLogout={handleLogout} {...{ categories }} />
  ) : (
    <Navigate to="/login" />
  )
} />
        <Route path="/kategori/:category" element={<HomePage {...{ filterHandler, categories, filterProducts }} />} />
        <Route path="/produkter/alla" element={<HomePage filterProducts={filterProducts} categories={categories} filterHandler={() => filterHandler("Alla")} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
    );
  }

  export default App;