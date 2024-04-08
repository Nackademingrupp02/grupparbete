import React from 'react'
import { useState } from 'react'

const AddProduct = () => {

  const [addProduct, setAddProduct] = useState(false);

  return (
    <>
      <button onClick={() => {
        setAddProduct(!addProduct)
      }}>Add product</button>
      {addProduct && ( <div className="modal">
        <div className='overlay'>
          <div className='modal-content'>
            <h3>Add product</h3>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="name" />
            <label htmlFor="">Category</label>
            <input type="text" name="" id="category" />
            <label htmlFor="">Price</label>
            <input type="text" name="" id="price" />
            <button onClick={() => {
              setAddProduct(!addProduct)
            }}>Close</button>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default AddProduct