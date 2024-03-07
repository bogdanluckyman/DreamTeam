import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../../redux/diary/operation';
import { selectDiaryDate } from '../../../redux/diary/selectors';
import {
  Card,
  Description,
  CardSupTitle,
  Info,
  DescriptionBox,
  RemoveButton,
  Circle,
  Icon,
} from '../DiaryComponents.style';
import sprite from '../../../img/sprite.svg'

export const Product = ({ product, blood }) => {
  const {
    productId: { _id, title, category, groupBloodNotAllowed },
    calories,
    amount,
  } = product;
  const [points, setPoints] = useState(window.innerWidth);
  const handleResize = setPoints(window.innerWidth);
  const date = useSelector(selectDiaryDate);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const deleteProductItem = (productDetails) => {
    dispatch(deleteProduct(productDetails));
  };

  return (
    <Card key={_id}>
      <Description>
        <CardSupTitle>Title</CardSupTitle>
        <Info
          width={
            points < 1440 && points >= 768
              ? '204px'
              : points >= 1440
              ? '212px'
              : '100%'
          }
        >
          {title}
        </Info>
      </Description>
      <Description>
        <CardSupTitle>Category</CardSupTitle>
        <Info
          width={
            points < 1440 && points >= 768
              ? '128px'
              : points >= 1440
              ? '166px'
              : '100%'
          }
        >
          {category}
        </Info>
      </Description>
      <DescriptionBox>
        <Description>
          <CardSupTitle>Calories</CardSupTitle>
          <Info
            $maxwidth="81px"
            width={
              points < 1440 && points >= 768
                ? '90px'
                : points >= 1440
                ? '105px'
                : '100%'
            }
          >
            {calories}
          </Info>
        </Description>
        <Description>
          <CardSupTitle>Weight</CardSupTitle>
          <Info
            $maxwidth="80px"
            width={
              points < 1440 && points >= 768
                ? '90px'
                : points >= 1440
                ? '105px'
                : '100%'
            }
          >
            {amount}
          </Info>
        </Description>
        <Description>
          <CardSupTitle>Recommend</CardSupTitle>
          <Info
            $maxwidth="76px"
            display="flex"
            width={
              points < 1440 && points >= 768
                ? '80px'
                : points >= 1440
                ? '110px'
                : '100%'
            }
          >
            <Circle color={`${groupBloodNotAllowed[blood]}`} />
            {groupBloodNotAllowed[blood] ? 'No' : 'Yes'}
          </Info>
        </Description>
        <RemoveButton
          type="button"
          onClick={() => deleteProductItem({ id: _id, date })}
        >
          <Icon>
            <use href={`${sprite}#icon-trash`} />
          </Icon>
        </RemoveButton>
      </DescriptionBox>
    </Card>
  );
};
