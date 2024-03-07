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

const ExercisesWellDoneModal = ({ onClose, time, calori, background }) => {
  const [minutes, secound] = time.split(':').map(Number);
  const totalSeconds = minutes * 60 + secound;
  const res = 180 - totalSeconds;
  const formattedTime = `${Math.floor(res / 10)}:${res % 10 < 10 ? '0' : ''}${
    res % 10
  }`;

  return (
    <ExercisesWellDoneBackground onClick={background}>
      <ExercisesWellDoneContainer>
        <CloseWellDoneContainer onClick={onClose}>
          <svg width="13" height="13">
            <use href="/src/img/symbol-defs.svg#icon-close-white"></use>
          </svg>
        </CloseWellDoneContainer>
        <InnerExercisesWellDoneContainer>
          <ExercisesWellDoneImg></ExercisesWellDoneImg>
          <ExercisesText>Well done</ExercisesText>
          <ExercisesParagraph>
            Your time:
            <ExercisesSpan>{formattedTime}</ExercisesSpan>
          </ExercisesParagraph>
          <ExercisesParagraph>
            Burned calories:
            <ExercisesSpan>{calori}</ExercisesSpan>
          </ExercisesParagraph>
          <ExercisesNextProduct>Next product</ExercisesNextProduct>
          <ExercisesDiaryButton>
            <ParagtafDiarty> To the diary</ParagtafDiarty>

            <SvgNext>
              <use
                href="/src/img/symbol-defs.svg#icon-next"
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
