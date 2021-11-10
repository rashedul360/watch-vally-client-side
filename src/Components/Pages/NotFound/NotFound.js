import React from "react";
import notFoundimage from "../../../images/notFoundimg.svg";
const NotFound = () => {
  return (
    <div>
      <img
        src={notFoundimage}
        className="img-fluid"
        className="w-100 mx-auto"
        alt=""
      />
    </div>
  );
};

export default NotFound;
