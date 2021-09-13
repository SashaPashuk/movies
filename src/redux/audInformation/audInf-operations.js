import axios from 'axios';
import {
  addCastError,
  addCastRequest,
  addCastSuccess,
  addReviewsError,
  addReviewsRequest,
  addReviewsSuccess,
} from './audInf-actions';

export const fetchCast = id => async dispatch => {
  dispatch(addCastRequest());

  try {
    const {
      data: { cast },
    } = await axios.get(`/movie/${id}/credits`);

    dispatch(addCastSuccess(cast));
  } catch (error) {
    dispatch(addCastError(error));
  }
};

export const fetchReviews = id => async dispatch => {
  dispatch(addReviewsRequest());

  try {
    const {
      data: { results },
    } = await axios.get(`/movie/${id}/reviews`);

    dispatch(addReviewsSuccess(results));
  } catch (error) {
    dispatch(addReviewsError());
  }
};
