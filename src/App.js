import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Books from './components/pages/Books';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route Path='/books' component={Books} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
