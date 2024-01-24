import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   axios.get(`${API}/reviews`).then((res) => {
  //     setReviews(res.data);
  //   });
  // });

  // const handleAdd = (newReview) => {
  //   axios
  //   .post(`${API}/reviews`, newReview)
  //   .then(
  //     (res) => {
  //       setReviews([res.data, ...reviews]);
  //     }, (error) => console.log(error)) 
  //   .catch((c) => console.warn("catch", c));
  // }

  // const handleDelete = () => {
  //   axios
  //   .delete(`${API}/reviews/${id}`)
  //   .then(
  //     (res) => {
  //       const copyReviewArray = [...reviews];
  //       const indexDeleteReview = copyReviewArray.findIndex((review) => {
  //         return review.id === id;
  //       });
  //       copyReviewArray.splice(indexDeleteReview, 1);
  //       setReviews(copyReviewArray);
  //     },
  //     (error) => console.warn(error)
  //   )
  //   .catch((e) => console.warn("catch", e));
  // };

  // const handleEdit = (updatedReview) => {
  //   axios
  //   .put(`${API}/reviews/${updatedReview.id}`, updatedReview)
  //   .then((res) => {
  //     const copyReviewArray = [...reviews];
  //     const indexUpdatedReview = copyReviewArray.findIndex((review) => {
  //       return review.id === updatedReview.id;
  //     });
  //     copyReviewArray[indexUpdatedReview] = res.data;
  //     setReviews(copyReviewArray);
  //   })
  //   .catch((e) => console.warn("catch", e));
  // };

  //review counter
   const reviewCount = reviews.length;


  return (
        <>
          <div className="review">
          <h1 className="review-head">Reviews</h1>
            <p>{reviewCount} reviews</p>
            <div className="review-div"> <Link to="/reviews">View a Reviews</Link></div>
            {/* <input
              className="review-input"
              value={currentReview}
              onChange={handleChange}
              onKeyPress={handleKeyPress}></input>
            <button onClick={handleSubmit}>Submit</button>
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul> */}
          </div>
        </>
      );
};

//function Reviews() {
  // const [reviews, setReviews] = useState([]);
  // const [currentReview, setCurrentReview] = useState("");

  // const handleChange = (event) => {
  //   setCurrentReview(event.target.value);
  // };

  // const handleSubmit = () => {
  //   if (currentReview.trim() !== "") {
  //     setReviews([...reviews, currentReview]);
  //     setCurrentReview("");
  //   }
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleSubmit();
  //   }
  // };

  //review counter
//   const reviewCount = reviews.length;

//   return (
//     <>
//       <div className="review">
//       <h1 className="review-head">Reviews</h1>
//         <p>{reviewCount} reviews</p>
//         <div className="review-div">Write a Review</div>
//         <input
//           className="review-input"
//           value={currentReview}
//           onChange={handleChange}
//           onKeyPress={handleKeyPress}></input>
//         <button onClick={handleSubmit}>Submit</button>
//         <ul>
//           {reviews.map((review, index) => (
//             <li key={index}>{review}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

export default Reviews;
