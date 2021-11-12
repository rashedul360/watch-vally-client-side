import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const AllProduct = ({ product }) => {
  // destructure some property feom product
  const { _id, ProductName, desc, image, price } = product;
  const history = useHistory();
  // handle redirect
  const handleBooking = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    // all product card
    <div style={{ minHeight: "100%" }}>
      <Col className="mt-5">
        <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{ProductName.slice(0, 50)}</Card.Title>
            <Card.Text>{desc.slice(0, 200)}</Card.Text>
            <h4>Price: ${price}</h4>
            <button
              onClick={handleBooking}
              className="w-50 btn btn-warning w-100"
            >
              <i className="fas fa-shopping-cart"></i> Buy now
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default AllProduct;
