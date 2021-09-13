import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import { trendingMoviesAdd } from '../redux/movies/movies-operation';
import fetchConfiguration from '../redux/configuration/configuration-operation';
import {
  trendingAddSuccess,
  trendingChangePageSuccess,
  trendingFirstPageSuccess,
} from '../redux/movies/movies-actions';
import { SearchQuery } from '../redux/searchMovies/searchMovies-actions';
import {
  getLoading,
  getPage,
  getResultsLength,
  getTotalPages,
} from '../redux/movies/movies-selectors';
import { getConfigurationBase_url } from '../redux/configuration/configuration-selector';
import './stylesViews/HomePage.scss';

export default function HomePage() {
  const dispatch = useDispatch();
  const configUrl = useSelector(getConfigurationBase_url);
  const isLoading = useSelector(getLoading);
  const length = useSelector(getResultsLength);
  const total_pages = useSelector(getTotalPages);
  const page = useSelector(getPage);
  const pathname = useLocation().pathname;
  const history = useHistory();

  useEffect(() => {
    if (pathname.length > 1) {
      history.push('/');
    }
  }, [pathname, history]);

  useEffect(() => {
    if (configUrl) return;

    dispatch(fetchConfiguration());
  }, [dispatch, configUrl]);

  useEffect(() => {
    dispatch(SearchQuery(''));

    dispatch(trendingMoviesAdd(page));
  }, [dispatch, page]);

  const changePage = () => {
    dispatch(trendingChangePageSuccess(1));
  };

  useEffect(() => {
    return () => {
      dispatch(trendingAddSuccess([]));
      dispatch(trendingFirstPageSuccess(1));
    };
  }, [dispatch]);

  const ShoudRenderButton = page !== total_pages;

  return (
    <div className="WrapHomeList">
      {isLoading && <Spinner />}
      {length !== 0 && (
        <>
          <h2 className="ListMoviesTitle">Trending Today:</h2>
          <MoviesList />
          {isLoading && <Spinner />}
          {ShoudRenderButton && (
            <Button onClick={changePage} text={'Load More'} />
          )}
        </>
      )}
    </div>
  );
}
