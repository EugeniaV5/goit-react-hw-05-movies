import styled from 'styled-components';

export const CardInfoWrapper = styled.article`
  display: flex;
`;

export const CardInfo = styled.div`
  padding: 10px;
`;

export const CardItem = styled.p`
  margin-bottom: 10px;
`;

export const CardGenresList = styled.ul`
  display: flex;
`;

export const CardGenresItem = styled.ul`
  color: #2196f3;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

// export const CardImage = styled.img`
//   width: 300px;
// `;
