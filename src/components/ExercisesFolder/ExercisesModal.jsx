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

const ExercisesModal = ({ onClose }) => {
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState('');
  const [restart, setReStart] = useState(false);
  const [closeModal, setcloseModal] = useState(false);
  const [counter, setCounter] = useState(0);
  // const [intervalId, setIntervalId] = useState(null);
  const [seconds, setSeconds] = useState(0);
  /////////////////////////////////////////////////////////////
  const exercise = {
    _id: '64f2458d6f67bc34bae4f86d',
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0130.gif',
    name: 'bench hip extension',
    target: 'glutes',
    burnedCalories: 164,
    time: 3,
  };
  const exercCal = exercise.burnedCalories;

  const title = exercise.name.replace(/(^\w|\.\s\w)/g, (char) =>
    char.toUpperCase()
  );

  const target = exercise.target.replace(/(^\w|\.\s\w)/g, (char) =>
    char.toUpperCase()
  );
  const equipment = exercise.equipment.replace(/(^\w|\.\s\w)/g, (char) =>
    char.toUpperCase()
  );
  const bodyPart = exercise.bodyPart.replace(/(^\w|\.\s\w)/g, (char) =>
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
    setCounter(calculatedCalories.toFixed(2));
    return () => clearInterval(timer);
  }, [counter, exercCal, isPaused, seconds]);

  useEffect(() => {
    if (time === '' && restart === true) {
      setStart(false);
      setReStart(false);
      setIsPaused(true);
      return;
    }

    return;
    //  () => clearInterval(intervalId);
  }, [restart, start, time]);

  const toCloseWindiw = () => {
    const timeRes = 3 - time;

    console.log(timeRes);
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
    if (event.target === event.currentTarget || event.key === 'Escape') {
      onClose();
    }
  };

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
                  src={exercise.gifUrl}
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
                  Burned calories: <TimeSpan>{counter}</TimeSpan>
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
