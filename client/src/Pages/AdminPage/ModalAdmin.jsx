import React, { useEffect } from 'react'
import CategoryOption from './CategoryOption';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Product from '../../Components/Product';


const ModalAdmin = ({ setAddProductBtn, categoryList, addProduct, setAddProduct, handleAddProduct }) => {


  //useEffect för att undvika problemet med att addProduct.category är tom sträng om man inte ändrar i dropdown fönstret först
  useEffect(() => {
    if (!addProduct.category && categoryList) {
      setAddProduct({ ...addProduct, category: categoryList[0]._id })
    }
  }, [])



  return (
    <>
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <div className='overlay'>
          <div className='modal-content'>

            <Modal.Header>
              <Modal.Title>Add product</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className='addProductInputs'>
                <label htmlFor="addProductName">Namn</label>
                <input type="text" id="addProductName" value={addProduct.value} onChange={(e) => {
                  setAddProduct({ ...addProduct, name: e.target.value })
                }} />

                <label htmlFor="addProductPrice">Pris</label>
                <input type="number" id="addProductPrice" value={addProduct.price} onChange={(e) => {
                  setAddProduct({ ...addProduct, price: e.target.value })
                }} />
                
                <label htmlFor='addProductPackageSize'>Paket storlek</label>
                <input type="text" id='addProductPackageSize' value={addProduct.packageSize} onChange={(e) => {
                  setAddProduct({ ...addProduct, packageSize: e.target.value})
                }} />

                <label htmlFor='addProductPackageSize' id='addProductComparePrice'>Jämför pris</label>
                <input type="text" id='addProductComparePrice' value={addProduct.comparePrice} onChange={(e) => {
                  setAddProduct({ ...addProduct, comparePrice: e.target.value})
                }} />

                <label htmlFor='addProductBrand' id='addProductBrand'>Varumärke</label>
                <input type='text' id='addProductBrand' value={addProduct.brand} onChange={(e) => {
                  setAddProduct({ ...addProduct, brand: e.target.value})
                }} />

                <label htmlFor='addProductDescription' id='addProductDescription'>Beskrivning</label>
                <input type="text" id='addProductDescription' value={addProduct.description} onChange={(e) => {
                  setAddProduct({ ...addProduct, description: e.target.value})
                }} />

                <label htmlFor='addProductIngredients' id='addProductIngredients'>Ingredienser</label>
                <input type="text" id='addProductIngredients' value={addProduct.ingredients} onChange={(e) => {
                  setAddProduct({ ...addProduct, ingredients: e.target.value})
                }} />

                <label htmlFor="addProductPicture" id='addProductPicture'>Bild</label>
                <input type='text' id='addProductPicture' value={addProduct.picture} onChange={(e) => {
                  setAddProduct({ ...addProduct, picture: e.target.value})
                }} />

                <label htmlFor="addProductCategory">Kategori</label>
                <select id='selectedCategory' value={addProduct.category} onChange={(e) => {
                  setAddProduct({ ...addProduct, category: e.target.value });
                }}>
                  {categoryList && categoryList.map((category, index) => {
                    return (
                      <CategoryOption key={index} {...{ category }} />
                    )
                  })}
                </select>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={() => {
                setAddProductBtn(false)
              }}>Close</Button>
              <Button onClick={ () => { handleAddProduct()}}>Add product</Button>
            </Modal.Footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalAdmin