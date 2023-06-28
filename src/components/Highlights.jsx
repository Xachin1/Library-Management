import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
  return (
    <div>
      <section id='highlights'>
        <div className='container'>
          <div className='row'>
            <h2 className='section__title'>
              Why choose <span className='purple'>Library</span>
            </h2>
            <div className='highlight__wrapper'>
              <Highlight
                icon={<FontAwesomeIcon icon='bolt' />}
                title='10000+ books'
                para='Get access to the book you purchased online intantly.'
              />
              <Highlight
                icon={<FontAwesomeIcon icon='book-open' />}
                title='Easy and Quick'
                para='Get access to the book you purchased online intantly.'
              />
              <Highlight
                icon={<FontAwesomeIcon icon='tags' />}
                title='Easy and Quick'
                para='Get access to the book you purchased online intantly.'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
