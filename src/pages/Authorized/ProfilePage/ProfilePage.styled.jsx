import styled from 'styled-components';

export const Container = styled.div`
background-color:  var(--black-color);
padding-top: 40px;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-left: 32px;
    margin-right: 32px;
    padding-top: 72px;
   
  }

  @media screen and (min-width: 1440px) {
    margin-left: 96px;
    margin-right: 96px;
    padding-bottom: 40px;
  }
`;

export const WrapperContent = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`;

export const WrapperForm = styled.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;

  }
`;