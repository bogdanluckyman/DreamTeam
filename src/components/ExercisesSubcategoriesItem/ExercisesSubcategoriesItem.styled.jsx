import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 280px;
  height: 206px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  transform: scale(0.98);
  opacity: 0.8;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: scale(1);
    opacity: 1;
  }

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 224px;
    font-size: 32px;
    line-height: 1.375;
  }

  @media (min-width: 1440px) {
    width: 236px;
    gap: 15px;
  }
`;

export const SubCategoryName = styled.h2`
  color: rgba(239, 237, 232, 1);
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`;
export const CategoryTitle = styled.span`
  color: rgba(239, 237, 232, 0.4);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;
