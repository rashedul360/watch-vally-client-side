import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";

const GetAllreviews = () => {
  const [reviews, setReviews] = useState([]);
  // fetching data from database
  useEffect(() => {
    fetch("https://polar-dawn-97020.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="mt-5 mb-5">
      <Row xs={1} md={3} className="g-4 container mx-auto">
        {reviews.map((review) => (
          //mapping review  for show the single review
          <Col key={review._id}>
            <Card style={{ minHeight: "360px" }}>
              <div className="d-flex align-items-center m-2">
                <div className="m-1">
                  <Card.Img
                    variant="top"
                    style={{ width: "50px", borderRadius: "50%" }}
                    src={
                      review.img
                        ? review.img
                        : "https://i.ibb.co/jJWD81S/1200px-Unknown-person.jpg"
                    }
                  />
                </div>
                <div className="m-1">
                  <div>
                    <Card.Title>{review.name}</Card.Title>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Text>{review.review}</Card.Text>
                {/* review rating */}
                <Rating
                  emptySymbol={<i className="far fa-star"></i>}
                  fullSymbol={
                    <i style={{ color: "#f5891a" }} className="fas fa-star"></i>
                  }
                  initialRating={review.rating}
                  readonly
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GetAllreviews;
