import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const url = `https://polar-dawn-97020.herokuapp.com/orders/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user.email, orders]);
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
  return (
    <div style={{ minHeight: "100vh" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
            <th scope="col">Phone</th>
            <th scope="col">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <>
              <tr key={order._id}>
                <td style={{ width: "30%" }}>
                  {order.ProductName}
                  <h6 style={{ color: "tomato" }}>Name: {order.name}</h6>
                </td>
                <td>${order.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>{order.status}</td>
                <td>{order.phone}</td>
                <td>{order.code}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
