// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { books } from '../data';
import Book from './ui/Book.jsx';

const Featured = () => {
  return (
    <section id='features'>
      <div className='container'>
        <div className='row'>
          <div className='section__title'>
            <h2>
              Featured <span className='purple'>Books</span>
            </h2>
            <div className='books'>
              {books
                .filter((book) => book.rating === 5)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
