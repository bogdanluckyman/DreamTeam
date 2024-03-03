import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleProducts } from '../../redux/products/selector';
import { AddBtn, ProductItem } from '../ProductsItem/ProductsItem';

export const ProductList = () => {
  // const dispatch = useDispatch();
  const filteredProducts = useSelector(selectVisibleProducts);

  return (
    <ul>
      {filteredProducts.map((product) => (
        //потрібна структура бека
        <ProductItem product={product} key={product.id} id={product.id}>
          info
          <AddBtn
            type="button"
            onClick={
              () => {}
              //відкриття модалки
            }
          ></AddBtn>
        </ProductItem>
      ))}
    </ul>
  );
};
