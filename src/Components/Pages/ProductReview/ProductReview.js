import React from "react";
import GetAllreviews from "../../Pages/GetAllreviews/GetAllreviews";
const ProductReview = () => {
  return (
    <div>
      <h1 className="text-center" id="p_review">
        Product Review
      </h1>
      <hr
        className="mx-auto"
        style={{ width: "10%", border: "2px solid tomato" }}
      />
      {/* call component  */}
      <GetAllreviews></GetAllreviews>
    </div>
  );
};

export default ProductReview;
