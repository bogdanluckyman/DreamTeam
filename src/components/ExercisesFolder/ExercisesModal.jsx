import { useEffect, useMemo, useState } from 'react';
import {
  BurnedCalories,
  CloseExercisesContainer,
  DataContainerDiv,
  DataDiv,
  ExercisesBlock,
  ExercisesBlockButton,
  ExercisesBlockResalts,
  ExercisesBlockText,
  ExercisesInnerModalContainer,
  ExercisesModalBackground,
  ExercisesModalContainer,
  ExercisesModalGif,
  ExercisesModalImg,
  PlayPause,
  TimeSpan,
  TimerDiv,
  TimerText,
} from './ExercisesModal.styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import ExercisesWellDoneModal from './ExercisesWellDoneModal';
import { timeCalculation } from './timeCalculation';
import { useDispatch, useSelector } from 'react-redux';
import { addDiaryExercise } from '../../redux/diary/operation';
import Notiflix from 'notiflix';
import sprite from '../../img/symbol-defs.svg';
import mp3 from '../../../src/img/d0d8bbb34c203ff.mp3';
const ExercisesModal = ({ onClose, exercies }) => {
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState('');
  const [restart, setReStart] = useState(false);
  const [closeModal, setcloseModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [overallResult, setOverallResult] = useState(3);

  const dispatch = useDispatch();
  const errorValue = useSelector((state) => state.diary.error);
  const data = useSelector((state) => state.diary.date);

  /////////////////////////////////////////////////////////////
  const audio = useMemo(() => new Audio(mp3), []);

  const exercCal = exercies.burnedCalories;

  const title = exercies.name.replace(/(^\w|\.\s\w)/g, (char) =>
    char.toUpperCase()
  );
  const target = exercies.target.replace(/(^\w|\.\s\w)/g, (char) =>
    char.toUpperCase()
  );
  const equipment = exercies.equipment.replace(/(^\w|\.\s\w)/g, (char) =>
    char.toUpperCase()
  );
  const bodyPart = exercies.bodyPart.replace(/(^\w|\.\s\w)/g, (char) =>
    char.toUpperCase()
  );
  ////////////////////////////////////////////////////////////
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      onClose();
    }
  });

  useEffect(() => {
    const calculateCaloriesBurned = (timeInMinutes) => {
      const caloriesPer3Min = exercCal;
      return (timeInMinutes * caloriesPer3Min) / 3;
    };

    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    const minutes = seconds / 60;
    const calculatedCalories = calculateCaloriesBurned(minutes);
    setCounter(calculatedCalories.toFixed(15));
    return () => clearInterval(timer);
  }, [counter, exercCal, isPaused, seconds]);

  useEffect(() => {
    if (time === '' && restart === true) {
      setOverallResult((prev) => prev + 3);
      audio
        .play()
        .catch((error) => console.error('Error playing audio:', error));
      setStart(false);
      setReStart(false);
      setIsPaused(true);
      return;
    }

    return;
  }, [audio, restart, start, time]);

  const toCloseWindiw = async () => {
    function getFormattedDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = String(today.getFullYear());
      return `${day}-${month}-${year}`;
    }
    try {
      const formattedDate = getFormattedDate();

      const valueTime = timeCalculation(overallResult, time);
      const timeValue = valueTime;
      const [minutes, sekunden] = timeValue.split(':');
      const formattedTime = `${parseInt(minutes, 10)}.${sekunden}`;

      const newObject = {
        date: data ? data : formattedDate,
        exercises: {
          exerciseID: exercies._id,
          time: parseFloat(formattedTime),
          calories: Math.floor(counter),
        },
      };

      const res = await dispatch(addDiaryExercise(newObject));
      setStart(false);
      setIsPaused(true);

      if (errorValue !== null) {
        Notiflix.Notify.failure('Sorry, something went wrong. Try again');
        return;
      }
      if (res.meta.requestStatus === 'fulfilled') {
        Notiflix.Notify.success('Data added successfully');
        setcloseModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const res = `${minutes}:${seconds}`;

    if (time === '0:0') {
      setTime('');
      setReStart(true);
      return;
    }

    setTime(res);
    return res;
  };
  const toStartTimer = () => {
    setStart((prevStart) => !prevStart);
    setIsPaused((prevStart) => !prevStart);
  };
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  ////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {!closeModal && (
        <ExercisesModalBackground onClick={handleBackgroundClick}>
          <ExercisesModalContainer>
            <CloseExercisesContainer onClick={onClose}>
              <svg width="13" height="13">
                {/* <use href="/DreamTeam/src/img/symbol-defs.svg#icon-close-white"></use> */}
                <use href={sprite + '#icon-close-white'}></use>
              </svg>
            </CloseExercisesContainer>
            <ExercisesInnerModalContainer>
              <TimerDiv>
                <ExercisesModalImg
                  src={exercies.gifUrl}
                  alt="Your GIF"
                ></ExercisesModalImg>
                <TimerText>Time</TimerText>
                <ExercisesModalGif>
                  <CountdownCircleTimer
                    isPlaying={start}
                    duration={180}
                    colors="#e6533c"
                    size={124}
                    strokeWidth={4}
                    shouldRepeat={true}
                    rotation="anticlockwise"
                    strokeLinecap="round"
                    trailStrokeWidth={6}
                    trailColor="rgba(239, 237, 232, 0.05)"
                    onComplete={() => {
                      return { shouldRepeat: true, delay: 0 };
                    }}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </ExercisesModalGif>
                <PlayPause onClick={toStartTimer}>
                  {start ? (
                    <svg width="32" height="32">
                      {/* <use href="/DreamTeam/src/img/symbol-defs.svg#icon-pause"></use> */}
                      <use href={sprite + '#icon-pause'}></use>
                    </svg>
                  ) : (
                    <svg width="32" height="32">
                      {/* <use href="/DreamTeam/src/img/symbol-defs.svg#icon-play"></use> */}
                      <use href={sprite + '#icon-play'}></use>
                    </svg>
                  )}
                </PlayPause>
                <BurnedCalories>
                  Burned calories: <TimeSpan>{Math.floor(counter)}</TimeSpan>
                </BurnedCalories>
              </TimerDiv>
              <DataContainerDiv>
                <DataDiv>
                  <ExercisesBlock>
                    <ExercisesBlockText>Name</ExercisesBlockText>
                    <ExercisesBlockResalts title="title">
                      {title}
                    </ExercisesBlockResalts>
                  </ExercisesBlock>
                  <ExercisesBlock>
                    <ExercisesBlockText>Body Part</ExercisesBlockText>
                    <ExercisesBlockResalts>{bodyPart}</ExercisesBlockResalts>
                  </ExercisesBlock>
                  <ExercisesBlock>
                    <ExercisesBlockText>Target</ExercisesBlockText>
                    <ExercisesBlockResalts>{target}</ExercisesBlockResalts>
                  </ExercisesBlock>
                  <ExercisesBlock>
                    <ExercisesBlockText>Equipment</ExercisesBlockText>
                    <ExercisesBlockResalts>{equipment}</ExercisesBlockResalts>
                  </ExercisesBlock>
                </DataDiv>
                <ExercisesBlockButton
                  onClick={toCloseWindiw}
                  disabled={counter < 1}
                  style={{
                    background: counter < 1 ? '#660000' : '#e6533c',
                    color: counter < 1 ? 'rgba(239, 237, 232, 0.3)' : '#efede8',
                  }}
                >
                  Add to diary
                </ExercisesBlockButton>
              </DataContainerDiv>
            </ExercisesInnerModalContainer>
          </ExercisesModalContainer>
        </ExercisesModalBackground>
      )}
      {closeModal && (
        <ExercisesWellDoneModal
          onClose={onClose}
          time={time}
          timeres={overallResult}
          calori={counter}
          background={handleBackgroundClick}
        />
      )}
    </>
  );
};
export default ExercisesModal;
