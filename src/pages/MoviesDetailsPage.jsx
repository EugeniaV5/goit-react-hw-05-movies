import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';
import { Circles } from 'react-loader-spinner';

import { getMovieById } from '../services/api';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { AddInfoText, StyledLink, GoBackBtn } from './MoviesDetailsPage.styled';

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
        <GoBackBtn to={location?.state?.from ?? '/'}>
          {' '}
          <FaArrowLeft /> Go back
        </GoBackBtn>
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
        {movie && <MovieCard movie={movie} />}
      </section>
      <hr />
      <section>
        <AddInfoText>Additional information:</AddInfoText>

        <StyledLink
          to={`/movies/${movieId}/cast`}
          state={{ from: location?.state?.from }}
        >
          | Cast |
        </StyledLink>
        <StyledLink
          to={`/movies/${movieId}/reviews`}
          state={{ from: location?.state?.from }}
        >
          | Reviews |
        </StyledLink>
      </section>
      <hr />

      <Outlet />
    </main>
  );
};

export default MoviesDetailsPage;
