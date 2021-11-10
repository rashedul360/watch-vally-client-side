import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import loginImage from "../../../../images/login.svg";
import "./login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
const Login = () => {
  const { googleSignIn, user, loginUser, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const locationUri = location?.state?.from.pathname;

  const [loginData, setLoginData] = useState({});
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
    loginUser(loginData.email, loginData.password, history, locationUri);
  };
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  return (
    <div>
      <div className="container">
        {user.email ? (
          location.state?.from == undefined ? (
            history.push("/")
          ) : (
            history.push(`${location.state?.from?.pathname}`)
          )
        ) : (
          <div className="row login-container align-items-center">
            <div className="col-md-6 login-methods-container">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  placeholder="email address"
                  name="email"
                  required
                  onChange={handleOnChange}
                />
                <input
                  type="password"
                  placeholder={"password"}
                  name="password"
                  required
                  onChange={handleOnChange}
                />
                <button type="submit" value="login" className="login-button">
                  <i className="fas fa-sign-in-alt"></i> Login
                </button>
              </form>
              <p className="text-center mt-3">Others sign in Method</p>
              <hr className="w-50 mx-auto" />
              <button onClick={googleSignIn}>
                <i className="fab fa-google"></i> google
              </button>
              <h6 className="text-center m-3">
                <Link className="text-center" to="/register">
                  Create an account
                </Link>
              </h6>
            </div>
            <div className="col other-login-methods">
              <img src={loginImage} className="img-fluid" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
