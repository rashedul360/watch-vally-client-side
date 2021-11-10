import React, { useState } from "react";
import postImage from "../../../images/postreview.svg";
import useAuth from "../../Hooks/useAuth";
import "./PostAReview.css";
const PostAReview = () => {
  const [reviewData, setReviewData] = useState();
  const { user } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newreviewData = { ...reviewData };
    newreviewData[field] = value;
    setReviewData(newreviewData);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: user.displayName,
      email: user.email,
      rating: reviewData.rating,
      review: reviewData.review,
      img: user.photoURL,
    };
    fetch("https://polar-dawn-97020.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(
            `Dear ${user.displayName} we have recieved your review. thank you`
          );
        }
      });
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="row register-container  dashboard-container align-items-center ">
        <div className="col-md-6 register-methods-container">
          <form onSubmit={handleFormSubmit}>
            <textArea
              placeholder="write your overview or review. noted try to finish with 300 word"
              required
              onChange={handleOnChange}
              name="review"
              maxLength="300"
              minLength="300"
              style={{ minHeight: "150px" }}
            ></textArea>
            <input
              type="text"
              placeholder="please provide rating poient (1 to 5)"
              name="rating"
              required
              maxLength="1"
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className="register-button"
              value="registration"
            >
              <i className="fas fa-plus-circle"></i> {"   "} Post Review
            </button>
          </form>
        </div>
        <div className="col other-register-methods">
          <img src={postImage} className="img-fluid" alt={postImage} />
        </div>
      </div>
    </div>
  );
};

export default PostAReview;
