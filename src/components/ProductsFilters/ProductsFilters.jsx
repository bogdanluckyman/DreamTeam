import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/products/filtersSlice';
import {
  FiltersField,
  FiltersMark,
  InputWrap,
  Option,
  OptionSelect,
  ResetBtn,
  SelectsWrap,
  TitleInput,
} from './ProductsFilters.styled';
import { nanoid } from 'nanoid';
import { selectCategories, selectFilter } from '../../redux/products/selector';
import sprite from '../../img/symbol-defs.svg';
import { capitalizeFirstLetter } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { useEffect } from 'react';

export const ProductsFilters = () => {
  const dispatch = useDispatch();
  const productsCategories = useSelector(selectCategories);
  const inputValue = useSelector(selectFilter).title;
  const selectedCategory = useSelector(selectFilter).category;
  const selectedFilter = useSelector(selectFilter).filter;

  return (
    <FiltersField>
      <InputWrap>
        <TitleInput
          type="text"
          name="title"
          value={inputValue}
          placeholder="Search"
          onChange={(evt) => {
            dispatch(setFilters({ title: evt.target.value.trim() }));
          }}
        />
        {inputValue.length > 0 && (
          <ResetBtn
            onClick={() => {
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
        <FiltersMark>Filters</FiltersMark>
        <OptionSelect
          name="category"
          value={selectedCategory}
          onChange={(evt) => {
            if (evt.target.value === 'Categories') {
              dispatch(setFilters({ category: '' }));
            } else {
              dispatch(setFilters({ category: evt.target.value }));
            }
          }}
        >
          <Option defaultChecked>Categories</Option>
          {productsCategories.map((category) => {
            return (
              <Option key={nanoid()} value={category}>
                {capitalizeFirstLetter(category)}
              </Option>
            );
          })}
        </OptionSelect>
        <OptionSelect
          name="filter"
          value={selectedFilter}
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
