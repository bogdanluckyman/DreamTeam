import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../img/sprite.svg';
import { colors } from '../../../styles/colors';
import {
  TableWrapper,
  TitleNav,
  TitleText,
  NavBlock,
  NavText,
  Nothing,
  Table,
  WrapperForItemsArray,
  MobileItemsHolder1,
  MobileItemsHolder2,
  MobileItemsHolder3,
  MobileItemsHolder4,
  TableDeleteButton,
  SvgTableStyled,
  ListMobileArray,
} from '../DiaryProducts/DiaryProducts.style';
import {
  HeaderArray,
  ExerciseListArray,
  ExerciseListArrayItemMobile,
  HeaderItem,
  ExerciseListArrayItem,
} from './DiaryExercises.style';
import { selectDiaryError } from '../../../redux/diary/selectors';
import { deleteDiaryExercise } from '../../../redux/diary/operation';
import { useEffect, useState } from 'react';
import { Loader } from '../../Loader/Loader';

const DiaryExercises = ({ exercisesArray }) => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const error = useSelector(selectDiaryError);
  const dispatch = useDispatch();
  const [allExercisesArray, setEercisesArray] = useState([]);
  const isLoading = useSelector((state) => state.diary.isLoading);

  useEffect(() => {
    setEercisesArray(exercisesArray);
  }, [exercisesArray]);

  const formattedTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };

  const handleDelete = async (id) => {
    try {
      const res = await dispatch(deleteDiaryExercise(id));
      // await dispatch(getAllDiaryInformation(date));
      if (res.meta.requestStatus === 'fulfilled') {
        const updatedExArray = allExercisesArray.filter(
          (product) => product._id !== id
        );

        setEercisesArray(updatedExArray);
      }

      Notiflix.Notify.success('Exercise deleted successfully!', {
        theme: 'light',
      });
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
  };

  return (
    <TableWrapper>
      <TitleNav>
        <TitleText>Exercises</TitleText>
        <NavBlock>
          <NavLink
            to="/exercises"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavText>Add exercises</NavText>
            <svg
              style={{
                width: '16px',
                height: '16px',
                marginLeft: '8px',
                stroke: colors.orange,
              }}
            >
              <use href={sprite + '#icon-arrow-right'} />
            </svg>
          </NavLink>
        </NavBlock>
      </TitleNav>
      {isLoading ? (
        <Loader />
      ) : allExercisesArray && allExercisesArray.length > 0 && !error ? (
        isMobile ? (
          <Table>
            <WrapperForItemsArray>
              {allExercisesArray.map((exercise) => (
                <ExerciseListArray key={exercise._id}>
                  <ExerciseListArrayItemMobile>
                    Body Part
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseID?.bodyPart)}
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    Equipment
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseID?.equipment)}
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    Name
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseID?.name)}
                  </ExerciseListArrayItemMobile>
                  <ListMobileArray>
                    <MobileItemsHolder1>
                      <ExerciseListArrayItemMobile>
                        Target
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {formattedTitle(exercise.exerciseID?.target)}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder1>
                    <MobileItemsHolder2>
                      <ExerciseListArrayItemMobile>
                        Burned Calories
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.calories}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder2>
                    <MobileItemsHolder3>
                      <ExerciseListArrayItemMobile>
                        Time
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.time}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder3>
                    <MobileItemsHolder4>
                      <ExerciseListArrayItemMobile>
                        {''}
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        <TableDeleteButton
                          type="button"
                          onClick={() => handleDelete(exercise._id)}
                        >
                          <SvgTableStyled>
                            <use href={sprite + '#icon-trash'}></use>
                          </SvgTableStyled>
                        </TableDeleteButton>
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder4>
                  </ListMobileArray>
                </ExerciseListArray>
              ))}
            </WrapperForItemsArray>
          </Table>
        ) : (
          <Table>
            <HeaderArray>
              <HeaderItem>Body Part</HeaderItem>
              <HeaderItem>Equipment</HeaderItem>
              <HeaderItem>Name</HeaderItem>
              <HeaderItem>Target</HeaderItem>
              <HeaderItem>Burned Calories</HeaderItem>
              <HeaderItem>Time</HeaderItem>
              <HeaderItem>{''}</HeaderItem>
            </HeaderArray>

            <WrapperForItemsArray>
              {allExercisesArray.map((exercise) => (
                <ExerciseListArray key={exercise._id}>
                  {/* Body Part */}
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseID.bodyPart)}
                  </ExerciseListArrayItem>
                  {/* Equipment */}
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseID.equipment)}
                  </ExerciseListArrayItem>
                  {/* Name */}
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseID.name)}
                  </ExerciseListArrayItem>
                  {/* Target */}
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseID.target)}
                  </ExerciseListArrayItem>
                  {/* Burned Calories */}
                  <ExerciseListArrayItem>
                    {exercise.calories}
                  </ExerciseListArrayItem>
                  {/* Time */}
                  <ExerciseListArrayItem>{exercise.time}</ExerciseListArrayItem>
                  {/* Delete Button */}
                  <ExerciseListArrayItem>
                    <TableDeleteButton
                      type="button"
                      onClick={() => handleDelete(exercise._id)}
                    >
                      <SvgTableStyled>
                        <use href={sprite + '#icon-trash'}></use>
                      </SvgTableStyled>
                    </TableDeleteButton>
                  </ExerciseListArrayItem>
                </ExerciseListArray>
              ))}
            </WrapperForItemsArray>
          </Table>
        )
      ) : (
        <Nothing>Not found exercises</Nothing>
      )}
    </TableWrapper>
  );
};

export default DiaryExercises;
