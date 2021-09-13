import { configureStore } from '@reduxjs/toolkit';
import { movieDetailsReducer, moviesReducer } from './movies/movies-reducers';
import audInfReducer from './audInformation/audInf-reducers';
import configuration from './configuration/configuration-reducer';
import searchQueryReducer from './searchMovies/searchMovies-reducres';
import errorSlice from './error/error-reducer';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    searchQuery: searchQueryReducer,
    audInf: audInfReducer,
    configuration,
    error: errorSlice.reducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
});

export default store;
