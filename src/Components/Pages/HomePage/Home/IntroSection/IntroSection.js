import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./IntroSection.css";
const IntroSection = () => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/exploremore");
  };
  return (
    <div>
      <div className="intro-container text-white text-center d-flex align-items-center justify-content-center">
        <div className="w-50 mx-auto">
          <div>
            <h1>welcome to our watch gallary</h1>
            <p>
              At watch vally, you can guarantee you will find more watch brands
              than anywhere else. From the biggest designer brands, to the best
              of luxury and some hidden gems, we are the ultimate destination
              when searching for a watch for yourself or a loved one
            </p>
            <button
              onClick={handleRedirect}
              className="btn btn-warning w-50 mx-auto"
            >
              <i className="fas fa-caret-square-right"></i> Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
