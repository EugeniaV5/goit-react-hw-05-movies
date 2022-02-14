import noImage from '../../images/noImage.jpg';

export const CastItem = ({ casts }) => {
  return (
    <article>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                alt={cast.name}
              />
            ) : (
              <img src={noImage} alt={cast.name} width="185" />
            )}

            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
