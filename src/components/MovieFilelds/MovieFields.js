import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import MoviesGenresList from '../MovieGenresList';
import './MovieFields.scss';
import {
  getAverage,
  getMovieDetailsTitle,
  getOverview,
  getRealise,
} from '../../redux/movies/movies-selectors';

const MovieFields = () => {
  const realise = useSelector(getRealise);
  const average = useSelector(getAverage);
  const title = useSelector(getMovieDetailsTitle);
  const overview = useSelector(getOverview);

  return (
    <div className="WrapMovieFields">
      <h2 className="MovieTitle MarginPadding">{`${title} (${realise})`}</h2>
      <div className="MovieScore MarginPadding">
        <span className="MovieScoreText">User Score: </span>
        <span className="MovieScorePoint">{`${average}%`}</span>
      </div>
      <h4 className="MovieDescr MarginPadding">Genres:</h4>
      <MoviesGenresList />
      <div>
        <h4 className="MarginPadding MovieDescr">Overview: </h4>
        <p className="MarginPadding MovieOverview">{overview}</p>
      </div>
    </div>
  );
};

export default memo(MovieFields);
