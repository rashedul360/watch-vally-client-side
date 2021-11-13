import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      {/* footer part  */}
      <footer
        className="mt-5 p-4 "
        style={{ background: "#212529", color: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="logo-part">
                    <h4 className="mb-3">Watch vally</h4>
                    <p>mirpur 452 dhaka,bangladesh</p>
                    <p>01312416730</p>
                    <p>
                      At watch vally, you can guarantee you will find more watch
                      brands than anywhere else.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 px-4">
                  <h6> About Company</h6>
                  <p>
                    We provide the best service in bangladesh, and also warentty
                    service
                  </p>
                  <a href="#aboutShop" className="btn-footer">
                    {" "}
                    About US{" "}
                  </a>
                  <br />
                  <a href="#aboutShop" className="btn-footer">
                    {" "}
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 px-4">
                  <h6>Quick Access</h6>
                  <div className="row ">
                    <div className="col-md-6">
                      <ul>
                        <li>
                          {" "}
                          <Link to="/"> Home</Link>{" "}
                        </li>
                        <li>
                          {" "}
                          <Link to="#aboutShop"> About</Link>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#home_p"> Service</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#p_review"> Reviews</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#"> support</a>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 px-4">
                      <ul>
                        <li>
                          {" "}
                          <a href="#"> Nagad</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#"> Visa</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#"> Islami Bank</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#"> Bkash</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#"> Refunds</a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#"> Others --></a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <h6> Payment methods</h6>
                  <img
                    src="https://i.ibb.co/3m0Pwfd/ssl-commerce-1d268dce.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* copyright section  */}
      <p
        className="text-center mb-0  text-white"
        style={{ background: "#212529" }}
      >
        All &copy; copyright reserved 2021 by{" "}
        <span>
          {" "}
          {/* designer or CEO or founder name  */}
          <a
            target="_blank"
            href="https://www.facebook.com/rashedulislam2004/"
            rel="noreferrer"
          >
            rashedul islam
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
