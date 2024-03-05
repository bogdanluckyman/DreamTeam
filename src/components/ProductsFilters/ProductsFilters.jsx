//import { useDispatch } from 'react-redux';
//import { setFilters } from '../../redux/products/filtersSlice';
//import { getProductCategories } from '../../redux/products/operations';
import { FiltersField } from './ProductsFilters.styled';
import productsCategories from './productsCategories.json';
import { nanoid } from 'nanoid';

export const ProductsFilters = () => {
  //const dispatch = useDispatch();
  //const productsCategories = getProductCategories();
  return (
    //стилізувати поле
    <FiltersField>
      <input
        type="text"
        name="search"
        placeholder="Search"
        // onChange={evt => dispatch(setFilters(evt.target.value))}
      />

      <select
        name="categories"
        placeholder="Categories"
        //onChange={evt => dispatch(setFilters(evt.target.value))}
      >
        <option defaultChecked>Categories</option>
        {productsCategories.map((category) => {
          return <option key={nanoid()}>{category}</option>;
        })}
      </select>
      <select
        name="productType"
        // onChange={evt => dispatch(setFilters(evt.target.value))}
      >
        <option defaultChecked>All</option>

        <option>Recomended</option>
        <option>Not recomended</option>
      </select>
    </FiltersField>
  );
};
