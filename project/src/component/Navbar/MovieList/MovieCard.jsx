import React from 'react';
import './MovieCard.css';

const MovieCard = ({movie}) => {
  return (
   <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className='movie_card'>
    <img 
    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
    alt='movie_poster'
    className='movie_poster' />
    <div className="movie_details">
        <h3 className='movie_detail_heading'>{movie.original_title}</h3>
        <div className=" align-center movie_date_rate">
            <span className='movie_date'>{movie.release_date}</span>
            <span className='movie_rate'>{movie.vote_average}⭐</span>
        </div>
       <p className='movie_description'>
        {movie.overview.length > 100 ? movie.overview.slice(0,100) + "..." : movie.overview}
        </p> 
    </div>
   </a>

  );
}

export default MovieCard;
