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
import { selectFilter } from '../../../redux/products/selector';
import {
  BgWrap,
  Container,
  ContentWrap,
  RightImageContainer,
  TopLineWrap,
} from './ProductsPage.styled';

export default function ProductsPage() {
  const TOKEN = useSelector(selectToken);
  const selectedFilters = useSelector(selectFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories(TOKEN));
    dispatch(fetchProducts({ selectedFilters, TOKEN }));
  }, [dispatch, selectedFilters]);

  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);

  return (
    <BgWrap>
      <Container>
        <TopLineWrap>
          <TitlePage title="Products" />
          <ProductsFilters />
        </TopLineWrap>
        <ProductsList />
      </Container>
      <RightImageContainer></RightImageContainer>
    </BgWrap>
  );
}
// повне версія
//  <>
//    <TitlePage title="Products" />
// <ProductsFilter />
// {isLoading && !error && <h1>зробити лодер</h1>}
// {error && <p>Sorry! {error}. Try again!</p>}
//<ProductsList />;
// </>
