import React, { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://polar-dawn-97020.herokuapp.com/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const handleDelete = (id) => {
    const warning = window.confirm("are you sure to delele this order?");
    if (warning) {
      const url = `https://polar-dawn-97020.herokuapp.com/allproduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("deleted");
          }
        });
    }
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            <th scope="col">Id</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={{ width: "40%" }}>{product.ProductName}</td>
              <td>${product.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-danger w-100"
                >
                  Delete
                </button>
              </td>
              <td>{product._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProducts;
