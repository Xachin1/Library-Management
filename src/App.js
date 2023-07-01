import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import { books } from './data';
import BookInfo from './components/pages/BookInfo';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path='/' exact render={() => <Home books={books} />} />
        <Route Path='/books' render={() => <Books books={books} />} />
        <Route path='books/1' render={() => <BookInfo books={books} />} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
