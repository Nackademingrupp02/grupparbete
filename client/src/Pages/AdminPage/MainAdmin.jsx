import React from 'react'
import ProductAdmin from './ProductAdmin'
import Table from 'react-bootstrap/Table';


const MainAdmin = ({ products, categories }) => {

    return (
        <>
            <main>
                <div className='mainAdmin'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Produkt</th>
                            <th>Kategori</th>
                            <th>Pris</th>
                            <th>Redigera</th>
                        </tr>
                    </thead>
                    {products && products.map((product, index) => {
                        return (
                            <>
                                <ProductAdmin {...{ product, categories, index }} />
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