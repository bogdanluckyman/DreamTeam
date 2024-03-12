import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  justify-content: space-between;
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  background-color: black;

  width: 100%; 
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 96px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  @media (max-width: 1439px) {
    display: none;
  }
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 8px 16px;
  color: #ffffff;

  transition: color 0.3s, text-shadow 0.3s;

  &:hover,
  &:focus {
    background-color: #e6533c;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
  box-shadow: 0 0 5px #00baff, 0 0 10px #00baff, 0 0 20px #00baff, 0 0 40px #00baff, 0 0 80px #00baff;
`;

export const HeaderLogo = styled.div`
  @media (min-width: 765px) {
    width: 151px;
    height: 17px;
  }
  width: 126px;
  height: 13px;
`;

export const BurgerMenu = styled.button`
  @media (max-width: 1439px) {
    width: 24px;
    height: 24px;
    display: block;
  }
  display: none;
  background-color: transparent;
  border: none;
`;

export const SettingsMenu = styled.a`
  margin-top: -5px;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
`;

export const BurgerSvg = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: -8px;
  margin-top: -3px;
`;

export const SettingsSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const LogoSvg = styled.svg`
  width: 136px;
  height: 13px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const SettingImg = styled.img`
  width: 28px;
  height: 28px;
  @media (max-width: 764px) {
    width: 24px;
    height: 24px;
  }

  transition: transform 1s;
  &:hover,
  &:focus {
    transform: rotate(180deg);
  }
`;

export const LogoButton = styled.a`
  cursor: pointer;
`;

export const Photo = styled.img``;

export const DefauldtUserSvg = styled.svg`
  width: 46px;
  height: 46px;
  border-radius: 25px;
  border: 1px #e6533c solid;

  @media (max-width: 764px) {
    width: 37px;
    height: 37px;
  }
`;
