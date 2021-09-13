import { createAction } from '@reduxjs/toolkit';

export const addCastRequest = createAction('cast/addCastRequest');
export const addCastSuccess = createAction('cast/addCastSuccess');
export const addCastError = createAction('cast/addCastError');

export const addReviewsRequest = createAction('reviews/addReviewsRequest');
export const addReviewsSuccess = createAction('reviews/addReviewsSuccess');
export const addReviewsError = createAction('reviews/addReviewsError');
