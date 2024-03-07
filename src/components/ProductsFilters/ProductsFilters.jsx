import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/products/filtersSlice';
import { FiltersField } from './ProductsFilters.styled';
//import productsCategories from './productsCategories.json';
import { nanoid } from 'nanoid';
import { selectCategories } from '../../redux/products/selector';

export const ProductsFilters = () => {
  const dispatch = useDispatch();
  const productsCategories = useSelector(selectCategories);
  //console.log(productsCategories);
  return (
    <FiltersField>
      <input
        type="text"
        name="title"
        placeholder="Search"
        onChange={(evt) => dispatch(setFilters({ title: evt.target.value }))}
      />

      <select
        name="category"
        //onChange={(evt) => console.log(evt.target.value)}

        onChange={(evt) => dispatch(setFilters({ category: evt.target.value }))}
      >
        <option defaultChecked>Categories</option>
        {productsCategories.map((category) => {
          return <option key={nanoid()}>{category}</option>;
        })}
      </select>
      <select
        name="filter"
        onChange={(evt) => dispatch(setFilters({ filter: evt.target.value }))}
      >
        <option defaultChecked>All</option>

        <option>Recomended</option>
        <option>Not recomended</option>
      </select>
    </FiltersField>
  );
};
