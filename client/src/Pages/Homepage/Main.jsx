import React from 'react'
import Product from '../../Components/Product.jsx'

import SearchProducts from "../../Components/searchProduct.jsx"

import { useEffect } from 'react'
import { useState } from 'react'
const Main = () => {
  <SearchProducts/>
  const [products, setProducts] = useState([])
  const [filterButton, setFilterButton] = useState('Alla')

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://grupparbete.onrender.com/products/all");
      const json = await response.json();
      setProducts(json);
    }
    getData();
  }, []);

  let filteredProducts = products.filter((product) => {
    if(filterButton === 'Alla'){
      return product;
    }
    else if(filterButton === "skafferi"){
      return product.category === "skafferi"
    }
    else if(filterButton === "frukt & grönt"){
      return product.category === "frukt & grönt"
    }
    else if(filterButton === "dryck"){
      return product.category === "dryck"
    }
    else if(filterButton === "godis & snacks"){
      return product.category === "godis & snacks"
    }
  });

  return (
    <>
    <SearchProducts products={products}/>
      <main className='main'>
          <button onClick={() => {setFilterButton('Alla')}}>Alla</button>
          <button onClick={() => {setFilterButton('godis & snacks')}}>Godis & Snacks</button>
          <button onClick={() => {setFilterButton('frukt & grönt')}}>Frukt & Grönt</button>
          <button onClick={() => {setFilterButton('dryck')}}>Dryck</button>
          <button onClick={() => {setFilterButton('skafferi')}}>Skafferi</button>
        <div>
          <ul>
            {filteredProducts.map((product, index) => {
              return (
                <>
                  <div style={{ listStyle: 'none' }} key={index} >
                    <Product {...{ product }} />
                  </div>
                </>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Main