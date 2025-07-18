import React, { useEffect, useState } from "react";
import { initialArray } from '../initialArray';

function App() {
  const [count, setCount] = useState(1);
  const [review, setReview] = useState(initialArray[0]);

  useEffect(() => {
    const obj = initialArray.find((ob) => ob.id === count);
    setReview(obj);
  }, [count]);
  const setRandom =()=>{
    setCount(Math.floor(Math.random()*initialArray.length)+1)
  }
  return (
    <div>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <p className="author" id={`author-${review.id}`}>{review.name}</p>
        <p className="job">{review.job}</p>
        <p className="info">{review.text}</p>
        <img src={review.image} width="60" height="60" className="person-img"/>
         <button className="prev-btn"
        onClick={() => {
          if (count > 1) setCount(count - 1);
        }}
        disabled={count === 1}
      >
        Prev
      </button>
      <button  className="next-btn"
        onClick={() => {
          if (count < initialArray.length) setCount(count + 1);
        }}
        disabled={count === initialArray.length}
      >
        Next
      </button>
       <button className="random-btn" onClick={setRandom}>surprise me</button>
      </div>
    </div>
  );
}

export default App;
