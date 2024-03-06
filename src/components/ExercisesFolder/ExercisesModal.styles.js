import styled from 'styled-components';

export const ExercisesModalBackground = styled.div`
  /* display: none; */
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ExercisesModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: #10100f;
  margin: 15% auto;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 788px;
  }
  @media screen and (min-width: 768px) {
    width: 694px;
    height: 550px;
  }
`;
export const ExercisesInnerModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 788px;
    padding: 48px 16px;
  }
  @media screen and (min-width: 768px) {
    width: 694px;
    height: 550px;
    padding: 48px 32px;
    display: flex;
    gap: 16px;
  }
`;

export const TimerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
`;

export const ExercisesModalImg = styled.img`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 270px;
  height: 226px;
  background-color: white;
  margin-bottom: 14px;
`;

export const TimerText = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: rgba(239, 237, 232, 0.4);
  margin-bottom: 4px;
`;
export const ExercisesModalGif = styled.div`
  width: 125px;
  height: 124px;
  margin-bottom: 14px;
  color: #efede8;
`;

export const PlayPause = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  margin-bottom: 8px;
  padding: 0px;
`;
export const BurnedCalories = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const TimeSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #e6533c;
`;
export const DataContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 375px) {
    width: 302px;
  }
  @media screen and (min-width: 768px) {
    width: 345px;
  }
`;

export const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #10100f;
  gap: 8px;

  @media screen and (min-width: 375px) {
    width: 302px;
    height: 132px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 345px;
    height: 148px;
    margin-bottom: 258px;
  }
`;

export const ExercisesBlock = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 12px 18px;
  width: 147px;
  height: 62px;
  background: rgba(239, 237, 232, 0.05);
  @media screen and (min-width: 375px) {
    width: 147px;
    height: 62px;
  }
  @media screen and (min-width: 768px) {
    width: 169px;
    height: 70px;
  }
`;

export const ExercisesBlockText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
`;

export const ExercisesBlockResalts = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #efede8;
`;
export const ExercisesBlockButton = styled.button`
  border-radius: 12px;
  padding: 12px 32px;
  width: 151px;
  height: 42px;
  background-color: #e6533c;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-weight: 500;
  font-size: 16px;
  color: #efede8;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    padding: 14px 32px;
    height: 52px;
  }
`;
export const CloseExercisesContainer = styled.button`
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  position: absolute;
  margin-left: 655px;
  margin-top: 16px;
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
