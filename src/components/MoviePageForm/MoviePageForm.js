import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { trendingFirstPageSuccess } from '../../redux/movies/movies-actions';
import { SearchQuery } from '../../redux/searchMovies/searchMovies-actions';
import './MoviePageForm.scss';

const MoviePageForm = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeInput = ({ currentTarget: { value } }) => {
    setSearchQuery(value);
  };

  const handlerSubmitForm = e => {
    e.preventDefault();

    dispatch(SearchQuery(searchQuery));

    dispatch(trendingFirstPageSuccess(1));

    setSearchQuery('');
  };

  return (
    <div className="WrapForm">
      <form onSubmit={handlerSubmitForm} className="Form">
        <label className="FormLabel">
          <input
            type="text"
            className="FormInput"
            value={searchQuery}
            onChange={handleChangeInput}
            placeholder="Search Movie..."
          />
        </label>
        <button type="submit" className="BtnSubmit">
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviePageForm;
