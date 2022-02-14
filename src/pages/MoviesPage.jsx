import { SearchBar } from '../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../services/api';
import { MoviesList } from '../components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        setIsLoading(true);
        try {
          const { data } = await getMoviesByQuery(query);
          setMovies(data.results);
        } catch (error) {
        } finally {
          setIsLoading(false);
        }
      };
      fetchMovies();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage;
