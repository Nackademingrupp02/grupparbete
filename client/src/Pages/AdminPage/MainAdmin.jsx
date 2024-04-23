import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductAdmin from './ProductAdmin'
import Table from 'react-bootstrap/Table';



const MainAdmin = ({ products, categories }) => {

    const [sortProducts, setSortProducts] = useState([])
    const [sortKey, setSortKey] = useState('')

    useEffect(() => {
        setSortProducts(products)
    }, [products])

    const handleSort = (key) => {
        setSortKey(key);
        console.log(sortProducts);
    };

    const renderArrow = (key) => {
        if (sortKey === key) {
            return "↓"
        }
        return null
    };

    const handleProductSort = (str) => {
        let sortedProducts = [...sortProducts]
        if(str === 'product'){
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
            return setSortProducts(sortedProducts)
        }

        else{
            setSortProducts(products)
        }

    }

    //kategories blir fucked up

    return (
        <>
            <main>
                <div className='mainAdmin'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th onClick={() => { handleSort('#'); handleProductSort('#'); }} ># {renderArrow('#')}</th>
                                <th>Varumärke</th>
                                <th onClick={() => { handleSort('product'); handleProductSort('product');} } >Produkt {renderArrow('product')}</th>
                                <th onClick={() => { handleSort('category'); handleProductSort('category');}} >Kategori {renderArrow('category')}</th>
                                <th>Pris</th>
                                <th>Paket Storlek</th>
                                <th>Jämför pris</th>
                                <th>Beskrivelse</th>
                                <th>Ingredienser</th>
                                <th>Bild</th>
                                <th>Redigera/Ta bort</th>
                            </tr>
                        </thead>
                        {sortProducts && sortProducts.map((product, index) => {
                            return (
                                <>
                                    <ProductAdmin  {...{ product, index, categories }} />
                                </>
                            )
                        })}
                    </Table>
                </div>
            </main>
        </>
    )
}

export default MainAdmin