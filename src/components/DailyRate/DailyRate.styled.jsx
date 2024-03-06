import styled from 'styled-components';

export const Container = styled.div`
// position: relative;
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 17px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: var(--orange-color);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
    
    align-items: flex-start;
    // gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
    
    align-items: flex-start;
    // gap: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--orange-color);
  stroke: var(--orange-color);
  margin-bottom: 10px;
`;



export const Text = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.33; 

font-feature-settings: 'clig' off, 'liga' off;



   @media screen and (min-width: 1440px) {
    
     line-height: 18px;
   }
`;

export const Value = styled.p`

// position: absolute;
//     bottom: 0;
//     left: 18;
  color: var(--white-color);
  font-family: 'Roboto';
  // font-size: 24px;
  line-height: 1.3;
  margin-top: auto;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`;