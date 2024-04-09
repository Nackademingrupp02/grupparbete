import React from 'react'
import Product from '../../Components/Product'


const Main = ({ products }) => {
    return (
        <>
            <main>
                
                {products && products.map((product, index) => {
                    return (
                        <>
                            <div key={index} >
                                <Product {...{ product }} />
                            </div>
                        </>
                    )
                })}
            </main>
        </>
    )
}

export default Main