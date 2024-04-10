import React, { useState } from 'react'
import axios from 'axios'
const baseURL = "https://grupparbete.onrender.com"

const ProductAdmin = ({ product, categories }) => {

  const [isDeleted, setIsDeleted] = useState(false)

  const deleteProduct = async () => {
    try{
      const response = await axios.delete(baseURL + '/product/delete/' + product._id )
      if(response.data){
        console.log(`${product.name} deleted`);
      }
    }
    catch(err){
      console.log("Error deleting product");
      console.error(err.message);
    }
  }

  const getCategoryName = () => {
    const category = categories.find(cat => cat._id === product.category);
    return category ? category.name : 'Unknown';
  }

  return (
    <>
      <div className='adminProduct'>
        <div>
          <p>Produkt: {product.name}</p>
          <p>Kategori: {getCategoryName()}</p>
          <p>Pris: {product.price} kr</p>
        </div>
        <div>
          <button onClick={() => {
            deleteProduct()
            setIsDeleted(!isDeleted)
          }}>Delete</button>
          {isDeleted && <p style={{ color: 'green' }}>{product.name} has been deleted.</p>}
        </div>
      </div>
      <hr />
    </>
  )
}

export default ProductAdmin