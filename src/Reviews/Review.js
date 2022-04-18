import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [ page, setPage ] = useState(0);
  const { id, name, job, image, text } = people[page];

  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0
    }
    if (num < 0) {
      return people.length - 1
    }
    return num;
  }

  const nextPerson = () => {
    setPage((prevState) => {
      let nextPage = prevState + 1;
      return checkNumber(nextPage)
    })
  }

  const prevPerson = () => {
    setPage((prevState) => {
      let prevPage = prevState - 1
      return checkNumber(prevPage)
    })
  }


const randomPerson = () => {
  let randomPage = Math.floor(Math.random() * people.length - 1)
  if (randomPage === page) {
    randomPage = page + 1
  }
  setPage(checkNumber(randomPage))
}

  return (
  <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
       <span className="quote-icon">
       <FaQuoteRight />
       </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
      <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
      <FaChevronRight />
      </button>
    </div>
      <button className="random-btn" onClick={randomPerson}>
      Randomize
      </button>

  </article>
  )
};

export default Review;