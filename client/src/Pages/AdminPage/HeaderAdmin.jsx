import React from 'react'
import AddProduct from './AddProduct.jsx'
import { Link } from 'react-router-dom';


const HeaderAdmin = ({ addProduct, setAddProduct, handleAddProduct }) => {
  return (
    <>
      <div className='navHeader'>
        <h2>Admin Page</h2>
        <Link to="/adminpage/orders">Orders</Link>
        <AddProduct {...{ addProduct, setAddProduct, handleAddProduct }} />
      </div>
    </>
  )
}

export default HeaderAdmin