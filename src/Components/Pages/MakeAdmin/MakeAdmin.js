import React, { useState } from "react";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // submit form method
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    // frtching data from database
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
          // user interection
          alert("new admin added successfully");
        }
      });
  };
  return (
    <div className="container">
      {/* make admin form  */}
      <form action="" onSubmit={handleSubmit} className="make-admin-form">
        {/* email field  */}
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
