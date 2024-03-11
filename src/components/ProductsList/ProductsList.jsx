import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from '../ProductsItem/ProductsItem';
//import filteredProducts from './products.json';
import {
  Accent,
  EmptyListWrap,
  ProductsCatalogue,
  ProductsCatalogueWrap,
} from './ProductsList.styled';
import { selectProducts } from '../../redux/products/selector';

export const ProductsList = () => {
  const filteredProducts = useSelector(selectProducts);

  return (
    <ProductsCatalogueWrap>
      {filteredProducts.length === 0 ? (
        <EmptyListWrap>
          <p>
            <Accent>Sorry, no results were found</Accent> for the product
            filters you selected. You may want to consider other search options
            to find the product you want. Our range is wide and you have the
            opportunity to find more options that suit your needs.
          </p>
          <Accent>Try changing the search parameters.</Accent>
        </EmptyListWrap>
      ) : (
        <ProductsCatalogue>
          {filteredProducts.map((product) => (
            <ProductItem
              product={product}
              key={product._id}
              id={product._id}
            ></ProductItem>
          ))}
        </ProductsCatalogue>
      )}
    </ProductsCatalogueWrap>
  );
};
