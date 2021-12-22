import React from 'react';
import Tour from './Tour';
const Tours = ({Tours}) => {
  return (

    <section className="tours">
      {Tours.map(tour => (
        <Tour key={tour.id}  {...tour} />
      ))}
    </section>
  

  )
};

export default Tours;
