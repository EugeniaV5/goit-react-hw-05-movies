import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #000000;
  margin: 20px auto;

  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    color: #2196f3;
  }

  &.active {
    color: #2196f3;
  }
`;
