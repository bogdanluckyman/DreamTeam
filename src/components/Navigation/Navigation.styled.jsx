import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  /* padding: 12px; */
  font-weight: 700;

  font-size: 20px;

  &:hover {
    color: goldenrod;
  }
  &.active {
    color: goldenrod;
  }
`;

export const Nav = styled.nav`
  /* max-width: 375px; */
  /* margin: 0 auto; */
  padding: 25px 18px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 32px 96px;
  }
`;

export const Svg = styled.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;
