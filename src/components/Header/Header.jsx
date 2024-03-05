import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/first">First</StyledLink>
        <StyledLink to="/second">Second</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
