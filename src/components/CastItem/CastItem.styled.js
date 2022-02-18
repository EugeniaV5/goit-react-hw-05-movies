import styled from 'styled-components';

export const CastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: -10px;
  margin-left: -10px;
`;

export const StyledCastItem = styled.li`
  /* &:not(:last-child) {
    margin-right: 10px;
  } */
  margin-top: 10px;
  margin-left: 10px;

  flex-basis: calc((100% - 30px) / 3);
`;
