import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Spinner from '../../Spinner';
import ReviewsList from './ReviewsList';
import ReviewsDefaultPage from './ReviewsDefaultPage';
import { getLoading } from '../../../redux/movies/movies-selectors';
import { getReviewsLength } from '../../../redux/audInformation/audInf-selectors';
import { fetchReviews } from '../../../redux/audInformation/audInf-operations';

const Reviews = () => {
  const dispatch = useDispatch();
  const {
    params: { movieId },
  } = useRouteMatch();
  const isLoading = useSelector(getLoading);
  const length = useSelector(getReviewsLength);

  useEffect(() => {
    dispatch(fetchReviews(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {length !== 0 ? <ReviewsList /> : <ReviewsDefaultPage />}
    </>
  );
};

export default Reviews;
