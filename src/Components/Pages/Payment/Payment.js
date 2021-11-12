import React from "react";
import payment from "../../../images/payment.svg";
const Payment = () => {
  return (
    <div>
      {/* payment message  */}
      <h1 className="text-center mt-5 mb-5">Payment Method comming soon</h1>
      {/* payment image  */}
      <img src={payment} className="img-fluid mx-auto w-100" />
    </div>
  );
};

export default Payment;
