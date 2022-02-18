import propTypes from 'prop-types';

import noImage from '../../images/noImage.jpg';
import { CastWrapper, StyledCastItem } from './CastItem.styled';

export const CastItem = ({ casts }) => {
  return (
    <article>
      <CastWrapper>
        {casts.map(cast => (
          <StyledCastItem key={cast.id}>
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
          </StyledCastItem>
        ))}
      </CastWrapper>
    </article>
  );
};

CastItem.propTypes = {
  casts: propTypes.arrayOf(propTypes.object).isRequired,
};
