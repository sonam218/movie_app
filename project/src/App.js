import React from 'react';
import './App.css';
import fire from './assets/fire.png';
import party from './assets/partying-face.png';
import glowing_star from './assets/glowing_star.png';
import Navbar from './component/Navbar/Navbar';
import MovieList from './component/Navbar/MovieList/MovieList';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList type='popular' title='Popular' emoji={fire} />
      <MovieList type='top_rated' title='Top Rated' emoji={glowing_star} />
      <MovieList type='upcoming' title='Upcoming' emoji={party} />
      
    </div>
  );
}

export default App;
