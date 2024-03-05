import { useSelector } from 'react-redux';
//import { selectVisibleProducts } from '../../redux/products/selector';
import { ProductItem } from '../ProductsItem/ProductsItem';
import filteredProducts from './products.json';
import { ProductsCatalogue } from './ProductsList.styled';

export const ProductsList = () => {
  //поки через json
  // const dispatch = useDispatch();
  //const filteredProducts = useSelector(selectVisibleProducts);

  return (
    <ProductsCatalogue>
      {filteredProducts.map((product) => {
        return (
          <ProductItem
            product={product}
            key={product._id.$oid}
            id={product._id.$oid}
          ></ProductItem>
        );
      })}
    </ProductsCatalogue>
  );
};
