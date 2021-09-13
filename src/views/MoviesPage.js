import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MoviePageForm from '../components/MoviePageForm';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchMovies } from '../redux/movies/movies-operation';
import fetchConfiguration from '../redux/configuration/configuration-operation';
import {
  trendingAddSuccess,
  trendingChangePageSuccess,
  trendingFirstPageSuccess,
} from '../redux/movies/movies-actions.js';
import { SearchQuery } from '../redux/searchMovies/searchMovies-actions';
import {
  getLoading,
  getPage,
  getResultsLength,
  getSearchQuery,
  getTotalPages,
} from '../redux/movies/movies-selectors';
import { getConfigurationBase_url } from '../redux/configuration/configuration-selector';
import './stylesViews/MoviePage.scss';
import { getError } from '../redux/error/error-selector';
import NotFound from '../components/NotFound/NotFound';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isLoading = useSelector(getLoading);
  const page = useSelector(getPage);
  const length = useSelector(getResultsLength);
  const configUrl = useSelector(getConfigurationBase_url);
  const total_pages = useSelector(getTotalPages);
  const searchQuery = useSelector(getSearchQuery);
  const error = useSelector(getError);

  useEffect(() => {
    if (!searchQuery) return;
    dispatch(fetchSearchMovies(searchQuery, page));
  }, [dispatch, searchQuery, page]);

  useEffect(() => {
    if (configUrl) return;

    dispatch(fetchConfiguration());
  }, [dispatch, configUrl]);

  useEffect(() => {
    if (!searchQuery) return;

    const createPathName = () => {
      history.push({
        hash: `${page}`,
        search: `query=${searchQuery}`,
      });
    };

    createPathName();
  }, [searchQuery, page, history]);

  useEffect(() => {
    if (!!location.search && location.hash === '#1') {
      dispatch(SearchQuery(location.search.slice(7)));
    }
  }, [dispatch, location.search, location.hash]);

  useEffect(() => {
    return () => {
      dispatch(trendingFirstPageSuccess(1));
      dispatch(trendingAddSuccess([]));
    };
  }, [dispatch]);

  const incrementPage = () => {
    dispatch(trendingChangePageSuccess(1));
  };

  const shoudRenderMovieList = length !== 0;
  const shoudRenderButton =
    shoudRenderMovieList && page !== total_pages && length % 2 === 0;

  return (
    <div className="WrapMoviePage">
      <MoviePageForm />

      {shoudRenderMovieList && <MoviesList />}

      {isLoading && <Spinner />}
      {error && <NotFound />}

      {shoudRenderButton && (
        <Button onClick={incrementPage} text={'Load More'} />
      )}
    </div>
  );
};

export default MoviesPage;
