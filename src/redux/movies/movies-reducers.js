import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addCastError,
  addCastRequest,
  addCastSuccess,
  addReviewsError,
  addReviewsRequest,
  addReviewsSuccess,
} from '../audInformation/audInf-actions';
import {
  trendingAddSuccess,
  trendingChangePageSuccess,
  trendingAddRequest,
  trendingAddError,
  // trendingChangePageRequest,
  // trendingChangePageError,
  trendingTotalPagesSuccess,
  detailsMovieSuccess,
  detailsMovieRequest,
  detailsMovieError,
  trendingLoadMoreSuccess,
  trendingFirstPageSuccess,
} from './movies-actions';
import {
  searchMoviesError,
  searchMoviesRequest,
  searchMoviesSuccess,
} from '../searchMovies/searchMovies-actions';

const resultsReducer = createReducer([], {
  [trendingAddSuccess]: (_, { payload }) => payload,
  [trendingLoadMoreSuccess]: (state, { payload }) => [...state, ...payload],
});

const totalPagesReducer = createReducer(0, {
  [trendingTotalPagesSuccess]: (_, { payload }) => payload,
});

const changePageReducer = createReducer(1, {
  [trendingChangePageSuccess]: (state, { payload }) => state + payload,
  [trendingFirstPageSuccess]: (_, { payload }) => payload,
});

const initialState = {
  title: null,
  poster_path: null,
  release_date: null,
  vote_average: null,
  overview: null,
  genres: null,
  backdrop_path: null,
};

const movieDetailsReducer = createReducer(initialState, {
  [detailsMovieSuccess]: (
    _,
    {
      payload: {
        title,
        poster_path,
        release_date,
        vote_average,
        overview,
        genres,
        backdrop_path,
      },
    },
  ) => ({
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
    backdrop_path,
  }),
});

const loadindReduser = createReducer(false, {
  [trendingAddRequest]: () => true,
  [trendingAddSuccess]: () => false,
  [trendingAddError]: () => false,

  [detailsMovieRequest]: () => true,
  [detailsMovieSuccess]: () => false,
  [detailsMovieError]: () => false,

  [addCastRequest]: () => true,
  [addCastSuccess]: () => false,
  [addCastError]: () => false,

  [addReviewsRequest]: () => true,
  [addReviewsSuccess]: () => false,
  [addReviewsError]: () => false,

  [searchMoviesRequest]: () => true,
  [searchMoviesSuccess]: () => false,
  [searchMoviesError]: () => false,

  [trendingLoadMoreSuccess]: () => false,
});

const moviesReducer = combineReducers({
  results: resultsReducer,
  page: changePageReducer,
  totalPages: totalPagesReducer,
  loading: loadindReduser,
});

export { moviesReducer, movieDetailsReducer };
