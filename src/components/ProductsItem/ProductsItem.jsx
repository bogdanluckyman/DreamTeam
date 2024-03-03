import { DietMark, ProductWrapp, RecomendedLight } from './ProductsItem.styled';

export const ProductItem = ({ product }) => {
  return (
    <ProductWrapp>
      <DietMark>
        <p>diet</p>
      </DietMark>
      <RecomendedLight></RecomendedLight>
      <p>rec</p>
      <AddBtn type="button" />
      <img src="" alt="" />
      <ProductName>{product.title}</ProductName>
      <dl>
        <Term>Calories</Term>:<dd>{product.calories}</dd>
        <Term>Category</Term>:<dd>{product.category}</dd>
        <Term>Weight:</Term>:<dd>{product.weight}</dd>
      </dl>
    </ProductWrapp>
  );
};
