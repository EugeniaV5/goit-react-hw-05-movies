import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';

import { getMovieById } from '../services/api';
import { MovieCard } from '../components/MovieCard/MovieCard';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  useEffect(() => {
    fetchMovies(movieId);
  }, [movieId]);
  console.log(movie);

  const fetchMovies = async movieId => {
    setIsLoading(true);
    try {
      const { data } = await getMovieById(movieId);
      setMovie(data);
    } catch (error) {
      toast.error('Page is not found');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section>
        <Link to={location?.state?.from ?? '/'}>
          {' '}
          <FaArrowLeft /> Go back
        </Link>
        {movie && <MovieCard movie={movie} />}
      </section>
      <hr />
      <section>
        <p>Additional information</p>
        <Link
          to={`/movies/${movieId}/cast`}
          state={{ from: location?.state?.from }}
        >
          Cast
        </Link>
        <Link
          to={`/movies/${movieId}/reviews`}
          state={{ from: location?.state?.from }}
        >
          Reviews
        </Link>
      </section>
      <Outlet />
    </main>
  );
};

export default MoviesDetailsPage;
