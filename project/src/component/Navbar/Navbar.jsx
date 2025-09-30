import React from 'react';
import './Navbar.css';
import fire from '../../assets/fire.png';
import glowing_star from '../../assets/glowing_star.png';
import party from '../../assets/party.jpg';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Movie_app</h1>
        <div className="navbar_link">
            <a href=""> Popular <img src={fire} alt='fire emoji'className='navbar_emoji'/> </a>
            <a href=""> Top Rated <img src={glowing_star} alt='glowing_star emoji'className='navbar_emoji'/> </a>
            <a href=""> Upcoming <img src={party} alt='party face emoji'className='navbar_emoji'/> </a>
        </div>
    </nav>
  );
}

export default Navbar;
