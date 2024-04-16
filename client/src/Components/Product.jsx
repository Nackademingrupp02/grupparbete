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

const Product = ({ product }) => {
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
                style={{ width: "20rem", height: "30rem", objectFit: "cover" }}
              />
            </Col>
            <Col>
              <ListGroup style={{ width: "20rem" }}>
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2>{product.price} kr</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>{product.comparePrice} kr</h3>
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
          <h4>Innehållsförteckning</h4>
          {product.ingredients}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleModal = () => {
    setModalShow(true);
  };
  return (
    <>
      <Container>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              onClick={handleModal}
              variant="top"
              src={product.picture}
              style={{
                width: "15rem",
                height: "20rem",
                objectFit: "scale-down",
              }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{product.price} kr</ListGroup.Item>
              <ListGroup.Item>{product.comparePrice}</ListGroup.Item>
              <ListGroup.Item>
                {product.brand} | {product.packageSize}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="danger" className="px-4" size="lg">
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
