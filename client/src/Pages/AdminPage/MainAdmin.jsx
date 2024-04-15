import React from 'react'
import ProductAdmin from './ProductAdmin'



const MainAdmin = ({ products, categories}) => {
    
    return (
        <>
            <main>
                {products && products.map((product, index) => {
                    return (
                            <div key={index}>
                                <ProductAdmin key={index} {...{ product, categories }} />
                            </div>
                    )
                })}
            </main>
        </>
    )
}

export default MainAdmin