//import { useDispatch, useSelector } from 'react-redux';
//import { setFilters } from '../../redux/products/filtersSlice';
//import { getProductCategories } from '../../redux/products/operations';
import { FiltersField } from './ProductsFilters.styled';
import productsCategories from './productsCategories.json';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { selectFilter } from '../../redux/products/selector';

export const ProductsFilters = () => {
  //const dispatch = useDispatch();

  //const productsCategories = await getProductCategories();
  //це частина стейту, а потрібен запит на категорії
  //  const productsCategories = useSelector(selectFilter);
  //console.log(productsCategories);
  return (
    //ЗРОБИТИ ФОРМІКОМ
    <FiltersField>
      <input
        type="text"
        name="title"
        placeholder="Search"
        onChange={(evt) => console.log({ title: evt.target.value })}

        //onChange={evt => dispatch(setFilters({ title: evt.target.value}))}
      />

      <select
        name="category"
        placeholder="Categories"
        onChange={(evt) => console.log(evt.target.value)}

        //onChange={evt => dispatch(setFilters({category: evt.target.value}))}
      >
        <option defaultChecked>Categories</option>
        {productsCategories.map((category) => {
          return <option key={nanoid()}>{category}</option>;
        })}
      </select>
      <select
        name="filter"
        onChange={(evt) => console.log(evt.target.value)}

        // onChange={evt => dispatch(setFilters({filter: evt.target.value}))}
      >
        <option defaultChecked>All</option>

        <option>Recomended</option>
        <option>Not recomended</option>
      </select>
    </FiltersField>
  );
};
