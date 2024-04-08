import React from 'react'
import { useState } from 'react'
import Modal from './Modal.jsx'

const AddProduct = () => {

  const [addProduct, setAddProduct] = useState(false);

  return (
    <>
      <button onClick={() => {
        setAddProduct(!addProduct)
      }}>Add product</button>
      {addProduct && <Modal {...{setAddProduct}}/>}
    </>
  )
}

export default AddProduct