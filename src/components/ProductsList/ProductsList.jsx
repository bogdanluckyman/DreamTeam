import { useSelector } from 'react-redux';
//import { selectVisibleProducts } from '../../redux/products/selector';
import { ProductItem } from '../ProductsItem/ProductsItem';
import filteredProducts from './products.json';
import { ProductsCatalogue } from './ProductsList.styled';
import { fetchProducts } from '../../redux/products/operations';

export const ProductsList = () => {
  //поки через json
  // const dispatch = useDispatch();
  //const selectedFilters = useSelector(selectFilter);
  //const filteredProducts = fetchProducts(selectedFilters).userSearchProducts;

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
