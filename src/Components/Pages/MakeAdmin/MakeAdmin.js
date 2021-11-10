import React, { useState } from "react";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://polar-dawn-97020.herokuapp.com/register", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("new admin added successfully");
        }
      });
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit} className="make-admin-form">
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          placeholder="email address"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
