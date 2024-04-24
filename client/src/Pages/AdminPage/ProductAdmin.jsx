import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaTrashAlt, FaPen, FaCheck } from 'react-icons/fa'
import { FaX } from "react-icons/fa6";

const baseURL = "https://grupparbete.onrender.com";

const ProductAdmin = ({ product, categories, index, isAnyProductEditing, setIsAnyProductEditing }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });


  useEffect(() => {
    setIsAnyProductEditing(isEditing);
  }, [isEditing])

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


  const handleEditButtonClick = () => {
    if (!isAnyProductEditing) {
      setIsEditing(true)
    }
    else {
      alert('En annan produkt håller redan på att redigeras. Spara eller avbryt redigeringen av produkten först.')
    }
  }

  const cancelEdit = () => {
    setIsEditing(false);
  }

  return (
    <>
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <th>{isEditing ? <input type="text" name="brand" value={editedProduct.brand} onChange={handleInputChange} /> : product.brand}</th>
          <td>{isEditing ? <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} /> : product.name}</td>
          <td>{isEditing ? <select name="category" value={editedProduct.category} onChange={handleInputChange}>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select> : getCategoryName()}</td>

          <td>{isEditing ? <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} /> : `${product.price.toFixed(2)} kr`}</td>
          <td>{isEditing ? <input type="text" name="packageSize" value={editedProduct.packageSize} onChange={handleInputChange} /> : product.packageSize}</td>
          <td>{isEditing ? <input type="text" name="comparePrice" value={editedProduct.comparePrice} onChange={handleInputChange} /> : product.comparePrice}</td>
          <td>{isEditing ? <input type="text" name="description" value={editedProduct.description} onChange={handleInputChange} /> : (
            <>
              {product.description.length > 30 ? (
                product.description.slice(0, 30) + "..."
              ) : (
                product.description
              )}
            </>
          )}</td>
          <td>{isEditing ? <input type="text" name="ingredients" value={editedProduct.ingredients} onChange={handleInputChange} /> : (
            <>
              {product.ingredients.length > 30 ? (
                product.ingredients.slice(0, 30) + "..."
              ) : (
                product.ingredients
              )}
            </>
          )}</td>
          <td>{isEditing ? <input type='text' name="picture" value={editedProduct.picture} onChange={handleInputChange} /> : <img src={product.picture} style={{
            maxwidth: "3rem",
            maxHeight: "3rem",
            objectFit: "cover",
          }} />}</td>
          <td>
            {isEditing ? (
              <>
              <Button variant='danger' onClick={editProduct}><FaCheck/></Button>
              <Button variant="secondary" onClick={cancelEdit}><FaX/></Button>
              </>
            ) : (
              <>
              <Button variant='danger' onClick={() => handleEditButtonClick()}><FaPen /></Button>
              <Button onClick={deleteProduct}><FaTrashAlt /></Button>
              {isDeleted && <p style={{ color: 'green' }}>{product.name} has been deleted.</p>}
              </>
            )}

          </td>
        </tr>
      </tbody>
    </>
  )
}

export default ProductAdmin;
