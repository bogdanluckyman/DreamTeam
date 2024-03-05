import { useState } from 'react';
import FormModal from './FormModal';
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

export const ProductItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ProductWrapp>
        <TopLineWrapper>
          <DietMark>
            <p>diet</p>
          </DietMark>
          <TopLineRightWrapper>
            <RecomendedLight></RecomendedLight>
            <p>rec</p>
            <AddBtn type="button" onClick={openModal}>
              Add
              <img></img>
            </AddBtn>
          </TopLineRightWrapper>
        </TopLineWrapper>

        <img src="" alt="" />
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
      {isModalOpen && <FormModal onClose={closeModal} />}
    </>
  );
};
