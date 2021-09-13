import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import CastList from './CastList';
import Spinner from '../../Spinner';
import { getLoading } from '../../../redux/movies/movies-selectors';
import { getLengthCast } from '../../../redux/audInformation/audInf-selectors';
import { fetchCast } from '../../../redux/audInformation/audInf-operations';

const Cast = () => {
  const dispatch = useDispatch();
  const {
    params: { movieId },
  } = useRouteMatch();
  const isLoading = useSelector(getLoading);
  const length = useSelector(getLengthCast);

  useEffect(() => {
    dispatch(fetchCast(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {length > 0 && <CastList />}
    </>
  );
};

export default Cast;
