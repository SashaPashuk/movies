import React from 'react';
import { useSelector } from 'react-redux';
import { getReviews } from '../../../../redux/audInformation/audInf-selectors';
import './ReviewsList.scss';

const ReviewsList = () => {
  const reviews = useSelector(getReviews);
  return (
    <ul className="ReviewsList">
      {reviews.map(({ id, author, content }) => (
        <li key={id} className="ReviewsItem">
          <h3 className="ReviewsAuthor">Author: {author}:</h3>
          <p className="ReviewsContent">{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
