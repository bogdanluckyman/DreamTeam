import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import sprite from '../../../img/sprite.svg';

import {
  TableWrapper,
  NavText,
  Nothing,
  TitleNav,
  TitleText,
  NavBlock,
  Table,
  HeaderArray,
  HeaderItem,
  ProductListArray,
  ProductListArrayItem,
  WrapperForItemsArray,
  TypeRecommendSpan,
  SvgTableStyled,
  TableDeleteButton,
  ProductListArrayItemMobile,
  MobileItemsHolder1,
  MobileItemsHolder2,
  MobileItemsHolder3,
  MobileItemsHolder4,
  ListMobileArray,
} from './DiaryProducts.style';

import { colors } from '../../../styles/colors';
import { selectUser } from '../../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteDiaryProduct,
  getAllDiaryInformation,
} from '../../../redux/diary/operation';
import Notiflix from 'notiflix';
import { selectDiaryError } from '../../../redux/diary/selectors';
import { useEffect, useState } from 'react';
import { Loader } from '../../Loader/Loader';

const DiaryProducts = ({ productsArray, date }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const userBloodType = currentUser.blood;
  const error = useSelector(selectDiaryError);
  const isMobile = useMediaQuery('(max-width:768px)');
  const [allProductsArray, setProductsArray] = useState([]);
  const isLoading = useSelector((state) => state.diary.isLoading);

  useEffect(() => {
    setProductsArray(productsArray);
  }, [productsArray]);

  const formattedTitle = (productTitle) => {
    if (typeof productTitle !== 'string' || productTitle.length === 0) {
      return '';
    }
    return productTitle[0].toUpperCase() + productTitle.slice(1).toLowerCase();
  };

  let FoodRecommended;

  const handleDelete = async (id) => {
    try {
      const res = await dispatch(deleteDiaryProduct(id));

      if (res.meta.requestStatus === 'fulfilled') {
        const updatedProductsArray = allProductsArray.filter(
          (product) => product._id !== id
        );

        setProductsArray(updatedProductsArray);
        await dispatch(getAllDiaryInformation(date));
      }

      Notiflix.Notify.success('Product deleted successfully!', {
        theme: 'light',
      });
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
  };

  return (
    <TableWrapper>
      <TitleNav>
        <TitleText>Products</TitleText>
        <NavBlock>
          <Link
            to={{
              pathname: '/products',
              search: `?date=${date}`,
            }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavText>Add product</NavText>
            <svg
              style={{
                width: '16px',
                height: '16px',
                marginLeft: '8px',
                stroke: colors.orange,
              }}
            >
              <use href={sprite + '#icon-arrow-right'} />
            </svg>
          </Link>
        </NavBlock>
      </TitleNav>
      {isLoading ? (
        <Loader />
      ) : allProductsArray && allProductsArray.length > 0 && !error ? (
        isMobile ? (
          <Table>
            <WrapperForItemsArray>
              {allProductsArray.map((product) => {
                const type = product.productID.groupBloodNotAllowed[
                  userBloodType
                ]
                  ? 'Yes'
                  : 'No';

                return (
                  <ProductListArray key={product._id}>
                    <ProductListArrayItemMobile>
                      Title
                    </ProductListArrayItemMobile>
                    <ProductListArrayItemMobile>
                      {formattedTitle(product.productID?.title)}
                    </ProductListArrayItemMobile>
                    <ProductListArrayItemMobile>
                      Category
                    </ProductListArrayItemMobile>
                    <ProductListArrayItemMobile>
                      {formattedTitle(product.productID?.category)}
                    </ProductListArrayItemMobile>
                    <ListMobileArray>
                      <MobileItemsHolder1
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <ProductListArrayItemMobile>
                          Calories
                        </ProductListArrayItemMobile>
                        <ProductListArrayItemMobile>
                          {product.calories}
                        </ProductListArrayItemMobile>
                      </MobileItemsHolder1>
                      <MobileItemsHolder2
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <ProductListArrayItemMobile>
                          Weight
                        </ProductListArrayItemMobile>
                        <ProductListArrayItemMobile>
                          {product.amount}
                        </ProductListArrayItemMobile>
                      </MobileItemsHolder2>
                      <MobileItemsHolder3
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <ProductListArrayItemMobile>
                          Recommend
                        </ProductListArrayItemMobile>
                        <ProductListArrayItemMobile>
                          <div
                            style={{
                              display: 'flex',
                              gap: '8px',
                              alignItems: 'center',
                              height: '24px',
                            }}
                          >
                            <svg
                              style={{
                                width: '14px',
                                height: '14px',
                              }}
                            >
                              {type === 'Yes' ? (
                                <use
                                  href={sprite + '#icon-bubble'}
                                  style={{
                                    fill: `${colors.green}`,
                                    stroke: colors.green,
                                  }}
                                />
                              ) : (
                                <use
                                  href={sprite + '#icon-bubble'}
                                  style={{
                                    fill: colors.red,
                                    stroke: colors.red,
                                  }}
                                />
                              )}
                            </svg>
                            <TypeRecommendSpan>
                              {FoodRecommended}
                            </TypeRecommendSpan>
                          </div>
                        </ProductListArrayItemMobile>
                      </MobileItemsHolder3>
                      <MobileItemsHolder4
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <ProductListArrayItemMobile>
                          {''}
                        </ProductListArrayItemMobile>
                        <ProductListArrayItemMobile>
                          <TableDeleteButton
                            type="button"
                            onClick={() => handleDelete(product._id)}
                          >
                            <SvgTableStyled>
                              <use href={sprite + '#icon-trash'}></use>
                            </SvgTableStyled>
                          </TableDeleteButton>
                        </ProductListArrayItemMobile>
                      </MobileItemsHolder4>
                    </ListMobileArray>
                  </ProductListArray>
                );
              })}
            </WrapperForItemsArray>
          </Table>
        ) : (
          <Table>
            <HeaderArray>
              <HeaderItem>Title</HeaderItem>
              <HeaderItem>Category</HeaderItem>
              <HeaderItem>Calories</HeaderItem>
              <HeaderItem>Weight</HeaderItem>
              <HeaderItem>Recommend</HeaderItem>
              <HeaderItem>{''}</HeaderItem>
            </HeaderArray>

            <WrapperForItemsArray>
              {allProductsArray.map((product) => {
                const type = product.productID?.groupBloodNotAllowed[
                  userBloodType
                ]
                  ? (FoodRecommended = 'Yes')
                  : (FoodRecommended = 'No');
                return (
                  <ProductListArray key={product._id}>
                    <ProductListArrayItem>
                      {formattedTitle(product.productID?.title)}
                    </ProductListArrayItem>
                    <ProductListArrayItem>
                      {formattedTitle(product.productID?.category)}
                    </ProductListArrayItem>
                    <ProductListArrayItem>
                      {product.calories}
                    </ProductListArrayItem>
                    <ProductListArrayItem>
                      {product.amount}
                    </ProductListArrayItem>
                    <ProductListArrayItem>
                      <div
                        style={{
                          display: 'flex',
                          gap: '8px',
                          alignItems: 'center',
                          height: '24px',
                        }}
                      >
                        <svg
                          style={{
                            width: '14px',
                            height: '14px',
                          }}
                        >
                          {type === 'Yes' ? (
                            <use
                              href={sprite + '#icon-bubble'}
                              style={{
                                fill: colors.green,
                                stroke: colors.green,
                              }}
                            />
                          ) : (
                            <use
                              href={sprite + '#icon-bubble'}
                              style={{
                                fill: colors.red,
                                stroke: colors.red,
                              }}
                            />
                          )}
                        </svg>
                        <TypeRecommendSpan>{FoodRecommended}</TypeRecommendSpan>
                      </div>
                    </ProductListArrayItem>
                    <ProductListArrayItem>
                      <TableDeleteButton
                        type="button"
                        onClick={() => handleDelete(product._id)}
                      >
                        <SvgTableStyled>
                          <use href={sprite + '#icon-trash'}></use>
                        </SvgTableStyled>
                      </TableDeleteButton>
                    </ProductListArrayItem>
                  </ProductListArray>
                );
              })}
            </WrapperForItemsArray>
          </Table>
        )
      ) : (
        <Nothing>Not found products</Nothing>
      )}
    </TableWrapper>
  );
};

export default DiaryProducts;
