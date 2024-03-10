import { StatsItem, UserStats, Text, StatsLable, AlarmWrapper, StatsSection } from './DiaryWidget.styled';
import { TitlePage } from '../TitlePagePage/TitlePagePage';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectCalories, selectDoneExercisesTime, selectBurnedCalories } from '../../redux/diary/selectors';
import { selectUser } from '../../redux/auth/selectors';

const DiaryWidgets = () => {
  const user = useSelector(selectUser);
  let bmr = 0;
  let targetTime = 0;
  if (user) {
    bmr = user.bmr;
    targetTime = user.targetTime;
  }
  const consumedCalories = useSelector(selectCalories);
  const burnedCalories = useSelector(selectBurnedCalories);
  const timeExercise = useSelector(selectDoneExercisesTime);
  const caloriesRemaining = bmr - consumedCalories;
  const timeInMinutes = Math.round(timeExercise / 60);
  const sportsRemaining = targetTime > timeInMinutes ? targetTime - timeInMinutes : timeInMinutes - targetTime;

  return (
    <StatsSection>
      {user && (
        <>
          <UserStats>
            <StatsItem color="var(--orange-color)">
              <StatsLable>
                <Text color="rgba(239, 237, 232, 0.80)">Daily calorie intake</Text>
              </StatsLable>

              <TitlePage size="h4">{bmr}</TitlePage>
            </StatsItem>

            <StatsItem color="var(--orange-color)">
              <StatsLable>
                <Text color="rgba(239, 237, 232, 0.80)">Daily physical activity</Text>
              </StatsLable>

              <TitlePage size="h4">{targetTime} min</TitlePage>
            </StatsItem>

            <StatsItem color="rgba(239, 237, 232, 0.05)">
              <StatsLable>
                <Text color="rgba(239, 237, 232, 0.40)">Сalories consumed</Text>
              </StatsLable>

              <TitlePage size="h4">{consumedCalories}</TitlePage>
            </StatsItem>

            <StatsItem color="rgba(239, 237, 232, 0.05)">
              <StatsLable>
                <Text color="rgba(239, 237, 232, 0.40)">Сalories burned</Text>
              </StatsLable>

              <TitlePage size="h4">{burnedCalories}</TitlePage>
            </StatsItem>

            <StatsItem color="rgba(239, 237, 232, 0.05)" $border={consumedCalories > bmr ? '#E9101D' : undefined}>
              <StatsLable>
                <Text color="rgba(239, 237, 232, 0.40)">Calories remaining</Text>
              </StatsLable>

              <TitlePage size="h4">{caloriesRemaining}</TitlePage>
            </StatsItem>

            <StatsItem color={'rgba(239, 237, 232, 0.05)'} $border={timeInMinutes > targetTime ? '#3CBF61' : undefined}>
              <StatsLable>
                <Text color="rgba(239, 237, 232, 0.40)">Sports remaining</Text>
              </StatsLable>
              <TitlePage size="h4">{timeInMinutes > targetTime ? `+${sportsRemaining}` : `${sportsRemaining}`} min</TitlePage>
            </StatsItem>
          </UserStats>

          <AlarmWrapper>
            <div style={{ width: '24px', height: '24px' }}>
            </div>

            <MediaQuery maxWidth={767}>
              <Text size="14px" color="rgba(239, 237, 232, 0.30)" $lineheight="1.28">
                Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices.
              </Text>
            </MediaQuery>

            <MediaQuery minWidth={768}>
              <Text size="16px" color="rgba(239, 237, 232, 0.30)">
                Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices.
              </Text>
            </MediaQuery>
          </AlarmWrapper>
        </>
      )}
    </StatsSection>
  );
};

export default DiaryWidgets;