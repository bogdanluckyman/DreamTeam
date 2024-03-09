import {
  SvgWrapper,
  WrapperTitle,
  Title,
  WrapperText,
  TextCategory,
  Text,
  Span,
} from './ExercisesItem.styled';

import { colors } from '../../styles/colors';

import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import ExercisesModal from '../ExercisesFolder/ExercisesModal';

export const ExercisesItem = ({
  exercise: { burnedCalories, name, bodyPart, target },
  exercises,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <>
        <Span>WORKOUT</Span>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignSelf: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          ></div>
          <button onClick={openModal}>
            Start
            <SvgWrapper
              style={{
                width: '16px',
                height: '16px',
              }}
            >
              <use
                href={sprite + '#icon-arrow'}
                style={{
                  stroke: colors.orange,
                }}
              />
            </SvgWrapper>
          </button>
        </div>

        <WrapperTitle>
          <svg style={{ flexShrink: 0, width: '24px', height: '24px' }}>
            <use href={sprite + '#icon-running-stick-figure-svgrepo-com-1'} />
          </svg>

          <Title>{name}</Title>
        </WrapperTitle>

        <WrapperText>
          <Text>
            <span>Burned calories:</span>
            {burnedCalories}
          </Text>
          <TextCategory>
            <span>Body part:</span>
            {bodyPart}
          </TextCategory>
          <Text>
            <span>Target:</span>
            {target}
          </Text>
        </WrapperText>
        {isModalOpen && (
          <ExercisesModal
            onClose={closeModal}
            date={'06-03-2024'}
            exercies={exercises}
          />
        )}
      </>
    </>
  );
};
