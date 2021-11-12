import React from "react";
// about shop conponent
const AboutShop = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-evenly
        align-items-center"
      >
        <div className="col-md-6">
          {/* about shop message  */}
          <img
            src="https://i.ibb.co/5jyFMw2/pexels-thirdman-5061281-1.jpg"
            className="img-fluid w-75"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-center p-3">About Shop</h4>
          <hr
            className="mx-auto"
            style={{
              width: "10%",
              border: "2px solid tomato",
              marginTop: "-10px",
            }}
          />
          {/* about shop message  */}
          <p>
            At watch vally, you can guarantee you will find more watch brands
            than anywhere else. From the biggest designer brands, to the best of
            luxury and some hidden gems, we are the ultimate destination when
            searching for a watch for yourself or a loved one. At watch vally,
            you can guarantee you will find more watch brands than anywhere
            else. From the biggest designer brands, to the best of luxury and
            some hidden gems, we are the ultimate destination when searching for
            a watch for yourself or a loved one. At watch vally, you can
            guarantee you will find more watch brands than anywhere else. From
            the biggest designer brands, to the best of luxury and some hidden
            gems, we are the ultimate destination when searching for a watch for
            yourself or a loved one.
          </p>
          {/* read more button  */}
          <button className="btn btn-dark w-25">
            <i className="fab fa-readme"></i> Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutShop;
