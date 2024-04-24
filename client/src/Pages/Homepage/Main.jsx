import React, { useEffect, useState } from "react";
import Product from "../../Components/Product.jsx";
import ErrorMessage from "../../Components/NoProductError.jsx";

import { Container, Row, Col } from "react-bootstrap";

const Main = ({ products ,buying,setBuying,setShow, show, cart}) => {

  const [checkout, setCheckout] = useState([])

  useEffect(() => {
    const storedItems = sessionStorage.getItem("Items");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setBuying(parsedItems);
    }
  }, []);

  if (!Array.isArray(products)) {
    return (
      <main className="main">
        <ErrorMessage message="Failed to fetch products." />
      </main>
    );
  } else if (products.length === 0) {
    return (
      <main className="main">
        
         
        <ErrorMessage message="Inga produkter hittades" />
       
      </main>
    );
  } else {
    return (
      <main className="main">
       
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
                    buying: buying,
                    setBuying: setBuying,
                    setShow:setShow
                    
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
