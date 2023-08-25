import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(""); // Added state for current review

  const handleChange = (event) => {
    setCurrentReview(event.target.value); // Store the current review as the user types
  };

  const handleSubmit = () => {
    if (currentReview.trim() !== "") {
      setReviews([...reviews, currentReview]); // Add the current review to the reviews array
      setCurrentReview(""); // Clear the current review for the next input
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
    <div className="review">
      <h1>Reviews</h1>
      <p>{reviewCount} reviews</p>
      <div>Write a Review</div>
      <input value={currentReview} onChange={handleChange} onKeyPress={handleKeyPress}></input>
      <button onClick={handleSubmit}>Submit</button>
      {reviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
    </div>
  );
}

export default Reviews;
