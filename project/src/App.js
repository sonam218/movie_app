import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import MovieList from './component/Navbar/MovieList/MovieList';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList />
      
    </div>
  );
}

export default App;
