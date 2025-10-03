import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import './MovieList.css';
import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';

const MovieList = ({type, title, emoji}) => {
    const [movies, setmovies] = useState([]);
    const [minrating, setminrating] = useState(0);
    const [filterMovies, setfilterMovies] = useState([]);
    const [sort, setSort] = useState({
        by: 'default',
        order: 'asc'
    });
    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        // let sortedMovies = [...filterMovies];
        if (sort.by !== 'default') {
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
            setfilterMovies(sortedMovies);
        }
    }, [sort]);

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

    const handleSort = (e) => {
        const {name, value} = e.target;
        setSort((prev)=>({...prev, [name]: value}));

    }
    
    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=183928bab7fc630ed0449e4f66ec21bd`);
        const data = await response.json();
        setmovies(data.results);
        setfilterMovies(data.results);
    }

  return (
    <section className='movie_list' id={type}>
        <header className='align-center movie_list_header'>
            <h2 className=' align-center movie_list_heading'>
                {title}{""} 
                <img src={emoji} alt={`${emoji} icon `} className='navbar_emoji' /> 
            </h2>

            <div className='align-center movie_list_fs'>
                <FilterGroup minrating={minrating} onRatingClick={handlefilter} ratings={[8,7,6]} />
                <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" id="" onChange={handleSort} value={sort.order}className="movie_sorting">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
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
