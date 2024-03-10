import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectDiaryExercises } from '../../../redux/diary/selectors';
import sprite from '../../../img/sprite.svg';

import {
  SectionOfDiary,
  SectionWrapper,
  SectionTitle,
  NavigationLink,
  DiaryTabletTitle,
  DiaryTabletSupTitle,
  EmptyList,
  //   ListOfExercises
  SvgForRoute,
} from '../DiaryComponents.style';

export const DiaryExercises = () => {
  const navigate = useNavigate();

  const exercises = useSelector(selectDiaryExercises);

  return (
    <SectionOfDiary hight="1066px">
      <SectionWrapper>
        <SectionTitle>Exercises</SectionTitle>
        <NavigationLink onClick={() => navigate('/exercises')}>
          Add exercise
          <SvgForRoute>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </SvgForRoute>
        </NavigationLink>
      </SectionWrapper>

      {exercises.length !== 0 ? (
        <>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <DiaryTabletTitle>
              <DiaryTabletSupTitle width="90px">Body Part</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="132px">Equipment</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="128px">Name</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="84px">Target</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="78px">
                Burned Calories
              </DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="72px">Time</DiaryTabletSupTitle>
            </DiaryTabletTitle>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <DiaryTabletTitle>
              <DiaryTabletSupTitle width="115px">Body Part</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="157px">Equipment</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="131px">Name</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="106px">Target</DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="91px">
                Burned Calories
              </DiaryTabletSupTitle>
              <DiaryTabletSupTitle width="82px">Time</DiaryTabletSupTitle>
            </DiaryTabletTitle>
          </MediaQuery>
          {/* <ListOfExercises>
          </ListOfExercises> */}
        </>
      ) : (
        <EmptyList>Not found exercises</EmptyList>
      )}
    </SectionOfDiary>
  );
};
