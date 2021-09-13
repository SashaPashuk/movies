import axios from 'axios';
import {
  detailsMovieError,
  detailsMovieRequest,
  detailsMovieSuccess,
  trendingAddError,
  trendingAddRequest,
  trendingAddSuccess,
  trendingChangePageError,
  trendingLoadMoreSuccess,
  trendingTotalPagesSuccess,
} from './movies-actions';
import {
  searchMoviesRequest,
  searchMoviesError,
  SearchQuery,
} from '../searchMovies/searchMovies-actions';
import { error } from '../error/error-reducer';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dd5d1869904b4aaed3590a927b3d890c';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const trendingMoviesAdd = (page = 1) => async dispatch => {
  dispatch(trendingAddRequest());

  try {
    const {
      data: { results, total_pages },
    } = await axios.get('trending/movie/day', {
      params: { page },
    });

    page > 1
      ? dispatch(trendingLoadMoreSuccess(results))
      : dispatch(trendingAddSuccess(results));

    dispatch(trendingTotalPagesSuccess(total_pages));
  } catch (error) {
    dispatch(trendingAddError(error));
    dispatch(trendingChangePageError(error));
  }
};

export const movieDetailsPage = id => async dispatch => {
  dispatch(detailsMovieRequest());

  try {
    const { data } = await axios.get(`/movie/${id}`);

    dispatch(detailsMovieSuccess(data));
  } catch (error) {
    dispatch(detailsMovieError(error));
  }
};

export const fetchSearchMovies = (query, page = 1) => async dispatch => {
  dispatch(searchMoviesRequest());

  try {
    const {
      data: { results, total_pages },
    } = await axios.get('/search/movie', {
      params: { query, page },
    });

    if (results.length === 0) {
      setTimeout(() => dispatch(error(false)), 3000);
      dispatch(error(true));
      dispatch(searchMoviesError());
      return;
    }

    page === 1
      ? dispatch(trendingAddSuccess(results))
      : dispatch(trendingLoadMoreSuccess(results));

    dispatch(SearchQuery(query));
    dispatch(trendingTotalPagesSuccess(total_pages));
  } catch (error) {
    dispatch(searchMoviesError(error));
  }
};
