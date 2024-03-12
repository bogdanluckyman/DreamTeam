import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
// import { toast } from 'react-toastify';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import sprite from '../../../img/sprite.svg';

// import { colors } from '../../../styles/colors';

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
  NextIconWrapper,
} from '../DiaryProducts/DiaryProducts.style';

import {
  HeaderArray,
  ExerciseListArray,
  ExerciseListArrayItemMobile,
  HeaderItem,
  ExerciseListArrayItem,
} from './DiaryExercises.style';

import { selectDiaryError } from '../../../redux/diary/selectors';

import {
  deleteDiaryExercise,
  getAllDiaryInformation,
} from '../../../redux/diary/operation';

const DayExercises = ({ exercisesArray, date }) => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const error = useSelector(selectDiaryError);
  const dispatch = useDispatch();

  const formattedTitle = (exerciseTitle) => {
    return (
      exerciseTitle[0].toUpperCase() + exerciseTitle.slice(1).toLowerCase()
    );
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteDiaryExercise(id));
      await dispatch(getAllDiaryInformation(date));
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
            <NextIconWrapper>
              <use href={`${sprite}#icon-arrow`} />
            </NextIconWrapper>
          </NavLink>
        </NavBlock>
      </TitleNav>

      {exercisesArray && exercisesArray.length > 0 && !error ? (
        isMobile ? (
          <Table>
            <WrapperForItemsArray>
              {exercisesArray.map((exercise) => (
                <ExerciseListArray key={exercise._id}>
                  <ExerciseListArrayItemMobile>
                    Body Part
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseId.bodyPart)}
                  </ExerciseListArrayItemMobile>

                  <ExerciseListArrayItemMobile>
                    Equipment
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseId.equipment)}
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    Name
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseId.name)}
                  </ExerciseListArrayItemMobile>
                  <ListMobileArray>
                    <MobileItemsHolder1
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        Target
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {formattedTitle(exercise.exerciseId.target)}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder1>
                    <MobileItemsHolder2
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        Burned Calories
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.calories}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder2>
                    <MobileItemsHolder3
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        Time
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.time}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder3>
                    <MobileItemsHolder4
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        {''}
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        <TableDeleteButton
                          type="button"
                          onClick={() => handleDelete(exercise._id)}
                        >
                          <SvgTableStyled>
                            <use href={sprite + '#icon-trash-03'}></use>
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
              {exercisesArray.map((exercise) => (
                <ExerciseListArray key={exercise._id}>
                  <ExerciseListArrayItem>
                    {/* {formattedTitle(exercise.exerciseId.bodyPart)} */}
                    {exercise.exerciseId &&
                      formattedTitle(exercise.exerciseId.bodyPart)}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {/* {formattedTitle(exercise.exerciseId.equipment)} */}
                    {exercise.exerciseId
                      ? formattedTitle(exercise.exerciseId.equipment)
                      : ''}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {/* {formattedTitle(exercise.exerciseId.name)} */}
                    {exercise.exerciseId
                      ? formattedTitle(exercise.exerciseId.name)
                      : ''}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {/* {formattedTitle(exercise.exerciseId.target)} */}
                    {exercise.exerciseId
                      ? formattedTitle(exercise.exerciseId.target)
                      : ''}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {exercise.calories}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>{exercise.time}</ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    <TableDeleteButton
                      type="button"
                      onClick={() => handleDelete(exercise._id)}
                    >
                      <SvgTableStyled>
                        <use href={sprite + '#icon-trash-03'}></use>
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

export default DayExercises;
