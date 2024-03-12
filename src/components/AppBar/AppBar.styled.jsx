import styled from 'styled-components';

export const Header = styled.header`
  /* width: 100%; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* padding: 25px 18px; */

  @media screen and (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media screen and (min-width: 768px) {
    /* padding-left: 32px; */
    /* padding-top: 32px; */
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    /* padding: 32px 96px; */
    width: 1440px;
  }
`;
