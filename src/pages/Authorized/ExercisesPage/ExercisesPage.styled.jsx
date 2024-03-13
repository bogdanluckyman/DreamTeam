import styled from 'styled-components';
// ............................
import bgImage from '../../../img/hero-background-gym-1.jpg';
import bgImage2 from '../../../img/hero-background-gym-2x.jpg';
// .....................................

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 19px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 96px;
  }
`;

export const ExercisesPageContainer = styled.div`
  margin-left: 0;

  background-color: #040404;
  color: #efede8;
  min-height: 100vh;
  padding-top: 72px;
`;

export const NavgtionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    display: block;
    max-width: 335px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1248px;
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    margin-top: 10px;
    margin-left: -8px;
  }
`;

export const CardContainer = styled.div`
  margin: 0 auto;
  position: relative;
  padding-top: 64px;

  @media (max-width: 767px) {
    padding-top: 40px;
  }
`;

export const Card = styled.li`
  width: 237px;
  height: 206px;
  background-color: gray;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  position: relative;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 224px;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    width: 90%;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }
`;

export const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: calc(237px * 5 + 20px * 5);
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: calc(237px * 3 + 20px * 3);
    margin: 0 auto;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    max-width: calc(335px * 1 + 20px * 1);
    margin: 0 auto;
  }
`;

export const TabButton = styled.button`
  background-color: ${(props) => (props.isActive ? '#EFEDE8' : 'transparent')};
  color: ${(props) => (props.isActive ? '#EFEDE8' : 'white')};
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:not(.active) {
    opacity: 0.4;
  }

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #ef8964;
    animation: slideIn 4s ease forwards;
    border-radius: 2px;
  }
`;

export const NavigationPanel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CircleButton = styled.button`
  background-color: #efede8;
  padding: 5px;
  margin: 0 5px;
  border-radius: 50%;
  border: 2px solid black;
  width: 25px;
  height: 25px;
  opacity: 10%;

  &:hover,
  &:focus {
    background-color: ##e6533c;
    opacity: 100%;
  }
`;

// ------------------------------------
export const ContainerPageExercise = styled.div`
  /* border: 2px solid red;
  position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;

    margin-top: 78px;
    margin-bottom: 70px;
  }

  @media (max-width: 374px) {
  }
`;
export const Block = styled.div`
  text-align: center;
`;

export const ExerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const MixContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`;

export const BackButton = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: #FFFFFF
  font-size: 10px;
  font-weight: 400;
  line-height: 1.167;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.167;
  }

  > svg {
    stroke: #FFFFFF
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    color: #E6533C;
    cursor: pointer;

    > svg {
      stroke: #E6533C;
      width: 16px;
      height: 16px;
    }
  }
`;

export const CustomBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgImage});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgImage2});
  }
`;
