import React from "react";
import notFoundimage from "../../../images/notFoundimg.svg";
const NotFound = () => {
  return (
    <div>
      {/* not found image  */}
      <img src={notFoundimage} className="w-100 mx-auto img-fluid" alt="" />
    </div>
  );
};

export default NotFound;
