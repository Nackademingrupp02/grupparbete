import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryOption from './CategoryOption';
const baseURL = "https://grupparbete.onrender.com"

const Modal = ({ setAddProductBtn, categoryList }) => {

  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleAddProduct = async (e) => {
    e.preventDefault(); console.log(addProduct);

    try {
      const response = await axios.post(baseURL + "/product/add",
        JSON.stringify(addProduct),
        { headers: { "Content-type": "application/json" } }
      )
      if(response.status === 201){
        console.log("Product added.");
      }
    }
    catch (err) {
      console.log("Error handling form: ");
      console.error(err.message);
    }
  }

  //useEffect för att undvika problemet med att addProduct.category är tom sträng om man inte ändrar på dropdown fönstret
  useEffect(() => {
    if (!addProduct.category && categoryList) {
      setAddProduct({ ...addProduct, category: categoryList[0]._id })
    }
  }, [])

  return (
    <>
      <div className="modal">
        <div className='overlay'>
          <div className='modal-content'>
            <h3>Add product</h3>
            <form onSubmit={handleAddProduct}>
              <div className='addProductInputs'>
                <label htmlFor="addProductName">Name</label>
                <input type="text" id="addProductName" value={addProduct.value} onChange={(e) => {
                  setAddProduct({ ...addProduct, name: e.target.value })
                }} />
                Category
                <select id='selectedCategory' value={addProduct.category} onChange={(e) => {
                  setAddProduct({ ...addProduct, category: e.target.value });
                }}>
                  {categoryList && categoryList.map((category, index) => {
                    return (
                      <CategoryOption key={index} {...{ category }} />
                    )
                  })}
                </select>
                <label htmlFor="addProductPrice">Price</label>
                <input type="number" id="addProductPrice" value={addProduct.price} onChange={(e) => {
                  setAddProduct({ ...addProduct, price: e.target.value })
                }} />
              </div>
              <button type='submit'>
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