import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.picture} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{product.price} kr</ListGroup.Item>
          <ListGroup.Item>{product.comparePrice}</ListGroup.Item>
          <ListGroup.Item>{product.brand}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Köp</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
