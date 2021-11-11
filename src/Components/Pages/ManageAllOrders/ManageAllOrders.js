import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});
  useEffect(() => {
    const url = `https://polar-dawn-97020.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);
  const handleDelete = (id) => {
    const warning = window.confirm("are you sure to delele this order?");
    if (warning) {
      const url = `https://polar-dawn-97020.herokuapp.com/orders/${id}`;
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

  const handleUpdate = (id) => {
    const updateOrder = orders[0];
    updateOrder.status = "shipped";
    setOrder(updateOrder);
    // fetching url
    const url = `https://polar-dawn-97020.herokuapp.com/orders/${id}`;
    // fetch from API
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // user interection
          alert("updated");
        }
      });
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
            <th scope="col">Phone Email</th>
            <th scope="col">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <>
              <tr>
                <td style={{ width: "30%" }}>
                  {order.ProductName}
                  <h6 style={{ color: "tomato" }}>Name: {order.name}</h6>
                </td>
                <td>${order.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-danger w-100"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  {order.status === "pending" && (
                    <button
                      onClick={() => handleUpdate(order._id)}
                      className="btn btn-success w-100"
                    >
                      <i className="fas fa-check-square"></i>
                    </button>
                  )}
                </td>
                <td>{order.status}</td>
                <td>
                  {order.phone}
                  <br />
                  {order.email}
                </td>
                <td>{order.code}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;
