import {
  CardInfoWrapper,
  CardInfo,
  CardItem,
  CardGenresList,
  CardGenresItem,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  return (
    <CardInfoWrapper>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <CardInfo>
        <h2>{movie.title}</h2>
        <CardItem>User Score: {movie.vote_average}</CardItem>
        <CardItem>Overview:</CardItem>
        <CardItem>{movie.overview}</CardItem>
        <CardItem>Genres:</CardItem>
        <CardGenresList>
          {movie.genres &&
            movie.genres.map(({ id, name }) => (
              <CardGenresItem key={id}>{name}</CardGenresItem>
            ))}
        </CardGenresList>
      </CardInfo>
    </CardInfoWrapper>
  );
};
