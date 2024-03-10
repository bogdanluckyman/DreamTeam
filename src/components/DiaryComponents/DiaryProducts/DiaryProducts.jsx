import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectDiaryProducts } from '../../../redux/diary/selectors';
import { selectUser } from '../../../redux/auth/selectors';
import sprite from '../../../img/sprite.svg';
import { Product } from '../Product/Product';

import {
  SectionOfDiary,
  SectionWrapper,
  SectionTitle,
  NavigationLink,
  DiaryTabletTitle,
  DiaryTabletSupTitle,
  EmptyList,
  List,
  SvgForRoute,
} from '../DiaryComponents.style';

export const DiaryProducts = () => {
  const products = useSelector(selectDiaryProducts);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <SectionOfDiary>
      <SectionWrapper>
        <SectionTitle>Products</SectionTitle>
        <NavigationLink onClick={() => navigate('/products')}>
          Add product
          <SvgForRoute>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </SvgForRoute>
        </NavigationLink>
      </SectionWrapper>

      {products.length !== 0 && user ? (
        <>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <DiaryTabletTitle>
              <DiaryTabletSupTitle width="204px">Title</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="128px">Category</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="90px">Calories</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="90px">Weight</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="80px">Recommend</DiaryTabletSupTitle>
            </DiaryTabletTitle>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <DiaryTabletTitle>
              <DiaryTabletSupTitle width="112px">Title</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="166px">Category</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="105px">Calories</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="105px">Weight</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="110px">Recommend</DiaryTabletSupTitle>
            </DiaryTabletTitle>
          </MediaQuery>
          <List>
            {products.map((product) => {
              return (
                <Product
                  product={product}
                  key={product._id}
                  blood={user.blood}
                />
              );
            })}
          </List>
        </>
      ) : (
        <EmptyList>Not found products</EmptyList>
      )}
    </SectionOfDiary>
  );
};
