import styled from 'styled-components';

export const ProductsCatalogue = styled.ul`
  @media screen and (min-width: 768px) {
    width: 704px;

    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`;
