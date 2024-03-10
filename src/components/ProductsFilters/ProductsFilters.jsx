import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/products/filtersSlice';
import {
  FiltersField,
  InputWrap,
  OptionSelect,
  ResetBtn,
  SelectsWrap,
  TitleInput,
} from './ProductsFilters.styled';
//import productsCategories from './productsCategories.json';
import { nanoid } from 'nanoid';
import { selectCategories, selectFilter } from '../../redux/products/selector';
import sprite from '../../img/symbol-defs.svg';
import { capitalizeFirstLetter } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

export const ProductsFilters = () => {
  const dispatch = useDispatch();
  const productsCategories = useSelector(selectCategories);
  const inputValue = useSelector(selectFilter).title;
  return (
    <FiltersField>
      <InputWrap>
        <TitleInput
          type="text"
          name="title"
          placeholder="Search"
          onChange={(evt) => {
            dispatch(setFilters({ title: evt.target.value.trim() }));
          }}
        />
        {inputValue.length > 0 && (
          <ResetBtn
            onClick={(evt) => {
              dispatch(setFilters({ title: '' }));
            }}
          >
            <svg width="18" height="18">
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </ResetBtn>
        )}
        <svg width="18" height="18">
          <use href={`${sprite}#icon-search`}></use>
        </svg>
      </InputWrap>
      <SelectsWrap>
        <OptionSelect
          name="category"
          onChange={(evt) =>
            dispatch(setFilters({ category: evt.target.value }))
          }
        >
          <option defaultChecked>Categories</option>
          {productsCategories.map((category) => {
            return (
              <option key={nanoid()}>{capitalizeFirstLetter(category)}</option>
            );
          })}
        </OptionSelect>
        <OptionSelect
          name="filter"
          onChange={(evt) => dispatch(setFilters({ filter: evt.target.value }))}
        >
          <option defaultChecked>All</option>

          <option>Recomended</option>
          <option>Not recomended</option>
        </OptionSelect>
      </SelectsWrap>
    </FiltersField>
  );
};
