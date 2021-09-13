import { createAction } from '@reduxjs/toolkit';

// SearchQuery
export const SearchQuery = createAction('searchMovies/searchQuery');

//Search Movies Page
export const searchMoviesRequest = createAction(
  'searchMovies/searchMoviesRequest',
);
export const searchMoviesSuccess = createAction(
  'searchMovies/searchMoviesSuccess',
);
export const searchMoviesError = createAction('searchMovies/searchMoviesError');
