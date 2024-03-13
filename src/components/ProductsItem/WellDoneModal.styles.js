import styled from 'styled-components';
import img from '../../img/3D Food Icon by @Odafe_UI.png';
export const WellDoneBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;
export const WellDoneContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  background: #10100f;
  margin: 15% auto;
  @media screen and (min-width: 375px) {
    width: 335px;
    height: 362px;
  }
  @media screen and (min-width: 768px) {
    width: 430px;
    height: 428px;
  }
`;
export const InnerWellDoneContainer = styled.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: center;
  @media screen and (min-width: 375px) {
    padding: 48px 89px;
  }
  @media screen and (min-width: 768px) {
    padding: 64px 136px;
  }
`;
export const WellDoneImg = styled.div`
  width: 123px;
  height: 84px;
  background-image: url(${img});
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;
export const Text = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #efede8;
  margin-bottom: 0px;
`;
export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
`;
export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #e6533c;
`;
export const NextProduct = styled.button`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 12px 32px;
  width: 157px;
  height: 42px;
  background: #e6533c;
  font-weight: 500;
  font-size: 16px;
  color: #efede8;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;
export const DiaryButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  padding: 0;
  color: rgba(239, 237, 232, 0.3);

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`;
export const ParagtafDiarty = styled.p`
  margin-bottom: 0px;
`;
export const CloseWellDoneContainer = styled.button`
  stroke-width: 2px;
  stroke: #efede8;
  color: white;
  fill: white;
  position: absolute;
  background: none;
  border: transparent;
  padding: 0;
  width: 22px;
  height: 22px;
  @media screen and (min-width: 375px) {
    margin-left: 297px;
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 390px;
    margin-top: 16px;
  }
`;
export const SvgNext = styled.svg`
  margin-left: 8px;
  width: 24px;
  height: 24px;
  & use {
    stroke: rgba(239, 237, 232, 0.3);
  }
`;
