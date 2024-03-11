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
import { selectDiaryError } from '../../redux/diary/selectors';
import { useSelector } from 'react-redux';

const DayDashboard = ({ userDiaryInformation, bmr }) => {
  const {
    burnedCalories,
    consumedCalories,
    remainingCalories,
    remainingSports,
  } = userDiaryInformation;

  const [isOverThan, setIsOverThan] = useState(false);

  const error = useSelector(selectDiaryError);

  useEffect(() => {
    if (remainingCalories < 0) {
      setIsOverThan(true);
    }
  }, [remainingCalories]);

  return (
    <ContainerWrap>
      <ListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={sprite + '#icon-fluent_food-24-filled'}></use>
            </SvgStyled>
            <TitleStyled>Daily calory intake</TitleStyled>
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
              <use href={sprite + '#icon-fluent_food-apple-20-filled'}></use>
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
              <use href={sprite + '#icon-calories-1'}></use>
            </SvgStyled>
            <TitleStyled>Calories burned</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{burnedCalories && !error ? burnedCalories : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled className={isOverThan ? 'redBg' : ''}>
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
        <ItemListStyled className={isOverThan ? 'greenBg' : ''}>
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