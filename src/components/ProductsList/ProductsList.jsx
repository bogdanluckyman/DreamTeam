import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from '../ProductsItem/ProductsItem';
//import filteredProducts from './products.json';
import {
  ProductsCatalogue,
  ProductsCatalogueWrap,
} from './ProductsList.styled';
import { selectFilter, selectProducts } from '../../redux/products/selector';
import { fetchProducts } from '../../redux/products/operations';
import { useEffect } from 'react';
import { selectToken } from '../../redux/auth/selectors';

export const ProductsList = () => {
  const TOKEN = useSelector(selectToken);
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchProducts({ selectedFilters, TOKEN }));
  }, [selectedFilters]);
  //поки через json

  const filteredProducts = useSelector(selectProducts);
  //console.log(filteredProducts);
  return (
    <ProductsCatalogueWrap>
      <ProductsCatalogue>
        {filteredProducts.map((product) => (
          <ProductItem
            product={product}
            key={product._id}
            id={product._id}
          ></ProductItem>
        ))}
      </ProductsCatalogue>
    </ProductsCatalogueWrap>
  );
};
