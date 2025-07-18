import React, { useState } from "react";
import { initialArray } from "../initialArray";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = initialArray[index];

  const checkIndex = (number) => {
    if (number > initialArray.length - 1) return 0;
    if (number < 0) return initialArray.length - 1;
    return number;
  };

  const prevPerson = () => {
    setIndex((prevIndex) => checkIndex(prevIndex - 1));
  };

  const nextPerson = () => {
    setIndex((prevIndex) => checkIndex(prevIndex + 1));
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * initialArray.length);
    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * initialArray.length);
    }
    setIndex(randomIndex);
  };

  return (
    <div className="review">
      <img src={image} alt={name} className="person-img" width="60" height="60" />
      <p className="author" id={`author-${id}`}>{name}</p>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevPerson}>Prev</button>
        <button className="next-btn" onClick={nextPerson}>Next</button>
        <button className="random-btn" onClick={randomPerson}>surprise me</button>
      </div>
    </div>
  );
}

export default Review;
