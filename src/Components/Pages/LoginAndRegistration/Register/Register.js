import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import registerImage from "../../../../images/login.svg";
import useAuth from "../../../Hooks/useAuth";
import "./Register.css";
const Register = () => {
  const { googleSignIn, isLoading, newRegister, user } = useAuth();
  const [registerData, setRegisterData] = useState({});
  const history = useHistory();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    newRegister(registerData.email, registerData.password, registerData.name);
    const newUser = {
      email: registerData.email,
      name: registerData.name,
      role: "member",
    };
    fetch("https://polar-dawn-97020.herokuapp.com/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("user registered succcessfully");
        }
      });
  };
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  return (
    <div>
      <div>
        <div className="container">
          {user.email ? (
            location.state?.from == undefined ? (
              history.push("/")
            ) : (
              history.push(`${location.state?.from?.pathname}`)
            )
          ) : (
            <div className="row register-container align-items-center">
              <div className="col-md-6 register-methods-container">
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    placeholder="your name"
                    name="name"
                    required
                    onChange={handleOnChange}
                  />
                  <input
                    type="email"
                    placeholder="email address"
                    name="email"
                    required
                    onChange={handleOnChange}
                  />

                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    onChange={handleOnChange}
                  />
                  <button
                    type="submit"
                    className="register-button"
                    value="registration"
                  >
                    <i className="fas fa-sign-in-alt"></i> Registration
                  </button>
                </form>
                <p className="text-center mt-3">Others sign in Method</p>
                <hr className="w-50 mx-auto" />
                <button onClick={googleSignIn}>
                  <i className="fab fa-google"></i> google
                </button>
                <h6 className="text-center m-3">
                  <Link className="text-center" to="/login">
                    Already user? please login
                  </Link>
                </h6>
              </div>
              <div className="col other-register-methods">
                <img
                  src={registerImage}
                  className="img-fluid"
                  alt={registerImage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
