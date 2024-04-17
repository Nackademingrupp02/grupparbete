import React from 'react'
import { useState, useEffect } from 'react'
import ModalAdmin from './ModalAdmin.jsx'
import { Button } from 'react-bootstrap'

const AddProduct = ({addProduct, setAddProduct, handleAddProduct}) => {

  const [addProductBtn, setAddProductBtn] = useState(false);
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://grupparbete.onrender.com/category/all");
      const json = await response.json();
      setCategoryList(json)
    }
    getData();
  }, [])

  return (
    <>
      <Button variant='danger' className='addProductBtn' onClick={() => {
        setAddProductBtn(!addProductBtn)
      }}>Addera produkt</Button>
      {addProductBtn && <ModalAdmin {...{setAddProductBtn, categoryList, addProduct, setAddProduct, handleAddProduct}}/>}
    </>
  )
}

export default AddProduct