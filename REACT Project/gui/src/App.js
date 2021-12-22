import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people1, setPeople] = useState(data);
  return (
      <main>
      <section className="container">
        
          <h3>{data.length} Birthdays Today </h3>
              <List people={people1} />

        <button onClick={() => setPeople([])}  >Clear All</button>
          </section>

      </main>
  );
}

export default App;

