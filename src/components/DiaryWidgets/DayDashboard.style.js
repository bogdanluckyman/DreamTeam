import styled from 'styled-components';
import {
  colors
} from '../../styles/colors';

export const ContainerWrap = styled.div `
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;

export const ListStyled = styled.ul `
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }

  > li {
    &:nth-child(1) {
      background-color: ${colors.orange};
    }

    &:nth-child(2) {
      background-color: ${colors.orange};
    }
  }
`;

export const ItemListStyled = styled.li `
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${colors.black};
  border-radius: 12px;
  border: 1px solid #efede833;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
    height: 96px;
    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }

  &.redBg {
    border: 1px solid #e9101d;
  }

  &.greenBg {
    border: 1px solid #3cbf61;
    background-color: #3cbf80;
  }
`;

export const TitleStyledWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`;

export const TitleStyled = styled.h2 `
  font-size: 12px;
  line-height: 16px;
  color: ${colors.white};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`;

export const DataValue = styled.p `
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${colors.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TextWrapper = styled.div `
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`;

export const SvgWrapperText = styled.div `
  width: 24px;
  height: 24px;
  background-color: ${colors.beige};
  border-radius: 50%;
`;

export const SvgStyled = styled.svg `
  width: 20px;
  height: 20px;
  fill: ${colors.orangeSecond};
`;

export const ExclamationSvg = styled.svg `
  width: 24px;
  height: 24px;
`;

export const TextStyled = styled.p `
  font-size: 14px;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;