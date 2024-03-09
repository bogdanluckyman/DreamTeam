import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: auto;
  margin-top: 32px;

  @media (min-width: 768px) {
    width: 704px;
    height: 70vh;
  }

  @media (min-width: 1440px) {
    width: 850px;
    margin-top: 28px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e6533c;
    border-radius: 12px;
  }
`;

export const ExercisesListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;

export const ProductsItemStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px rgba(239, 237, 232, 0.2) solid;

  @media (min-width: 320px) {
    width: 87vw;
  }

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 1440px) {
    width: 405px;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 41px;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 335px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 20px;
  line-height: 1.2;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: auto;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;
export const WrapperText = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  align-items: center;
`;

export const Text = styled.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: #ffffff;
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;
`;

export const TextCategory = styled.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: #ffffff;
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;
