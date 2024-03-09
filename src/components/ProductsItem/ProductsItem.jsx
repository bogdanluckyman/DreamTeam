import { useState } from 'react';
import FormModal from './FormModal';
import {
  AddBtn,
  Definition,
  DietMark,
  List,
  ProductName,
  ProductWrapp,
  RecomendedLight,
  Term,
  TopLineRightWrapper,
  TopLineWrapper,
} from './ProductsItem.styled';
import ExercisesModal from '../ExercisesFolder/ExercisesModal';

import sprite from '../../img/symbol-defs.svg';

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

        <>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-man-run`}></use>
          </svg>
          <ProductName>{product.title}</ProductName>
          <List>
            <Term>Calories:</Term>
            <Definition>{product.calories}</Definition>
            <Term>Category:</Term>
            <Definition>{product.category}</Definition>
            <Term>Weight:</Term>
            <Definition>{product.weight}</Definition>
          </List>
        </>
      </ProductWrapp>
      {isModalOpen && (
        <FormModal
          onClose={closeModal}
          date={'06 - 03 - 2024'}
          product={product}
        />
      )}
      {isModalOpen && (
        <ExercisesModal
          onClose={closeModal}
          date={'06 - 03 - 2024'}
          exercies={''}
        />
      )}
    </>
  );
};
