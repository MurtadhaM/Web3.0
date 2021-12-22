import React from 'react';
const List = ({ people } ) => {
  return (


    <>
                   <h2>list component</h2>

   
          {people.map((person, index) => {
            const { id, name, age, image } = person;
            return (
              <article className="person" key={id}>
                <img src={image} alt={name} />
                <div>
                <h4>{name}</h4>
                  <p>{age}</p>
                </div>
              </article>

            );
          })}
      
   

          
    </> 


  );
};

export default List;