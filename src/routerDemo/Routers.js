import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topic from './Topic';
import Homepage from './Homepage';
function Routers() {
    return (
        <Router>
          <div>
            <h2>Wellcome to React Router Tutorial</h2>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <ul className='navbar-nav mr-auto'>
                <li><Link to={'/'} className='nav-link'>HomePage</Link></li>
                <li><Link to={'/Home'} className='nav-link'>Home</Link></li>
                <li><Link to={'/About'} className='nav-link'>About</Link></li>
                <li><Link to={'/Topics'} className='nav-link'>Topic</Link></li>
              </ul>
            </nav>
            <hr/>
            <Routes>
              <Route exact path='/' Component={Homepage} />
              <Route exact path='/Home' Component={Home} />
              <Route exact path='/About' Component={About} />
              <Route exact path='/Topics' Component={Topic} />
            </Routes>
          </div>
        </Router>
      );
}

export default Routers;