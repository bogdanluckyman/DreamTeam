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

const ExercisesModal = ({ onClose, durationValue }) => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState('');
  const [restart, setReStart] = useState(false);
  const [closeModal, setcloseModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      onClose();
    }
  });

  // const incrementCounter = () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // };

  useEffect(() => {
    // if (start) {
    //   console.log('xxxxxxxxx');
    //   const id = setInterval(() => {
    //     incrementCounter();
    //   }, 1000);
    //   console.log(id);
    //   setIntervalId(id);
    // } else {
    //   console.log('kkkkkkkkk');
    //   clearInterval(intervalId);
    // }
    if (time === '' && restart === true) {
      setStart(false);
      setReStart(false);
      return;
    }

    return () => clearInterval(intervalId);
  }, [intervalId, restart, start, time]);

  const toCloseWindiw = () => {
    setcloseModal(true);
  };

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const res = `${minutes}:${seconds}`;

    console.log(res);
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
                <ExercisesModalImg></ExercisesModalImg>
                <TimerText>Time</TimerText>
                <ExercisesModalGif>
                  <CountdownCircleTimer
                    isPlaying={start}
                    duration={5}
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
                    <ExercisesBlockResalts>Air bike</ExercisesBlockResalts>
                  </ExercisesBlock>
                  <ExercisesBlock>
                    <ExercisesBlockText>Target</ExercisesBlockText>
                    <ExercisesBlockResalts>Abs</ExercisesBlockResalts>
                  </ExercisesBlock>
                  <ExercisesBlock>
                    <ExercisesBlockText>Body Part</ExercisesBlockText>
                    <ExercisesBlockResalts>Waist</ExercisesBlockResalts>
                  </ExercisesBlock>
                  <ExercisesBlock>
                    <ExercisesBlockText>Equipment</ExercisesBlockText>
                    <ExercisesBlockResalts>Body weight</ExercisesBlockResalts>
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
          time={0}
          calori={0}
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
