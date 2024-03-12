import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 335px;
  margin: 77px 20px 0px;
  @media screen and (min-width: 768px) {
    max-width: 240px;
    margin: 128px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-left: 96px;
  }
`;

export const SignUpTittle = styled.h1`
  font-size: 24px;
  line-height: 1.37;
  margin-bottom: 14px;
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

export const SignUpText = styled.p`
  width: 335px;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 28px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 496px;
    margin-bottom: 32px;
  }
`;
