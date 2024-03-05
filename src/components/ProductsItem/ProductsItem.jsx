import {
  AddBtn,
  DietMark,
  List,
  ProductName,
  ProductWrapp,
  RecomendedLight,
  Term,
  TopLineRightWrapper,
  TopLineWrapper,
} from './ProductsItem.styled';

import sprite from '../../img/symbol-defs.svg';

export const ProductItem = ({ product }) => {
  return (
    <ProductWrapp>
      <TopLineWrapper>
        <DietMark>
          <p>diet</p>
        </DietMark>
        <TopLineRightWrapper>
          <RecomendedLight></RecomendedLight>
          <p>rec</p>
          <AddBtn
            type="button"
            onClick={
              () => {}
              //відкриття модалки
            }
          >
            Add
            <img></img>
          </AddBtn>
        </TopLineRightWrapper>
      </TopLineWrapper>

      <svg width="16" height="16">
        <use href={`${sprite}#icon-man-run`}></use>
      </svg>
      <ProductName>{product.title}</ProductName>
      <List>
        <Term>Calories:</Term>
        <dd>{product.calories}</dd>
        <Term>Category:</Term>
        <dd>{product.category}</dd>
        <Term>Weight:</Term>
        <dd>{product.weight}</dd>
      </List>
    </ProductWrapp>
  );
};
