import styled from 'styled-components';
import bgImg from '../../../img/products-background-meal.jpg';
import bgImg2 from '../../../img/products-background-meal.@2x.jpg';

export const BgWrap = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  padding: 148px 0 81px 96px;
  width: 1440px;
  height: 716px;
  margin-left: auto;
  margin-right: auto;
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
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ContentWrap = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const TopLineWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    right: 96px;
    top: 68px;
    z-index: 2;
  }
`;
