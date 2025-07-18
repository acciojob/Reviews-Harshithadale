import React, { useEffect, useState } from "react";
import { initialArray } from "../initialArray";

function App() {
  const [count, setCount] = useState(1);
  const [review, setReview] = useState(initialArray[0]);

  useEffect(() => {
    const obj = initialArray.find((ob) => ob.id === count);
    setReview(obj);
  }, [count]);

  const setRandom = () => {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * initialArray.length) + 1;
    } while (randomId === count);
    setCount(randomId);
  };

  return (
    <div>
      <h1 id="review-heading">Our Reviews</h1>
      {review && (
        <div className="review">
          <p className="author" id={`author-${review.id}`}>{review.name}</p>
          <p className="job">{review.job}</p>
          <p className="info">{review.text}</p>
          <img
            src={review.image}
            width="60"
            height="60"
            className="person-img"
            alt={review.name}
          />
          <button
            className="prev-btn"
            onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
          >
            Prev
          </button>
          <button
            className="next-btn"
            onClick={() => {
              if (count < initialArray.length) setCount(count + 1);
            }}
          >
            Next
          </button>
          <button className="random-btn" onClick={setRandom}>
            Surprise Me
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
