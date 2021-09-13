import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import AppRoutes from '../../routes/AppRoutes';
import '../MoviesList/MoviesList.scss';
import { getMovies } from '../../redux/movies/movies-selectors';
import {
  getCastLogoSizes,
  getConfigurationBase_url,
} from '../../redux/configuration/configuration-selector';

const defaultSrc = 'https://media.comicbook.com/files/img/default-movie.png';

const MoviesList = () => {
  const location = useLocation();
  const results = useSelector(getMovies);
  const logo_sizes = useSelector(getCastLogoSizes);
  const base_url = useSelector(getConfigurationBase_url);

  return (
    <ul className="ListMovies">
      {results.map(({ id, title, poster_path }) => {
        const imgSrc = `${base_url}${logo_sizes}${poster_path}`;

        const { path } = AppRoutes[1];

        return (
          <li key={id} className="ListMoviesItem">
            <NavLink
              to={{
                pathname: `${path}/${id}`,
                state: {
                  from: location,
                },
              }}
              className="LinkMovies"
            >
              <img
                src={poster_path ? imgSrc : defaultSrc}
                alt={title}
                className="MoviesImg"
              />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
