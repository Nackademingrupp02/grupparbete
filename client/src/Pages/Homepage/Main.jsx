import React from 'react'
import Product from '../../Components/Product.jsx'


const Main = ({filteredProducts, filterHandler}) => {

  function filterHandlerBtn (string) {
    filterHandler(string)
  }

  return (
    <>
      <main className='main'>
          <button onClick={() => {filterHandlerBtn('Alla')}}>Alla</button>
          <button onClick={() => {filterHandlerBtn('godis & snacks')}}>Godis & Snacks</button>
          <button onClick={() => {filterHandlerBtn('frukt & grönt')}}>Frukt & Grönt</button>
          <button onClick={() => {filterHandlerBtn('dryck')}}>Dryck</button>
          <button onClick={() => {filterHandlerBtn('skafferi')}}>Skafferi</button>
        <div>
          <ul>
            {filteredProducts && filteredProducts.map((product, index) => {
              return (
                <>
                  <div key={index} >
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