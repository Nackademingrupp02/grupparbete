import React from 'react'

const Product = ({product}) => {
    return (
        <>
            <p>Produkt: {product.name}</p>
            <p>Kategori: {product.category}</p>
            <p>Pris: {product.price}kr</p>
            <hr />
        </>
    )
}

export default Product