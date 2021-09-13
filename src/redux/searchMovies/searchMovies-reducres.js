import { createReducer } from '@reduxjs/toolkit';
import { SearchQuery } from './searchMovies-actions';

const searchQueryReducer = createReducer('', {
  [SearchQuery]: (_, { payload }) => payload,
});

export default searchQueryReducer;
