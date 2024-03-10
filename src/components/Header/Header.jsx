import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Navigation, StyledLink, HeaderLogo, LogoSvg, BurgerSvg, BurgerMenu, SettingsMenu, SettingsSvg, Avatar } from './Header.styled';
import sprite from '../../img/sprite.svg';
import ModalMenu from '../ProductsItem/ModalMenu';
import { useMediaQuery } from '@react-hook/media-query'; 

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const isWideScreen = useMediaQuery('(min-width: 765px)'); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const avatarUrl = useSelector((state) => state.user?.avatarURL);


  return (
    <HeaderContainer>
      <HeaderLogo>
        <a href='/'>
          <LogoSvg className="icon">
            <use xlinkHref={`${sprite}#${isWideScreen ? 'icon-logo' : 'icon-logo-mobile'}`} />
          </LogoSvg>
        </a>
      </HeaderLogo>
      <Navigation>
        
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>

        <SettingsMenu onClick={() => navigate('/profile')}>
          <SettingsSvg>
            <use xlinkHref={`${sprite}#icon-settings`}/>
          </SettingsSvg>
        </SettingsMenu>

        <Avatar src={avatarUrl} alt="User Avatar" />

        <BurgerMenu onClick={openModal}>
          <BurgerSvg>
            <use xlinkHref={`${sprite}#icon-menu`} />
          </BurgerSvg>
        </BurgerMenu>
        {isModalOpen && <ModalMenu onClose={closeModal} sprite={sprite} />}

      </Navigation>
    </HeaderContainer>
  );
};
