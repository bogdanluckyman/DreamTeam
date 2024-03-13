import styled from 'styled-components';

import img from '../../img/Thumb_up.png';
export const ExercisesWellDoneBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;
export const ExercisesWellDoneContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  background: #10100f;
  margin: 15% auto;
  @media screen and (min-width: 375px) {
    width: 335px;
    height: 384px;
  }
  @media screen and (min-width: 768px) {
    width: 430px;
    height: 439px;
  }
`;
export const InnerExercisesWellDoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 375px) {
    padding: 48px 89px;
  }
  @media screen and (min-width: 768px) {
    padding: 64px 134px;
  }
`;
export const ExercisesWellDoneImg = styled.div`
  width: 117px;
  height: 73px;
  margin-bottom: 27px;
  background-image: url(${img});
`;
export const ExercisesText = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #efede8;
`;
export const ExercisesParagraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 4px;
`;
export const ExercisesSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #e6533c;
  margin-left: 8px;
`;
export const ExercisesNextProduct = styled.button`
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
  margin-bottom: 16px;
  @media screen and (min-width: 375px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
export const ExercisesDiaryButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  padding: 0;
  color: rgba(239, 237, 232, 0.3);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`;
export const CloseWellDoneContainer = styled.button`
  position: absolute;
  margin-top: 22.5px;
  padding: 0;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 375px) {
    margin-left: 297px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 391px;
  }
`;
