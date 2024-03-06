import { useSelector } from 'react-redux';
import { ProductItem } from '../ProductsItem/ProductsItem';
import filteredProducts from './products.json';
import { ProductsCatalogue } from './ProductsList.styled';
import { selectFilter } from '../../redux/products/selector';
import { fetchProducts } from '../../redux/products/operations';

export const ProductsList = () => {
  //поки через json
  // const dispatch = useDispatch();
  //const selectedFilters = useSelector(selectFilter);

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
