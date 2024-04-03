import React from 'react'
import Product from './Product.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const Main = () => {


  // let dummyProducts = [
  //   "product1",
  //   "product2",
  //   "product3",
  //   "product4",
  //   "product5",
  //   "product6",
  //   "product7",
  //   "product8",
  //   "product9",
  //   "product10",
  //   "product11",
  //   "product12",
  //   "product13",
  //   "product14",
  //   "product15",
  //   "product16",
  //   "product17",
  //   "product18",
  //   "product19",
  //   "product20",
  // ]

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