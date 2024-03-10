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
  TitleWrap,
  TopLineRightWrapper,
  TopLineWrapper,
} from './ProductsItem.styled';

import sprite from '../../img/symbol-defs.svg';
import { colors } from '../../styles/colors';
import ModalMenu from './ModalMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { capitalizeFirstLetter } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

export const ProductItem = ({ product }) => {
  const userBlood = useSelector(selectUser).blood;
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
            {product.groupBloodNotAllowed[userBlood] ? (
              <>
                <svg width="14" height="14">
                  <use href={`${sprite}#icon-circle-green`}></use>
                </svg>
                <p>Recommended</p>
              </>
            ) : (
              <>
                <svg width="14" height="14">
                  <use href={`${sprite}#icon-circle-red`}></use>
                </svg>
                <p>Not recommended</p>
              </>
            )}

            <AddBtn type="button" onClick={openModal}>
              <p>Add</p>
              <svg width="16" height="16">
                <use
                  href={`${sprite}#icon-next`}
                  style={{
                    stroke: colors.orange,
                  }}
                  width="16"
                ></use>
              </svg>
            </AddBtn>
          </TopLineRightWrapper>
        </TopLineWrapper>

        <>
          <TitleWrap>
            <svg width="24" height="24">
              <use href={`${sprite}#icon-man-run`}></use>
            </svg>
            <ProductName>{capitalizeFirstLetter(product.title)}</ProductName>
          </TitleWrap>
          <List>
            <Term>Calories:</Term>
            <Definition>{product.calories}</Definition>
            <Term>Category:</Term>
            <Definition>{capitalizeFirstLetter(product.category)}</Definition>
            <Term>Weight:</Term>
            <Definition>{product.weight}</Definition>
          </List>
        </>
      </ProductWrapp>
      {/* {isModalOpen && (
        <FormModal onClose={closeModal} date={'06-03-2024'} product={product} />
      )} */}

      {isModalOpen && <ModalMenu onClose={closeModal} />}
    </>
  );
};
