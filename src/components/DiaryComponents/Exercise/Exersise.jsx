import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExercise } from '../../../redux/diary/operation';
import { selectDiaryDate } from '../../../redux/diary/selectors';
import {
  Card,
  Description,
  CardSupTitle,
  Info,
  DescriptionBox,
  RemoveButton,
  Icon,
} from '../DiaryComponents.style';
import sprite from '../../../img/sprite.svg';

export const Exercise = ({ exercise }) => {
  const {
    calories,
    time,
    exerciseId: { _id, bodyPart, equipment, name, target },
  } = exercise;
  const [points, setPoints] = useState(window.innerWidth);
  const handleResize = () => setPoints(window.innerWidth);
  const date = useSelector(selectDiaryDate);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dispatch = useDispatch();

  const deleteExerciseItem = (exerciseDetails) => {
    dispatch(deleteExercise(exerciseDetails));
  };

  return (
    <Card key={_id}>
      <Description>
        <CardSupTitle>Body Part</CardSupTitle>
        <Info
          width={
            points < 1440 && points >= 768
              ? '90px'
              : points >= 1440
              ? '115px'
              : '100%'
          }
        >
          {bodyPart}
        </Info>
      </Description>
      <Description>
        <CardSupTitle>Equipment</CardSupTitle>
        <Info
          width={
            points < 1440 && points >= 768
              ? '132px'
              : points >= 1440
              ? '157px'
              : '100%'
          }
        >
          {equipment}
        </Info>
      </Description>
      <Description>
        <CardSupTitle>Name</CardSupTitle>
        <Info
          width={
            points < 1440 && points >= 768
              ? '128px'
              : points >= 1440
              ? '131px'
              : '100%'
          }
        >
          {name}
        </Info>
      </Description>
      <DescriptionBox>
        <Description>
          <CardSupTitle>Target</CardSupTitle>
          <Info
            $maxwidth="81px"
            width={
              points < 1440 && points >= 768
                ? '84px'
                : points >= 1440
                ? '106px'
                : '100%'
            }
          >
            {target}
          </Info>
        </Description>
        <Description>
          <CardSupTitle size="80px">Burned Calories</CardSupTitle>
          <Info
            $maxwidth="80px"
            width={
              points < 1440 && points >= 768
                ? '78px'
                : points >= 1440
                ? '91px'
                : '100%'
            }
          >
            {calories}
          </Info>
        </Description>
        <Description>
          <CardSupTitle>Time</CardSupTitle>
          <Info
            $maxwidth="76px"
            width={
              points < 1440 && points >= 768
                ? '72px'
                : points >= 1440
                ? '82px'
                : '100%'
            }
          >
            {time}
          </Info>
        </Description>
        <RemoveButton
          type="button"
          onClick={() => deleteExerciseItem({ id: _id, date })}
        >
          <Icon>
            <use href={`${sprite}#icon-trash`} />
          </Icon>
        </RemoveButton>
      </DescriptionBox>
    </Card>
  );
};
