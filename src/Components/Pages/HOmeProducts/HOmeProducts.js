import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";

const HOmeProducts = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  // fatching data from database
  useEffect(() => {
    fetch("https://polar-dawn-97020.herokuapp.com/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // redirect methods
  const handlePurchase = (id) => {
    history.push(`/purchase/${id}`);
  };
  return (
    <div className="mt-5 mb-5">
      <h4 className="container p-5">most popular watch</h4>
      {/* 6 item product on home page  */}
      <Row xs={1} md={3} className="g-4 container mx-auto">
        {products.slice(0, 6).map((product) => (
          <Col key={product._id}>
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.ProductName.slice(0, 50)}</Card.Title>
                <Card.Text>{product.desc.slice(0, 200)}</Card.Text>
                <h4>Price: ${product.price}</h4>
                <button
                  onClick={() => handlePurchase(product._id)}
                  className="w-50 btn btn-warning"
                >
                  <i className="fas fa-shopping-cart"></i> Buy now
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HOmeProducts;
