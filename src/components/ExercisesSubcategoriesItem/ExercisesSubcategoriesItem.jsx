import {
  Block,
  SubCategoryName,
  CategoryTitle,
} from './ExercisesSubcategoriesItem.styled';

export const ExercisesSubcategoriesItem = ({
  category: { filter, name, imgURL },
}) => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Block
      style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
    >
      <SubCategoryName>{capitalizeFirstLetter(name)}</SubCategoryName>
      <CategoryTitle>{filter}</CategoryTitle>
    </Block>
  );
};
