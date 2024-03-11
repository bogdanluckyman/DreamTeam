import { NavLink } from 'react-router-dom';
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
import { toast } from 'react-toastify';
import { selectDiaryError } from '../../../redux/diary/selectors';

const DayProducts = ({ productsArray, date }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const userBloodType = currentUser.blood;

  const error = useSelector(selectDiaryError);

  const isMobile = useMediaQuery('(max-width:768px)');

  const formattedTitle = (productTitle) => {
    return productTitle[0].toUpperCase() + productTitle.slice(1).toLowerCase();
  };

  let FoodRecommended;

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteDiaryProduct(id));
      await dispatch(getAllDiaryInformation(date));
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
  };

  return (
    <TableWrapper>
      <TitleNav>
        <TitleText>Products</TitleText>
        <NavBlock>
          <NavLink
            to="/products"
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
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </NavLink>
        </NavBlock>
      </TitleNav>
      {productsArray && productsArray.length > 0 && !error ? (
        isMobile ? (
          <Table>
            <WrapperForItemsArray>
              {productsArray.map((product) => {
                const type = product.productId.groupBloodNotAllowed[
                  userBloodType
                ]
                  ? (FoodRecommended = 'Yes')
                  : (FoodRecommended = 'No');

                return (
                  <ProductListArray key={product._id}>
                    <ProductListArrayItemMobile>
                      Title
                    </ProductListArrayItemMobile>
                    <ProductListArrayItemMobile>
                      {formattedTitle(product.productId.title)}
                    </ProductListArrayItemMobile>
                    <ProductListArrayItemMobile>
                      Category
                    </ProductListArrayItemMobile>
                    <ProductListArrayItemMobile>
                      {formattedTitle(product.productId.category)}
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
                                  href={sprite + '#icon-Ellipse-82'}
                                  style={{
                                    fill: colors.green,
                                    stroke: colors.green,
                                  }}
                                />
                              ) : (
                                <use
                                  href={sprite + '#icon-Ellipse-82'}
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
                              <use href={sprite + '#icon-trash-03'}></use>
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
              {productsArray.map((product) => {
                const type = product.productId.groupBloodNotAllowed[
                  userBloodType
                ]
                  ? (FoodRecommended = 'Yes')
                  : (FoodRecommended = 'No');
                return (
                  <ProductListArray key={product._id}>
                    <ProductListArrayItem>
                      {formattedTitle(product.productId.title)}
                    </ProductListArrayItem>
                    <ProductListArrayItem>
                      {formattedTitle(product.productId.category)}
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
                              href={sprite + '#icon-Ellipse-82'}
                              style={{
                                fill: colors.green,
                                stroke: colors.green,
                              }}
                            />
                          ) : (
                            <use
                              href={sprite + '#icon-Ellipse-82'}
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
                          <use href={sprite + '#icon-trash-03'}></use>
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

export default DayProducts;