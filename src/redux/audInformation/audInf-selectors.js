export const getCast = state => state.audInf.cast;
export const getLengthCast = state => getCast(state).length;
export const getReviews = state => state.audInf.reviews;
export const getReviewsLength = state => getReviews(state).length;
