import React from "react";
import Product from "../../Components/Product.jsx";
import ErrorMessage from "../../Components/NoProductError.jsx";
import Cart from "../../Components/Cart.jsx";


import { Container, Row, Col } from "react-bootstrap";
const Main = ({ products }) => {
  if (!Array.isArray(products)) {
    return (
      <main className="main">
        <ErrorMessage message="Failed to fetch products." />
      </main>
    );
  } else if (products.length === 0) {
    return (
      <main className="main">
        <ErrorMessage message="No products found." />
      </main>
    );
  } else {
    return (
      <main className="main">
            <Cart/>
        <Container className="products">
          <Row>
            {products.map((product, index) => (
              <Col md={4} key={index} className="product mt-4 mb-4">
                <Product
                  {...{
                    product: {
                      ...product,
                      name:
                        product.name.charAt(0).toUpperCase() +
                        product.name.slice(1),
                      category:
                        product.category.charAt(0).toUpperCase() +
                        product.category.slice(1),
                    },
                  }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
};

export default Main;
