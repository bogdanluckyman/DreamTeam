import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const BtnNext = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${colors.orange};
    }
  }
`;

export const DateLabel = styled.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${colors.white};
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.orange};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`;

export const CalenderIconSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${colors.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const CalenderBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  /* margin-right: 40px; */
  background-color: transparent;
  gap: 8px;
  border: none;

  @media screen and (max-width: 767px) {
    margin-right: 20px;
    gap: 6px;
  }

  &:hover {
    > svg {
      stroke: ${colors.orange};
    }
  }
`;

export const BtnPrev = styled.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${colors.orange};
    }
  }
`;

export const SvgPrev = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${colors.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`;

export const SvgNext = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${colors.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;
