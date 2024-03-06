import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroMobile1 from '../../img/hero-background-mobile-1x.jpg';
import heroMobile2 from '../../img/hero-background-mobile-2x.jpg';
import heroTablet1 from '../../img/hero-background-tablet-1x.jpg';
import heroTablet2 from '../../img/hero-background-tablet-1x.jpg';
import hero1 from '../../img/hero-background-1x.jpg';
import hero2 from '../../img/hero-background-2x.jpg';

export const Section = styled.div`
  background:
    linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    lightgray 50% / cover no-repeat;

  position: relative;
  background-image: url(${heroMobile1});
  background-image: -webkit-image-set(
    url(${heroMobile1}) ; 1x,
    url(${heroMobile2}) ; 2x
  );
  color: #efede8;
  background-repeat: no-repeat;
  background-color: var(--black-color);
  background-position: bottom 0 right -40%;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  //background-size: contain;

  margin-rigth: 50px;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-rigth: 450px;
  }

  @media screen and (min-width: 768px) {
    background:
      linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      lightgray 50% / cover no-repeat;

    background-repeat: no-repeat;
    width: 768px;
    height: 1005px;
    background-color: rgba(0, 0, 0, 1);

    background-image: url(${heroTablet1});
    background-image: -webkit-image-set(
      url(${heroTablet1}) ; 1x,
      url(${heroTablet2}) ; 2x
    );
    background-position: bottom 0 right 0%;
  }

  @media screen and (min-width: 1440px) {
    background:
      linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      lightgray 50% / cover no-repeat;
    width: 1440px;
    height: 800px;

    background-repeat: no-repeat;
    background-position: bottom 0 right 0%;

    background-color: rgba(0, 0, 0, 1);

    background-image: url(${hero1});
    background-image: -webkit-image-set(url(${hero1}) ; 1x, url(${hero2}) ; 2x);
  }
`;

export const SideContent = styled.div`
  background: var(--orange-color);
  max-width: calc(64%);
  float: left;
  height: 100%;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    max-width: none;
    width: 420px;
    padding: 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 32px 96px;
  }
`;

export const Content = styled.div`
  margin-bottom: auto;
`;

export const TitleErr = styled.h1`

color: var(--white-color)
font-family: Roboto;
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.66px;
  margin: 0;
font-style: normal;
font-weight: 500;



  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 0.93;
    letter-spacing: 1.6px;
    
  }
`;

export const TextErr = styled.p`
color: var(--white-color)
font-family: Roboto;
  font-size: 14px;
  margin-top: 14px;
  font-style: normal;
  font-weight: 400;

  
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    margin-top: 28px;
    line-height: calc(24 / 16);
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`;

export const StyledLink = styled(Link)`
color: var(--white-color)
  position: absolute;
  left: 32px;
  top: 32px;
  display: flex;
    gap: 8px;

   @media screen and (min-width: 1440px) {
  left: 96px;
  }
`;

export const Svg = styled.svg`
  width: 40px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 44pxpx;
    height: 17px;
  }
`;
