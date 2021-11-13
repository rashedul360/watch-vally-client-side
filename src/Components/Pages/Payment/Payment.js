import React from "react";
import payment from "../../../images/payment.svg";
import Header from "../Shared/Header/Header";
const Payment = () => {
  return (
    <div>
      <Header></Header>
      {/* payment message  */}

      <h1 className="text-center mt-5 mb-5">Payment Method comming soon</h1>
      {/* payment image  */}
      <img src={payment} className="img-fluid mx-auto w-100" alt="image" />
    </div>
  );
};

export default Payment;
