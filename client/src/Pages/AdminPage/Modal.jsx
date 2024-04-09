import React, { useState } from 'react'

const Modal = ({ setAddProductBtn }) => {

  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();

  }

  return (
    <>
      <div className="modal">
        <div className='overlay'>
          <div className='modal-content'>
            <h3>Add product</h3>
            <form action="">
              <div className='addProductInputs'>
                <label htmlFor="addProductName">Name</label>
                <input type="text" id="addProductName" />
                <label htmlFor="addProductCategory">Category</label>
                <input type="text" id="addProductCategory" />
                <label htmlFor="addProductPrice">Price</label>
                <input type="text" id="addProductPrice" />
              </div>
              <button onSubmit={handleAddProduct}>
                Add product
              </button>
              <button onClick={() => {
                setAddProductBtn(false)
              }}>Close</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal