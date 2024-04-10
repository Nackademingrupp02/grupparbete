import React from 'react'
import Product from './ProductAdmin'


const MainAdmin = ({ products, categories}) => {
    
    return (
        <>
            <main>
                {products && products.map((product, index) => {
                    return (
                        <>
                            <div>
                                <Product key={index} {...{ product, categories }} />
                            </div>
                        </>
                    )
                })}
            </main>
        </>
    )
}

export default MainAdmin