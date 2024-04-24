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

const Product = ({ product, buying, setBuying,  show, setShow}) => {
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
          <Button onClick={props.onHide}>Stäng</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleModal = () => {
    setModalShow(true);
  };

  const addToBuying = (item) => {
    item.amount = 1;

    let isPresent = false;
    buying.forEach((product) => {
      if (item._id === product._id) isPresent = true;
    });
    if (isPresent) {
      //can add so you get an warning when user adding same product in cart
      // setWarning(true);
      // setTimeout(() => {
      //   setWarning(false);
      // }, 2000);
      return;
    }
    setBuying([...buying, item]);
  };

  return (
    <>
      <Container>
        <Row>
          <Card style={{ textAlign: "center" }}>
            <Card.Img
              onClick={handleModal}
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
                onClick={() => (addToBuying(product), setShow(true))}>
                Köp
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Product;
