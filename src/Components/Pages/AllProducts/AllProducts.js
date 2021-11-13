import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import AllProduct from "./AllProduct/AllProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  // fetching data from database
  useEffect(() => {
    fetch("https://polar-dawn-97020.herokuapp.com/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // all products
  return (
    <div>
      <Header></Header>
      <Row
        xs={1}
        md={3}
        className="g-4 container mx-auto"
        style={{ minHeight: "100vh" }}
      >
        {products.map((product) => (
          <AllProduct key={product._id} product={product}></AllProduct>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
