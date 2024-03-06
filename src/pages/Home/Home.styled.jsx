import styled from 'styled-components';

import heroMobile1 from '../../images/hero-mobile-1x.jpg';
import heroMobile2 from '../../images/hero-mobile-2x.jpg';
import heroTablet1 from '../../images/hero-tablet-1x.jpg';
import heroTablet2 from '../../images/hero-tablet-2x.jpg';
import hero1 from '../../images/hero-1x.jpg';
import hero2 from '../../images/hero-2x.jpg';

export const Container = styled.div`
  @media screen and (min-width: 375px) {
    width: 375px;
    margin: 0 auto;
    /* display: flex; */
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const HomeCont = styled.section`
  /* max-width: 1400px; */
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    min-width: 240px;
    margin: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    /* margin-left: 96px; */
  }
`;

export const RightImageContainer = styled.div`
  background-image: url(${heroMobile1});

  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  width: 298px;
  height: 669px;
  margin-top: 180px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMobile2});
  }

  @media screen and (min-width: 375px) {
    background-position-y: bottom;
    height: 681px;
    margin-top: -242px;
    margin-left: 77px;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${heroTablet1});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroTablet2});
    }

    width: 670px;
    height: 893px;
    margin-top: 46px;
    margin-left: -3px;
  }
  @media screen and (min-width: 1440px) {
    background-size: 100%;
    background-image: url(${hero1});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${hero2});
    }

    width: 670px;
    height: 800px;
    margin-left: 76px;
    margin-top: -85px;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 70px;

  @media screen and (min-width: 768px) {
    gap: 56px;
  }
  @media screen and (min-width: 1440px) {
    gap: 39px;
  }
`;

export const VideoTutorial = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 12px;
  /* padding: 20px; */
  border-radius: 12px;
  background: #303030;
  /* margin-left: 42px; */
  margin-top: 432px;
  width: 146px;
  height: 66px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 206px;
    height: 96px;
    margin-left: 64px;
    margin-top: 582px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 384px;
    margin-left: 0;
  }
`;

export const IconPlay = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: auto; */
  border-radius: 50%;
  margin-left: 16px;
  /* padding: 9px; */
  background-color: #ef8964;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    /* padding: 11px; */
  }
`;

export const Svg = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const VideoTutorialTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const VideoTutorialText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  white-space: nowrap;
  padding-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CaloriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-left: 163px;

  width: 119px;
  height: 76px;

  border-radius: 12px;
  background: #ef8964;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    gap: 12px;

    margin-right: 32px;
    margin-left: 287px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 458px;
  }
`;

export const IconRun = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 18px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 4px;
  background-color: #efa082;

  @media screen and (min-width: 768px) {
    margin-left: 28px;
    width: 24px;
    height: 24px;
  }
`;

export const SvgRun = styled.svg`
  display: block;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const SpanRun = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  text-transform: lowercase;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const TitleRunMan = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1; /* 100% */
  letter-spacing: -1px;
  text-transform: uppercase;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 770px;

    margin-top: 90px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 140px;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 160px;
  }
`;

export const HomeTitle = styled.h1`
  width: 335px;

  font-family: inherit;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: 0.38px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    width: 598px;

    font-size: 70px;
    font-weight: 500;
    line-height: 1.12;
    letter-spacing: 0.7px;
  }
`;
// export const Header = styled.div`
//   background-color: dark;
// `;

export const SvgLineBody = styled.svg`
  position: absolute;
  top: 43px;
  left: -8px;
  width: 98px;
  height: 35px;

  @media screen and (min-width: 768px) {
    top: 85px;
    left: -17px;
    width: 185px;
    height: 67px;
  }
`;
