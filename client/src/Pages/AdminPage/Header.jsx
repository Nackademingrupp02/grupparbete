import React from 'react'
import AddProduct from './AddProduct.jsx'

const Header = () => {
  return (
    <>
      <div className='navHeader'>
        <h2>Admin Page</h2>
        <AddProduct />
      </div>
    </>
  )
}

export default Header