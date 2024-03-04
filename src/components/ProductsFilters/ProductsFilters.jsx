import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/products/filtersSlice';
import { getProductCategories } from '../../redux/products/operations';

export const ProductsFilter = () => {
  const dispatch = useDispatch();
  const productCategories = getProductCategories();
  return (
    //стилізувати поле
    //забрати з бера категорії та типи
    <FiltersField>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={(evt) => dispatch(setFilters(evt.target.value))}
      />
      <select
        name="categories"
        placeholder="Categories"
        onChange={(evt) => dispatch(setFilters(evt.target.value))}
      >
        {productCategories.map((category) => {
          <option>${category}</option>;
        })}
      </select>
      <select
        name="productType"
        onChange={(evt) => dispatch(setFilters(evt.target.value))}
      >
        <option defaultChecked>All</option>

        <option>Recomended</option>
        <option>Not recomended</option>
      </select>
    </FiltersField>
  );
};
