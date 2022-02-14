import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <h1>Today's trending</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
