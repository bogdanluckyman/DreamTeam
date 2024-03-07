// import { useAuth } from '../../hooks/useAuth';
import { LinkNav, Svg, Nav } from './Navigation.styled';

import sprite from '../../img/sprite.svg';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinkNav to="/">
        <Svg>
          <use href={`${sprite}#icon-logo`}></use>
        </Svg>
      </LinkNav>
      {/* {isLoggedIn && <LinkNav to="/contacts">Profile Settings</LinkNav>} */}
    </Nav>
  );
};
