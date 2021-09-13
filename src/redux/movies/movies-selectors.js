export const getMovies = state => state.movies.results;
export const getLoading = state => state.movies.loading;
export const getResultsLength = state => getMovies(state).length;
export const getPage = state => state.movies.page;
export const getTotalPages = state => state.movies.totalPages;
export const getSearchQuery = state => state.searchQuery;
export const getMovieDetailsTitle = state => state.movieDetails.title;
export const getMovieDetailsPoster = state => state.movieDetails.poster_path;
export const getMovieDetailsBackdropPath = state =>
  state.movieDetails.backdrop_path;
export const getRealise = state =>
  editMovieRealise(state.movieDetails.release_date);
export const getAverage = state =>
  editMovieAverage(state.movieDetails.vote_average);
export const getOverview = state => state.movieDetails.overview;
export const getGenres = state => state.movieDetails.genres;

// edit Movies Realise and Average
function editMovieRealise(realise) {
  return realise.slice(0, 4);
}
function editMovieAverage(average) {
  return Number(average) * 10;
}
