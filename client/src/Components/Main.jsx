import React from 'react'
import Product from './Product.jsx'
import  allCategory  from "../../../backend/controllers/CFC";

const Main = () => {
console.log(allCategory);
  let dummyProducts = ["product1", "product2", "product3", "product3", "product4", "product5", "product6", "product7", "product8", "product9", "product10", "product11", "product12", "product13", "product14", "product15", "product16", "product17", "product18", "product19", "product20"]
console.log(dummyProducts);

  return (
    <>
      <main className='main'>
        {/* <filterCG data = { allCategory}/> */}
        <h2>My Main Content</h2>
        <div>
          <ul>
            {dummyProducts && dummyProducts.map((prod, index) => {
              return (
                <>

                  <li key={index}>
                    <Product info={prod}/>
                  </li>

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