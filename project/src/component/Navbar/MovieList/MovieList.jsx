import React, { useEffect, useState } from 'react';
import './MovieList.css';
import fire from '../../../assets/fire.png';
import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';

const MovieList = () => {
    const [movies, setmovies] = useState([]);
    const [minrating, setminrating] = useState(0);
    const [filterMovies, setfilterMovies] = useState([]);
    useEffect(() => {
        fetchMovies();
    }, []);

    const handlefilter = (rating) => {
        if(rating === minrating){
            setfilterMovies(movies);
            setminrating(0);
        }else{
            setminrating(rating);
            const filteredMovies = movies.filter((movie) => movie.vote_average >= rating);
            setfilterMovies(filteredMovies);
        }
    }

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=183928bab7fc630ed0449e4f66ec21bd');
        const data = await response.json();
        setmovies(data.results);
        setfilterMovies(data.results);
    }
  return (
    <section className='movie_list'>
        <header className='align-center movie_list_header'>
            <h2 className=' align-center movie_list_heading'>
                Popular{""} 
                <img src={fire} alt="fire emoji" className='navbar_emoji' /> 
            </h2>

            <div className='align-center movie_list_fs'>
                <FilterGroup minrating={minrating} onRatingClick={handlefilter} ratings={[8,7,6]} />
                <select name="" id="" className="movie_sorting">
                    <option value="">SortBy</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie_sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>
            </div>
        </header>
        <div className="movie_cards">
            {filterMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </section>
  );
}

export default MovieList;
