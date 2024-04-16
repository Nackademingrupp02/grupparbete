import React, { useState, useEffect } from 'react'
import HeaderAdmin from './HeaderAdmin.jsx'
import Header from '../Homepage/Header.jsx'
import Main from './MainAdmin.jsx'
import axios from 'axios'

const baseURL = "https://grupparbete.onrender.com"

const AdminPage = ({ categories }) => {

  const [products, setProducts] = useState([])
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleAddProduct = async (e) => {
    console.log(addProduct);
    alert(`${addProduct.name} added.`)
    try {
      const response = await axios.post(baseURL + "/product/add",
        JSON.stringify(addProduct),
        { headers: { "Content-type": "application/json" } }
      )
      if (response.status === 201) {
        console.log("Product added.");
      }
    }
    catch (err) {
      console.log("Error handling form: ");
      console.error(err.message);
    }

  }


  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://grupparbete.onrender.com/product/all");
      const json = await response.json();
      setProducts(json);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <HeaderAdmin {...{ addProduct, setAddProduct, handleAddProduct }} />
      <Main {...{ products, categories }} />
    </>
  )
}

export default AdminPage