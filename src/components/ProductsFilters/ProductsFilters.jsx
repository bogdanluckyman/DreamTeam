import { useDispatch } from 'react-redux';
//import { setFilters } from '../../redux/products/filtersSlice';
import { getProductCategories } from '../../redux/products/operations';
import { FiltersField } from './ProductsFilters.styled';
import productsCategories from './productsCategories.json';
import { nanoid } from 'nanoid';
//import { useEffect } from 'react';

export const ProductsFilters = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductCategories());
  // }, [dispatch]);

  //const productsCategories = getProductCategories();
  return (
    //ЗРОБИТИ ФОРМІКОМ
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
