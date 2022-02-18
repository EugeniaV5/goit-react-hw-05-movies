import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { StyledLink } from './HomePage.styled';

import { getTrending } from '../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await getTrending();
      setMovies(data.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
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
      <h1>Today's trending</h1>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default HomePage;
