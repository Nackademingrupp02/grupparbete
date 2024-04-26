import React, { useState, useEffect } from 'react'
import HeaderAdmin from './HeaderAdmin.jsx'
import Header from '../Homepage/Header.jsx'
import MainAdmin from './MainAdmin.jsx'
import axios from 'axios'

const baseURL = "https://grupparbete.onrender.com"

const AdminPage = ({ categories }) => {

  const [products, setProducts] = useState([])
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    packageSize: "",
    comparePrice: "",
    brand: "",
    description: "",
    ingredients: "",
    picture: "",
    category: "",
  });

  const handleAddProduct = async (e) => {
    console.log(addProduct);
    try {
      if (
        !addProduct.name ||
        !addProduct.price ||
        !addProduct.packageSize ||
        !addProduct.comparePrice ||
        !addProduct.brand
      ) {
        alert('Vänligen fyll i nödvändiga alla fält');
        return;
      }
      const response = await axios.post(baseURL + "/product/add",
        JSON.stringify(addProduct),
        { headers: { "Content-type": "application/json" } }
      )
      if (response.status === 201) {
        console.log("Product added.");
        
        alert(`${addProduct.name} added.`)
        
        window.location.reload();
      }
    }
    catch (err) {
      console.log("Error handling form: ");
      console.error(err.message);
    }

  }


  useEffect(() => {
    const getData = async () => {
      try{
        const response = await axios.get("https://grupparbete.onrender.com/product/all");
        setProducts(response.data);
      }
      catch(err){
        console.error("Error in fetching data: ", err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <HeaderAdmin isProductPage={true} {...{ addProduct, setAddProduct, handleAddProduct }} />
      <MainAdmin {...{ products, categories }} />
    </>
  )
}

export default AdminPage