import { useEffect, useState } from 'react';

import {
  ContainerWrap,
  ListStyled,
  ItemListStyled,
  TitleStyledWrapper,
  TitleStyled,
  ExclamationSvg,
  SvgStyled,
  SvgWrapperText,
  TextStyled,
  TextWrapper,
  DataValue,
} from './DayDashboard.style';

import sprite from '../../img/sprite.svg';
import { useSelector } from 'react-redux';
import { selectDiaryError } from '../../redux/diary/selectors';

const DayDashboard = ({ userDiaryInformation, bmr }) => {
  const {
    burnedCalories,
    consumedCalories,
    remainingCalories,
    remainingSports,
  } = userDiaryInformation;

  const [isOverCalories, setIsOverCalories] = useState(false);
  const [isOverSports, setIsOverSports] = useState(false);

  const error = useSelector(selectDiaryError);

  useEffect(() => {
    if (remainingCalories < 0) {
      setIsOverCalories(true);
    } else {
      setIsOverCalories(false);
    }

    if (remainingSports < 0) {
      setIsOverSports(true);
    } else {
      setIsOverSports(false);
    }
  }, [remainingCalories, remainingSports]);

  return (
    <ContainerWrap>
      <ListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-fork-knife`}></use>
            </SvgStyled>
            <TitleStyled>Daily calorie intake</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{bmr && bmr !== null && bmr !== 0 ? bmr : 2200}</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-dumbbell'}></use>
            </SvgStyled>
            <TitleStyled>Daily norm of sports</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>110 min</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-apple'}></use>
            </SvgStyled>
            <TitleStyled>Calories consumed</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>
            {consumedCalories && !error ? consumedCalories : 0}
          </DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-fire'}></use>
            </SvgStyled>
            <TitleStyled>Calories burned</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{burnedCalories && !error ? burnedCalories : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled className={isOverCalories ? 'redBg' : ''}>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-bubble'}></use>
            </SvgStyled>
            <TitleStyled>The rest of the calories</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>
            {remainingCalories && !error ? remainingCalories : bmr ? bmr : 0}
          </DataValue>
        </ItemListStyled>
        <ItemListStyled className={isOverSports ? 'greenBg' : ''}>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-running-figure'}></use>
            </SvgStyled>
            <TitleStyled>The rest of sports</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>
            {remainingSports && !error ? remainingSports : 110} min
          </DataValue>
        </ItemListStyled>
      </ListStyled>

      <TextWrapper>
        <SvgWrapperText>
          <ExclamationSvg>
            <use
              href={sprite + '#icon-running-stick-figure-svgrepo-com-1'}
            ></use>
          </ExclamationSvg>
        </SvgWrapperText>
        <TextStyled>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </TextStyled>
      </TextWrapper>
    </ContainerWrap>
  );
};

export default DayDashboard;
