import { useLocation } from 'react-router-dom';
import { StyledMovieList } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledMovieList
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </StyledMovieList>
        </li>
      ))}
    </ul>
  );
};
