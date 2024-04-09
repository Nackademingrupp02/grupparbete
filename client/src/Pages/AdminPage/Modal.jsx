import React from 'react'

const Modal = ({setAddProduct}) => {
  return (
    <>
        <div className="modal">
        <div className='overlay'>
          <div className='modal-content'>
            <h3>Add product</h3>
            <div className='addProductInputs'>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="name" />
            <label htmlFor="">Category</label>
            <input type="text" name="" id="category" />
            <label htmlFor="">Price</label>
            <input type="text" name="" id="price" />
            </div>
            <button onClick={() => {
              setAddProduct(false)
            }}>Close</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal