import React from 'react'
import Product from './Product.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const Main = () => {


  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://grupparbete.onrender.com/products/all");
      const json = await response.json(); 
      setProducts(json);
    }
    getData();
  }, [])
  
  return (
    <>
      <main className='main'>
        <h2>My Main Content</h2>
        <div>
          <ul>
            {products.map((product) => {
              
              return (
                <>

                  <div style={{listStyle: 'none'}}>
                    <Product { ...{product} }  />
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