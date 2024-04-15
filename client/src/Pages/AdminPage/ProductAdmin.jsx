import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const baseURL = "https://grupparbete.onrender.com";

const ProductAdmin = ({ product, categories }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const editProduct = async () => {
    try {
      const response = await axios.put(baseURL + '/product/update/' + product._id, editedProduct);
      setIsEditing(false);
      window.location.reload();
      alert(`${product.name} was successfully updated`);

    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  const deleteProduct = async () => {
    try {
      const response = await axios.delete(baseURL + '/product/delete/' + product._id);
      if (response.data) {
        console.log(`${product.name} deleted`);
        setIsDeleted(true);
      }
      window.location.reload();
      alert(`${product.name} was successfully deleted`);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  const getCategoryName = () => {
    const category = categories.find(cat => cat._id === product.category);
    return category ? category.name : 'Unknown';
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            <p>{isEditing ? <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} /> : product.name}</p>
          </Card.Title>
          <Card.Text>
            <p>Kategori: {isEditing ? <select name="category" value={editedProduct.category} onChange={handleInputChange}>
              {categories.map(category => (
                <option key={category._id} value={category._id}>{category.name}</option>
              ))}
            </select> : getCategoryName()}</p>
            <p>Pris: {isEditing ? <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} /> : `${product.price} kr`}</p>
            <div>
              {isEditing ? (
                <button onClick={editProduct}>Spara</button>
              ) : (
                <button onClick={() => setIsEditing(true)}>Redigera</button>
              )}
              <button onClick={deleteProduct}>Delete</button>
              {isDeleted && <p style={{ color: 'green' }}>{product.name} has been deleted.</p>}
            </div>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* <div className='adminProduct'>
        <div>
          <p>Produkt: {isEditing ? <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} /> : product.name}</p>
          <p>Kategori: {isEditing ? <select name="category" value={editedProduct.category} onChange={handleInputChange}>
              {categories.map(category => (
                <option key={category._id} value={category._id}>{category.name}</option>
              ))}
            </select> : getCategoryName()}</p>
          <p>Pris: {isEditing ? <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} /> : `${product.price} kr`}</p>
        </div>
        <div>
          {isEditing ? (
            <button onClick={editProduct}>Spara</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Redigera</button>
          )}
          <button onClick={deleteProduct}>Delete</button>
          {isDeleted && <p style={{ color: 'green' }}>{product.name} has been deleted.</p>}
        </div>
      </div>
      <hr /> */}
    </>
  )
}

export default ProductAdmin;
