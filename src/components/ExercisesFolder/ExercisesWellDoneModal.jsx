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

const ExercisesWellDoneModal = ({
  onClose,
  time,
  calori,
  background,
  timeres,
}) => {
  console.log(timeres);
  console.log(time);
  const number = timeres - 3;
  const formattedTimer = `${number}:00`;
  console.log(formattedTimer);

  const [minutes, secound] = time.split(':').map(Number);
  const totalSeconds = minutes * 60 + secound;
  const res = 180 - totalSeconds;

  const formatMinutes = Math.floor(res / 60);
  const formatSeconds = res % 60;

  const formattedTime = `${formatMinutes}:${
    formatSeconds < 10 ? '0' : ''
  }${formatSeconds}`;
  console.log(formattedTime); // Виведе "0:10"

  // const formattedTime = `${Math.floor(res / 10)}:${res % 10 < 10 ? '0' : ''}${
  //   res % 10
  // }`;
  // console.log(formattedTime);

  const time1 = formattedTimer;
  const time2 = formattedTime;

  const [min1, sec1] = time1.split(':').map(Number);
  const [min2, sec2] = time2.split(':').map(Number);

  const totalMinutes = min1 + min2;
  const totalSecond = sec1 + sec2;

  const formattedMinutes = totalMinutes.toString().padStart(2, '0');
  const formattedSeconds = totalSecond.toString().padStart(2, '0');
  const totalFormattedTime = `${formattedMinutes}:${formattedSeconds}`;

  console.log(totalFormattedTime);
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
            <ExercisesSpan>{totalFormattedTime}</ExercisesSpan>
          </ExercisesParagraph>
          <ExercisesParagraph>
            Burned calories:
            <ExercisesSpan>{Math.floor(calori)}</ExercisesSpan>
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
