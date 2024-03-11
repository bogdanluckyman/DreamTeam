import styled from 'styled-components';
import bgImg from '../../../img/products-background-meal.jpg';
import bgImg2 from '../../../img/products-background-meal.@2x.jpg';

export const Container = styled.div`
  display: flex;
`;

export const RightImageContainer = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;

    background-size: 100%;
    background-image: url(${bgImg});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImg2});
    }

    width: 670px;
    height: 800px;
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
  }
`;
