import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./ProductPurchase.css";
const ProductPurchase = () => {
  const [product, setProduct] = useState({});
  const id = useParams();
  const history = useHistory();
  const { user } = useAuth();
  const { ProductName, desc, image, price } = product;
  const { displayName, email } = user;
  const [orderData, setOrderData] = useState({});
  const updateOrderData = { ...orderData };
  updateOrderData.email = email;
  updateOrderData.name = displayName;
  updateOrderData.ProductName = ProductName;
  updateOrderData.price = price;
  updateOrderData.status = "pending";
  // fetching data from database
  useEffect(() => {
    const url = `https://polar-dawn-97020.herokuapp.com/allproduct/${id.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  // collect input data
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderData = { ...orderData };
    newOrderData[field] = value;
    setOrderData(newOrderData);
  };
  // submit method
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // posting on database
    fetch("https://polar-dawn-97020.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order placed successfully");
          history.push("/payment");
        }
      });
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            {/* purchase product infromation  */}
            <div className="mt-5 mb-5">
              <Col>
                <Card style={{ border: "none" }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{ProductName}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <h4>Price: ${price}</h4>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 place-order-container">
            {/* collect purchase information form user  */}
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="your name"
                name="name"
                required
                value={displayName || ""}
                onChange={handleOnChange}
                readOnly
              />
              <input
                type="email"
                placeholder="your email"
                name="email"
                required
                value={email || ""}
                onChange={handleOnChange}
                readOnly
              />
              <input
                type="number"
                placeholder="your phone number"
                name="phone"
                required
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Your parmanent address"
                name="address"
                required
                onChange={handleOnChange}
              />
              <input
                type="number"
                placeholder="Your city ZIP code"
                name="code"
                required
                onChange={handleOnChange}
              />
              {/* submit  */}
              <button type="submit" className="register-button">
                <i className="fas fa-sign-in-alt"></i> Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchase;
