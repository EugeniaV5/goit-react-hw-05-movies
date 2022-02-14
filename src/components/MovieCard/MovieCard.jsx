export const MovieCard = ({ movie }) => {
  return (
    <article>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>User Score: {movie.vote_average}</p>
      <p>Overview</p>
      <p>{movie.overview}</p>
      <ul>
        <p>Genres:</p>
        {movie.genres &&
          movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </article>
  );
};
