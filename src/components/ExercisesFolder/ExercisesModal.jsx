import { useEffect, useState } from 'react';
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

const ExercisesModal = ({ onClose, date, exercies }) => {
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState('');
  const [restart, setReStart] = useState(false);
  const [closeModal, setcloseModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(1);
  const [overallResult, setOverallResult] = useState(3);
  const dispatch = useDispatch();
  const errorValue = useSelector((state) => state.diary.error);
  /////////////////////////////////////////////////////////////

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
      setStart(false);
      setReStart(false);
      setIsPaused(true);
      return;
    }

    return;
  }, [restart, start, time]);

  const toCloseWindiw = () => {
    const valueTime = timeCalculation(overallResult, time);
    const timeValue = valueTime;
    const [minutes, sekunden] = timeValue.split(':');
    const formattedTime = `${parseInt(minutes, 10)}.${sekunden}`;

    const newObject = {
      date: date,
      exercises: {
        exerciseID: exercies._id,
        time: parseFloat(formattedTime),
        calories: Math.floor(counter),
      },
    };
    console.log(newObject);
    dispatch(addDiaryExercise(newObject));

    console.log(errorValue);
    setStart(false);
    setIsPaused(true);
    if (errorValue !== null) {
      Notiflix.Notify.failure('Sorry, something went wrong. Try again');
      return;
    }
    Notiflix.Notify.success('Data added successfully');
    setcloseModal(true);
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
                <use href="/src/img/symbol-defs.svg#icon-close-white"></use>
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
                      <use href="/src/img/symbol-defs.svg#icon-pause"></use>
                    </svg>
                  ) : (
                    <svg width="32" height="32">
                      <use href="/src/img/symbol-defs.svg#icon-play"></use>
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
                    <ExercisesBlockResalts>{title}</ExercisesBlockResalts>
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
                <ExercisesBlockButton onClick={toCloseWindiw}>
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

// import { useEffect, useRef, useState } from 'react';
// import {
//   BurnedCalories,
//   DataContainerDiv,
//   DataDiv,
//   ExercisesBlock,
//   ExercisesBlockButton,
//   ExercisesBlockResalts,
//   ExercisesBlockText,
//   ExercisesModalBackground,
//   ExercisesModalContainer,
//   ExercisesModalGif,
//   ExercisesModalImg,
//   PlayPause,
//   TimeSpan,
//   TimerDiv,
//   TimerText,
// } from './ExercisesModal.styles';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// const ExercisesModal = ({ onClose }) => {
//   const [start, setStart] = useState(false);
//   const [time, setTime] = useState('');
//   const countRef = useRef(0);

//   useEffect(() => {
//     console.log(start);
//     console.log(countRef.current);
//     console.log('00000000000');
//   }, [time, start]);

//   const toCloseWindow = () => {
//     onClose();
//   };

//   const renderTime = ({ remainingTime }) => {
//     const oneRef = useRef(remainingTime);

//     countRef.current = oneRef.current; // Оновлюємо значення рефа
//     if (remainingTime !== 0) {
//       const minutes = Math.floor(remainingTime / 60);
//       const seconds = remainingTime % 60;
//       const res = `${minutes}:${seconds}`;
//       if (res !== '0:0') {
//         console.log('7777777');
//         console.log(res);
//         setTime(res);
//         return time;
//       }
//     }
//     console.log(remainingTime);
//     if (remainingTime === 0 && start === true) {
//       console.log('ddddddddd');
//       const minutes = Math.floor(countRef.current / 60);
//       const seconds = countRef.current % 60;
//       const res = `${minutes}:${seconds}`;

//       console.log('7777777');
//       console.log(res);
//       setTime(res);
//       return time;
//     }

//     console.log('888888');

//     return time;
//   };

//   const handleBackgroundClick = (event) => {
//     if (event.target === event.currentTarget || event.key === 'Escape') {
//       onClose();
//     }
//   };

//   return (
//     <ExercisesModalBackground onClick={handleBackgroundClick}>
//       <ExercisesModalContainer>
//         <TimerDiv>
//           <ExercisesModalImg></ExercisesModalImg>
//           <TimerText>Time</TimerText>
//           <ExercisesModalGif>
//             <CountdownCircleTimer
//               isPlaying={start}
//               duration={5}
//               colors="#e6533c"
//               size={124}
//               strokeWidth={4}
//               shouldRepeat={true}
//               rotation="anticlockwise"
//               strokeLinecap="round"
//               trailStrokeWidth={6}
//               trailColor="rgba(239, 237, 232, 0.05)"
//               onComplete={() => {
//                 setStart(false);
//                 setTime('0:0');
//                 console.log('Timer complete');
//                 return { shouldRepeat: true, delay: 0 };
//               }}
//             >
//               {renderTime}
//             </CountdownCircleTimer>
//           </ExercisesModalGif>
//           <PlayPause onClick={() => setStart((prevStart) => !prevStart)}>
//             <svg width="32" height="32"></svg>
//             <svg width="32" height="32"></svg>
//           </PlayPause>
//           <BurnedCalories>
//             Burned calories: <TimeSpan>{time}</TimeSpan>
//           </BurnedCalories>
//         </TimerDiv>
//         <DataContainerDiv>
//           <DataDiv>
//             <ExercisesBlock>
//               <ExercisesBlockText>Name</ExercisesBlockText>
//               <ExercisesBlockResalts>Air bike</ExercisesBlockResalts>
//             </ExercisesBlock>
//             <ExercisesBlock>
//               <ExercisesBlockText>Target</ExercisesBlockText>
//               <ExercisesBlockResalts>Abs</ExercisesBlockResalts>
//             </ExercisesBlock>
//             <ExercisesBlock>
//               <ExercisesBlockText>Body Part</ExercisesBlockText>
//               <ExercisesBlockResalts>Waist</ExercisesBlockResalts>
//             </ExercisesBlock>
//             <ExercisesBlock>
//               <ExercisesBlockText>Equipment</ExercisesBlockText>
//               <ExercisesBlockResalts>Body weight</ExercisesBlockResalts>
//             </ExercisesBlock>
//           </DataDiv>
//           <ExercisesBlockButton onClick={toCloseWindow}>
//             Add to diary
//           </ExercisesBlockButton>
//         </DataContainerDiv>
//       </ExercisesModalContainer>
//     </ExercisesModalBackground>
//   );
// };

// export default ExercisesModal;
