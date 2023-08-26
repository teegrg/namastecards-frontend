import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState("");

  const handleChange = (event) => {
    setCurrentReview(event.target.value);
  };

  const handleSubmit = () => {
    if (currentReview.trim() !== "") {
      setReviews([...reviews, currentReview]);
      setCurrentReview("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  //review counter
  const reviewCount = reviews.length;

  return (
    <>
      <h1 className="review-head">Reviews</h1>
      <div className="review">
        <p>{reviewCount} reviews</p>
        <div>Write a Review</div>
        <input
          value={currentReview}
          onChange={handleChange}
          onKeyPress={handleKeyPress}></input>
        <button onClick={handleSubmit}>Submit</button>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Reviews;
