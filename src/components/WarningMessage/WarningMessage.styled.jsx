import styled from 'styled-components';

export const Wrappers = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrappper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`;

export const WrapperMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
   width: 24px;
   height: 24px;
  background-color: var(--beige-color);
`;

export const Text = styled.p`
  color: var(--more-light-grey-color);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */
  

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5; /* 150% */
  }

 
`;
  

 