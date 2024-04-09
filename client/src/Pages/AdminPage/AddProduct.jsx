import React from 'react'
import { useState } from 'react'
import Modal from './Modal.jsx'

const AddProduct = () => {

  const [addProductBtn, setAddProductBtn] = useState(false);

  return (
    <>
      <button onClick={() => {
        setAddProductBtn(!addProductBtn)
      }}>Add product</button>
      {addProductBtn && <Modal {...{setAddProductBtn}}/>}
    </>
  )
}

export default AddProduct