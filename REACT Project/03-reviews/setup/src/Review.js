import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [ review, setReview ] = useState(people[ 0 ]);
  const { id, name, job, image, text } = review;
  
  
  const nextReview = (value) => {
    const next = people[ id + 1 ];
    const prev = people[ id - 1 ];
    if (value === 1) {
      setReview(next);
    } else {
      setReview(people[ 0 ]);
    }
  };

  


  return( 
    <div className="review">
      <div className="review__container">
        <div className="review__image">
          <img src={image} alt="person" />
        </div>

        <div className="review__text">
          <h3 className="review__name">{name}</h3>

          <h4 className="review__job">{job}</h4>

          <p className="review__text">{text}</p>
        </div>
      </div>

      <div className="review__button">
        <button  className="review__button--left" onClick={nextReview(-1)}  >
   
          <FaChevronLeft />
        </button>

        <button className="review__button--right" onClick={nextReview(1)}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );


  
};

export default Review;
