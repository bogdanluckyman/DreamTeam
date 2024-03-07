import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from '../ProductsItem/ProductsItem';
import filteredProducts from './products.json';
import { ProductsCatalogue } from './ProductsList.styled';
import { selectFilter, selectProducts } from '../../redux/products/selector';
import { fetchProducts } from '../../redux/products/operations';
import { useEffect } from 'react';

export const ProductsList = () => {
  //const dispatch = useDispatch();
  //const selectedFilters = useSelector(selectFilter);

  //useEffect(() => {
  //  dispatch(fetchProducts(selectedFilters));
  //}, [dispatch]);
  //поки через json

  //const filteredProducts = useSelector(selectProducts);
  //const nn = filteredProducts.userSearchProducts;
  //console.log(filteredProducts);
  return (
    <ProductsCatalogue>
      {filteredProducts.map((product) => {
        return (
          <ProductItem
            product={product}
            //           key={product._id}
            //           id={product._id}
            key={product._id.$oid}
            id={product._id.$oid}
          ></ProductItem>
        );
      })}
    </ProductsCatalogue>
  );
};
