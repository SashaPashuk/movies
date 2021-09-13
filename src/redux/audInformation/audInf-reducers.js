import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addCastSuccess, addReviewsSuccess } from './audInf-actions';

const castReducer = createReducer([], {
  [addCastSuccess]: (_, { payload }) => payload,
});

const reviewsReducer = createReducer([], {
  [addReviewsSuccess]: (_, { payload }) => payload,
});

const audInfReducer = combineReducers({
  cast: castReducer,
  reviews: reviewsReducer,
});

export default audInfReducer;
