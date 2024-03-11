import { useDispatch, useSelector } from 'react-redux';
import { TitlePage } from '../../../components/TitlePage/TitlePage';
import { useEffect } from 'react';
import { ProductsList } from '../../../components/ProductsList/ProductsList';
import { ProductsFilters } from '../../../components/ProductsFilters/ProductsFilters';
import {
  fetchProducts,
  getProductCategories,
} from '../../../redux/products/operations';
import { selectToken } from '../../../redux/auth/selectors';
import {
  selectError,
  selectFilter,
  selectIsLoading,
} from '../../../redux/products/selector';
import {
  BgWrap,
  Container,
  LoaderWrap,
  RightImageContainer,
  TopLineWrap,
} from './ProductsPage.styled';
import { Loader } from '../../../components/Loader/Loader';
import ErrorPage from '../../ErrorPage/ErrorPage';

const ProductsPage = () => {
  const TOKEN = useSelector(selectToken);
  const selectedFilters = useSelector(selectFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories(TOKEN));
    dispatch(fetchProducts({ selectedFilters, TOKEN }));
  }, [dispatch, selectedFilters]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <BgWrap>
      <Container>
        <TopLineWrap>
          <TitlePage title="Products" />
          <ProductsFilters />
        </TopLineWrap>
        {isLoading && !error ? (
          <LoaderWrap>
            <Loader />
          </LoaderWrap>
        ) : (
          <ProductsList />
        )}
      </Container>

      {error && <ErrorPage />}
      <RightImageContainer></RightImageContainer>
    </BgWrap>
  );
};
// повне версія
//  <>
//    <TitlePage title="Products" />
// <ProductsFilter />
// {isLoading && !error && <h1>зробити лодер</h1>}
// {error && <p>Sorry! {error}. Try again!</p>}
//<ProductsList />;
// </>

export default ProductsPage;
