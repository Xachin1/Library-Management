import React from 'react';

const Books = () => {
  return (
    <div className='books__body'>
      <div className='book__main'>
        <section>
          <div className='books__container'>
            <div className='row'>
              <div className='books__header'>
                <div className='section__title books__header--title'>
                  <select id='filter'>
                    <option value='' disabled>
                      Sort
                    </option>
                    <option value='LOW_TO_HIGH'>Price, Low to High</option>
                    <option value='HIGHT_TO_LOW'>Price, High to Low</option>
                    <option value='RATING'>Rating</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Books;
