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
        {/* logo with some information part  */}
        <div className="row align-items-center">
          <div className="col-md-3">
            <h1 as={Link} to="/">
              Watch Vally
            </h1>
          </div>
          {/* some importanr links part */}

          <div className="col-md-3 text-start ">
            <ul className="footer-list-item">
              <li>
                <Link className="anchoreLInk" to="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="anchoreLInk" to="">
                  all name and link
                </Link>
              </li>
              <li>
                <Link className="anchoreLInk" to="">
                  all name and link
                </Link>
              </li>
              <li>
                <Link className="anchoreLInk" to="">
                  all name and link
                </Link>
              </li>
            </ul>
          </div>
          {/* about this website part  */}
          <div className="col-md-3">
            <h4>About</h4>
            <p className="text-start">
              At watch vally, you can guarantee you will find more watch brands
              than anywhere else. From the biggest designer brands, to the best
              of luxury and some hidden gems, we are the ultimate destination
              when searching for a watch for yourself or a loved one
            </p>
          </div>
          {/* some social icons  */}
          <div className="col-md-3 social-links">
            {/* <i className="fab fa-facebook"></i>

            <i className="fab fa-google"></i>
            <i className="fab fa-google-play"></i>
            <br />
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram-square"></i> */}
            <img
              src="https://i.ibb.co/3m0Pwfd/ssl-commerce-1d268dce.png"
              alt=""
              className="img-fluid"
            />
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
