import React from 'react';
import './MovieCard.css';

const MovieCard = () => {
  return (
   <a href='' className='movie_card'>
    <img 
    src="https://i.ytimg.com/vi/wCeoc2HdNmY/maxresdefault.jpg" 
    alt='movie_poster'
    className='movie_poster' />
    <div className="movie_details">
        <h3 className='movie_detail_heading'>Movie Name</h3>
        <div className=" align-center movie_date_rate">
            <span className='movie_date'>2023</span>
            <span className='movie_rate'>8.5⭐</span>
        </div>
       <p className='movie_description'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eaque, dignissimos quod enim quo hic sapiente facilis ullam architecto eveniet iste, tempore exercitationem rerum saepe expedita illo consequuntur, laudantium autem.
        </p> 
    </div>
   </a>

  );
}

export default MovieCard;
