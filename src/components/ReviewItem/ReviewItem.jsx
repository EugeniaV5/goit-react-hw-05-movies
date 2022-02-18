import propTypes from 'prop-types';

import { ReviewAuthor, ReviewText } from './ReviewItem.styled';

export const ReviewItem = ({ reviews }) => {
  return (
    <article>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewAuthor>{review.author}</ReviewAuthor>
            <ReviewText>{review.content}</ReviewText>
          </li>
        ))}
      </ul>
    </article>
  );
};

ReviewItem.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};
