import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className='logo'>
        <img src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" alt="logo" width={100} />
        <p className="title"><a href="/homepage">NASA Activities Website</a></p>
      </div>
      
      <nav>
        <ul className="nav-list">
          <li><a href="/earth-event-tracker" className="nav-item">Earth Natural Event Tracker</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;