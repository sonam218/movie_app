import React from 'react';

const FilterGroup = ({minrating, onRatingClick, ratings}) => {
  return (
  <ul className=" align-center movie_filter">
    {ratings.map((rate) =>
        <li className={minrating === rate ?'movie_filter_item active': 'movie_filter_item'} 
        key={rate}
        onClick={()=>onRatingClick({rate})}> {rate}+ star
        </li>
)}
  </ul>
  );
}

export default FilterGroup;
