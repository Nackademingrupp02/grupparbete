import React from 'react'
import AddProduct from './AddProduct.jsx'


const HeaderAdmin = ({ addProduct, setAddProduct, handleAddProduct }) => {
  return (
    <>
      <div className='navHeader'>
        <h2>Admin Page</h2>
        <AddProduct {...{ addProduct, setAddProduct, handleAddProduct }} />

      </div>
    </>
  )
}

export default HeaderAdmin