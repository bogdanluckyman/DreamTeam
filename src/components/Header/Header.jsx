import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Navigation, StyledLink, HeaderLogo, LogoSvg, BurgerSvg, BurgerMenu, SettingsMenu, SettingsSvg, Avatar, SettingImg, LogoButton, Photo, DefauldtUserSvg } from './Header.styled';
import sprite from '../../img/sprite.svg';
import ModalMenu from '../ProductsItem/ModalMenu';
import { useMediaQuery } from '@react-hook/media-query'; 
import settingsImg from '../../img/settings-01.png';
import Logout from '../Logout/Logout';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const isWideScreen = useMediaQuery('(min-width: 765px)');
  const isLargeScreen = useMediaQuery('(min-width: 1440px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const avatarUrl = useSelector((state) => state.user?.avatarURL);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const avatarUser = avatarUrl ? <Avatar src={avatarUrl} width="100%" alt="Avatar" /> : <DefauldtUserSvg className="icon"><use xlinkHref={`${sprite}#icon-user`} /></DefauldtUserSvg>;

  return (
    <HeaderContainer>
      <HeaderLogo>
        <LogoButton onClick={() => navigate('/diary')}>
          <LogoSvg className="icon">
            <use xlinkHref={`${sprite}#${isWideScreen ? 'icon-logo' : 'icon-logo-mobile'}`} />
          </LogoSvg>
        </LogoButton>
      </HeaderLogo>
      <Navigation>
        <StyledLink to="/diary">Diary</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>
        <SettingsMenu onClick={() => navigate('/profile')}>
          <SettingImg src={settingsImg} alt="Settings" />
        </SettingsMenu>
        {isLoggedIn && avatarUser}
        <BurgerMenu onClick={openModal}>
          <BurgerSvg>
            <use xlinkHref={`${sprite}#icon-menu`} />
          </BurgerSvg>
        </BurgerMenu>
        {isModalOpen && <ModalMenu onClose={closeModal} sprite={sprite} />}
        {isLargeScreen && <Logout />}
      </Navigation>
    </HeaderContainer>
  );
};
