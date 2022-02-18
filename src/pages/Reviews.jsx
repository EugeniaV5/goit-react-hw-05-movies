import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

import { getMovieReviews } from '../services/api';
import { ReviewItem } from '../components/ReviewItem/ReviewItem';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId]);

  const fetchReviews = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await getMovieReviews(movieId);
      setReviews(data.results);
    } catch (error) {
      //   toast.error('Page is not found');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isLoading && (
        <div className="Loader">
          <Circles
            color="#f07416"
            arialLabel="loading-indicator"
            height={80}
            width={80}
          />
        </div>
      )}
      {reviews.length !== 0 ? (
        <ReviewItem reviews={reviews} />
      ) : (
        <p>We do not have reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
