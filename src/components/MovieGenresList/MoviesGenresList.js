import React from 'react';
import { useSelector } from 'react-redux';
import { getGenres } from '../../redux/movies/movies-selectors';
import './MovieGenresList.scss';

const MoviesGenresList = () => {
  const genres = useSelector(getGenres);
  return (
    <ul className="GenresNamesList">
      {genres.map(({ id, name }) => (
        <li key={id} className="GenresItem">
          {name}
        </li>
      ))}
    </ul>
  );
};

export default MoviesGenresList;
