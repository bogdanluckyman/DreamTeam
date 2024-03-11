import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Navigation, StyledLink, HeaderLogo, LogoSvg, BurgerSvg, BurgerMenu, SettingsMenu, SettingsSvg, Avatar, SettingImg, LogoButton } from './Header.styled';
import sprite from '../../img/sprite.svg';
import ModalMenu from '../ProductsItem/ModalMenu';
import { useMediaQuery } from '@react-hook/media-query'; 
import settingsImg from '../../img/settings-01.png';

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
