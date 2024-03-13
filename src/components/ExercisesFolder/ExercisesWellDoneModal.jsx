import { useNavigate } from 'react-router';
import { ParagtafDiarty, SvgNext } from '../ProductsItem/WellDoneModal.styles';
import {
  CloseWellDoneContainer,
  ExercisesDiaryButton,
  ExercisesNextProduct,
  ExercisesParagraph,
  ExercisesSpan,
  ExercisesText,
  ExercisesWellDoneBackground,
  ExercisesWellDoneContainer,
  ExercisesWellDoneImg,
  InnerExercisesWellDoneContainer,
} from './ExercisesWellDoneModal.styles';
import { timeCalculation } from './timeCalculation';
import sprite from '../../img/symbol-defs.svg';

const ExercisesWellDoneModal = ({
  onClose,
  time,
  calori,
  background,
  timeres,
}) => {
  const navigate = useNavigate();
  const linkNav = () => {
    navigate('/diary');
  };
  return (
    <ExercisesWellDoneBackground onClick={background}>
      <ExercisesWellDoneContainer>
        <CloseWellDoneContainer onClick={onClose}>
          <svg width="13" height="13">
            {/* <use href="/DreamTeam/src/img/symbol-defs.svg#icon-close-white"></use> */}
            <use href={sprite + '#icon-close-white'}></use>
          </svg>
        </CloseWellDoneContainer>
        <InnerExercisesWellDoneContainer>
          <ExercisesWellDoneImg></ExercisesWellDoneImg>
          <ExercisesText>Well done</ExercisesText>
          <ExercisesParagraph>
            Your time:
            <ExercisesSpan>{timeCalculation(timeres, time)}</ExercisesSpan>
          </ExercisesParagraph>
          <ExercisesParagraph>
            Burned calories:
            <ExercisesSpan>{Math.floor(calori)}</ExercisesSpan>
          </ExercisesParagraph>
          <ExercisesNextProduct onClick={onClose}>
            Next product
          </ExercisesNextProduct>
          <ExercisesDiaryButton onClick={linkNav}>
            <ParagtafDiarty> To the diary</ParagtafDiarty>

            <SvgNext>
              <use
                // href="/DreamTeam/src/img/symbol-defs.svg#icon-next"
                href={sprite + '#icon-next'}
                width="25"
                height="25"
              ></use>
            </SvgNext>
          </ExercisesDiaryButton>
        </InnerExercisesWellDoneContainer>
      </ExercisesWellDoneContainer>
    </ExercisesWellDoneBackground>
  );
};
export default ExercisesWellDoneModal;
