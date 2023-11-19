import React from 'react';
import { useState, useEffect } from 'react';
import Bookcard from './Bookcard';

const Bookmap = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/getAllBooks')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <div className='container-fluid '>
        <div className='row row-cols-md-4 row-cols-1 d-flex justify-content-evenly mb-2'>
          {/* Correct the arrow function to explicitly return the div element */}
          {books.map((book, index) => (
            <div key={index} className='col'>
              <Bookcard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmap;
