import React from 'react';
import './Navbar.css';
import DarkMode from '../DarkMode/DarkMode';
import fire from '../../assets/fire.png';
import glowing_star from '../../assets/glowing_star.png';
import party from '../../assets/partying-face.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Movie_app</h1>
        <div className="navbar_link">
            <DarkMode />
            <a href="#popular"> Popular <img src={fire} alt='fire emoji'className='navbar_emoji'/> </a>
            <a href="#top_rated"> Top Rated <img src={glowing_star} alt='glowing_star emoji'className='navbar_emoji'/> </a>
            <a href="#upcoming"> Upcoming <img src={party} alt='partying-face emoji'className='navbar_emoji'/> </a>
        </div>
    </nav>
  );
}

export default Navbar;
