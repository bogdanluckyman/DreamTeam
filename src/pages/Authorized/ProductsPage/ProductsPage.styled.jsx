import styled from 'styled-components';
import bgImg from '../../../img/products-background-meal.jpg';
import bgImg2 from '../../../img/products-background-meal.@2x.jpg';

export const BgWrap = styled.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`;

export const Container = styled.div`
  width: 375px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    position: relative;
    padding: 148px 0 81px 96px;
    width: 1440px;
    height: 716px;
  }
`;

export const RightImageContainer = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: 100%;
    background-image: url(${bgImg});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImg2});
    }

    width: 428px;
    height: 716px;
  }
`;

export const TopLineWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`;

export const LoaderWrap = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`;
