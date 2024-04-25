import React, { useEffect, useState } from 'react';
import CategoryOption from './CategoryOption';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Product from '../../Components/Product';

const ModalAdmin = ({ setAddProductBtn, categoryList, addProduct, setAddProduct, handleAddProduct }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!addProduct.category && categoryList) {
      setAddProduct({ ...addProduct, category: categoryList[0]._id });
    }
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!addProduct.name || addProduct.name.length < 2 || addProduct.name.length > 50) {
      errors.name = 'Namnet måste vara mellan 2 och 50 tecken';
    }
    if (!addProduct.price || addProduct.price < 1 || addProduct.price > 100000) {
      errors.price = 'Priset måste vara mellan 1 och 100 000';
    }
    if (!addProduct.packageSize || addProduct.packageSize.length < 1 || addProduct.packageSize.length > 10) {
      errors.packageSize = 'Pakets storlek måste vara mellan 1 och 10 tecken';
    }
    if (!addProduct.comparePrice || addProduct.comparePrice.length < 1 || addProduct.comparePrice.length > 15) {
      errors.comparePrice = 'Jämförelsepriset måste vara mellan 1 och 15 tecken';
    }
    if (!addProduct.brand || addProduct.brand.length < 1 || addProduct.brand.length > 30) {
      errors.brand = 'Varumärket måste vara mellan 1 och 30 tecken';
    }
    if (addProduct.description && ( addProduct.description.length > 500)) {
      errors.description = 'Beskrivningen får ej vara över 500 tecken';
    }
    if (addProduct.ingredients && addProduct.ingredients.length > 500) {
      errors.ingredients = 'Ingredienserna får inte vara längre än 500 tecken';
    }
    // Add validation for other fields here
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <div className='overlay'>
          <div className='modal-content'>
            <Modal.Header>
              <Modal.Title>Lägg till produkt</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='addProductInputs'>
                <label htmlFor="addProductName">Namn</label>
                <input type="text" id="addProductName" value={addProduct.value} onChange={(e) => {
                  setAddProduct({ ...addProduct, name: e.target.value });
                }} />
                {errors.name && <div className="error">{errors.name}</div>}
                
                <label htmlFor="addProductPrice">Pris</label>
                <input type="number" id="addProductPrice" value={addProduct.price} onChange={(e) => {
                  setAddProduct({ ...addProduct, price: e.target.value });
                }} />
                {errors.price && <div className="error">{errors.price}</div>}
                
                <label htmlFor='addProductPackageSize'>Paket storlek</label>
                <input type="text" id='addProductPackageSize' value={addProduct.packageSize} onChange={(e) => {
                  setAddProduct({ ...addProduct, packageSize: e.target.value});
                }} />
                {errors.packageSize && <div className="error">{errors.packageSize}</div>}

                <label htmlFor='addProductComparePrice'>Jämför pris</label>
                <input type="text" id='addProductComparePrice' value={addProduct.comparePrice} onChange={(e) => {
                  setAddProduct({ ...addProduct, comparePrice: e.target.value});
                }} />
                {errors.comparePrice && <div className="error">{errors.comparePrice}</div>}

                <label htmlFor='addProductBrand'>Varumärke</label>
                <input type='text' id='addProductBrand' value={addProduct.brand} onChange={(e) => {
                  setAddProduct({ ...addProduct, brand: e.target.value});
                }} />
                {errors.brand && <div className="error">{errors.brand}</div>}

                <label htmlFor='addProductDescription'>Beskrivning</label>
                <input type="text" id='addProductDescription' value={addProduct.description} onChange={(e) => {
                  setAddProduct({ ...addProduct, description: e.target.value});
                }} />
                {errors.description && <div className="error">{errors.description}</div>}

                <label htmlFor='addProductIngredients'>Ingredienser</label>
                <input type="text" id='addProductIngredients' value={addProduct.ingredients} onChange={(e) => {
                  setAddProduct({ ...addProduct, ingredients: e.target.value});
                }} />
                {errors.ingredients && <div className="error">{errors.ingredients}</div>}

                <label htmlFor="addProductPicture">Bild</label>
                <input type='text' id='addProductPicture' value={addProduct.picture} onChange={(e) => {
                  setAddProduct({ ...addProduct, picture: e.target.value});
                }} />
                
                <label htmlFor="addProductCategory">Kategori</label>
                <select id='selectedCategory' value={addProduct.category} onChange={(e) => {
                  setAddProduct({ ...addProduct, category: e.target.value });
                }}>
                  {categoryList && categoryList.map((category, index) => {
                    return (
                      <CategoryOption key={index} {...{ category }} />
                    );
                  })}
                </select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setAddProductBtn(false)}>Stäng</Button>
              <Button onClick={() => {
                if (validateForm()) {
                  handleAddProduct();
                } else {
                  alert('Fyll i alla obligatoriska fält korrekt.');
                }
              }}>Lägg till produkt</Button>
            </Modal.Footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdmin;
