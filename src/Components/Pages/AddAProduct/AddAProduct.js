import React, { useState } from "react";
import "./AddAProduct.css";
const AddAProduct = () => {
  const [productData, setProductData] = useState([]);
  // form submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const addNewPd = {
      ProductName: productData.ProductName,
      desc: productData.pdDesc,
      image: productData.pdImg,
      price: productData.pdPrice,
    };
    // posting data on database
    fetch("https://polar-dawn-97020.herokuapp.com/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewPd),
    })
      .then((res) => res.json())
      .then((data) => {
        // user interections
        if (data.insertedId) {
          alert("new product added succesfully");
        }
      });
  };
  // const collect data from input field function
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newAddProductData = { ...productData };
    newAddProductData[field] = value;
    setProductData(newAddProductData);
  };
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <div className="add-product-container">
        {/* add product form  */}
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            name="ProductName"
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Product description"
            name="pdDesc"
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Product Image"
            name="pdImg"
            required
            onChange={handleOnChange}
          />
          <input
            type="number"
            placeholder="Product price"
            name="pdPrice"
            required
            onChange={handleOnChange}
          />

          <button type="submit">
            <i className="fas fa-plus-square"></i> Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
