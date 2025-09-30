import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <main className='main-content'>Main content</main>
    </div>
  );
}

export default App;
