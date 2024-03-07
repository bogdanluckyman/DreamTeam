import styled from 'styled-components';

export const ProductsCatalogueWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 660px;
    overflow: scroll;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 488px;
  }
`;

export const ProductsCatalogue = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`;
