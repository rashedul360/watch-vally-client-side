import React from "react";
import { Link } from "react-router-dom";
import notFoundimage from "../../../images/notFoundimg.svg";
const NotFound = () => {
  return (
    <div>
      {/* not found image  */}
      <div className="text-center mt-5">
        <Link to="/">
          <button className="btn btn-danger w-50 mb-5">Go to home</button>
        </Link>
        <img src={notFoundimage} className="mx-auto img-fluid" alt="image" />
      </div>
    </div>
  );
};

export default NotFound;
