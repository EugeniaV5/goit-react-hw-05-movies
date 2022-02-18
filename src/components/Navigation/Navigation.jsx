// import { NavLink } from 'react-router-dom';
import { StyledNavLink } from './Navigation.styled';

const Navigation = () => (
  <div>
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>
    <hr />
  </div>
);

export default Navigation;
