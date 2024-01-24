import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;


function Review() {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${API}/reviews`).then((res) => {
      setReviews(res.data);
      console.log(reviews);
    });
  });
    return (
        <div>
            {reviews.map(review => <p>{review.content}</p>)}
        </div>
    )
};

export default Review;