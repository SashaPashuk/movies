import { createAction } from '@reduxjs/toolkit';

//Trending Movies
export const trendingAddRequest = createAction('trendingMovies/addRequest');
export const trendingAddSuccess = createAction('trendingMovies/addSuccess');
export const trendingAddError = createAction('trendingMovies/addError');
export const trendingLoadMoreSuccess = createAction(
  'trendingMovies/LoadMoreSuccess',
);

// Trending Movies Total Pages
export const trendingTotalPagesSuccess = createAction(
  'trendingMovies/totalPagesSuccess',
);

//Change Page
export const trendingChangePageRequest = createAction(
  'trendingMovies/ChangePageRequest',
);
export const trendingChangePageSuccess = createAction(
  'trendingMovies/ChangePageSuccess',
);
export const trendingChangePageError = createAction(
  'trendingMovies/ChangePageError',
);
export const trendingFirstPageSuccess = createAction(
  "'trendingMovies/FirstPageSuccess",
);

// Movies Details
export const detailsMovieRequest = createAction('movies/detailsMovieRequest');
export const detailsMovieSuccess = createAction('movies/detailsMovieSuccess');
export const detailsMovieError = createAction('movies/detailsMovieError');
