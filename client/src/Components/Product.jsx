import React from "react";
import { useState } from "react";
import {
  Card,
  ListGroup,
  Container,
  Row,
  Col,
  Button,
  Modal,
  ListGroupItem,
} from "react-bootstrap";

const Product = ({ product, buying, setBuying, show, setShow }) => {
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Row>
            <Col>
              <img
                src={product.picture}
                style={{
                  maxwidth: "20rem",
                  maxHeight: "20rem",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col>
              <ListGroup style={{ width: "20rem" }}>
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2>{product.price.toFixed(2)} kr</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>{product.comparePrice}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>{product.packageSize}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>{product.brand}</h4>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <h4>Innehållsförteckning</h4>
              {product.ingredients}
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Beskrivning</h4>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => addToBuying(product)}>Köp</button>
          <button onClick={props.onHide} >Stäng</button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleModal = () => {
    setModalShow(true);
  };

  const addToBuying = (item) => {
    const cartButton  = document.getElementById("cartHolder")
    console.log(cartButton );
    cartButton.style.backgroundColor = "red"

    setTimeout(() => {
      cartButton.style.backgroundColor = "rgba(240, 240, 240, 0.753)"
    }, 1000);
    
    

    //skriv timeout sen :) (från Alexander)
    let isPresent = false;
    const updatedBuying = buying.map((product) => {
      if (item._id === product._id ) {
        isPresent = true;
        return { ...product, amount: product.amount + 1};
      }
      return product;
    });
    if (!isPresent) {
      item.amount = 1;
      updatedBuying.push(item);
    }

    setBuying(updatedBuying);
    updateSessionStorage(updatedBuying);
    
  
   };

  const updateSessionStorage = (items) => {
    sessionStorage.setItem("Items", JSON.stringify(items));
  };

  return (
    <>
  <div onClick={handleModal}>
    <Container>
      <Row>
        <Card style={{ textAlign: "center" }}>
          <Card.Img
            variant="top"
            src={product.picture}
            style={{
              objectFit: "contain",
              maxWidth: "240px",
              maxHeight: "240px",
              minHeight: "240px",
            }}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{product.price.toFixed(2)} kr</ListGroup.Item>
            <ListGroup.Item>{product.comparePrice}</ListGroup.Item>
            <ListGroup.Item>
              {product.brand} | {product.packageSize}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button 
              variant="danger"
              className="px-4"
              size="lg"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from opening when clicking the button
                addToBuying(product);
              }}
            >
              Köp
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </div>
  <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
</>
  );
};

export default Product;
