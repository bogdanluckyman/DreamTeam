import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DaySwitch from '../../../components/DiaryComponents/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/TitlePage/TitlePage';
import DiaryProducts from '../../../components/DiaryComponents/DiaryProducts/DiaryProducts';
import DiaryExercises from '../../../components/DiaryComponents/DiaryExercises/DiaryExercises';
import DayDashboard from '../../../components/DiaryWidgets/DayDashboard';
import { Loader } from '../../../components/Loader/Loader';
import { selectDiaryIsLoading } from '../../../redux/diary/selectors';
import { getAllDiaryInformation } from '../../../redux/diary/operation';
import Notiflix from 'notiflix';

import {
  DiaryCont,
  InfoContainer,
  ProdAndExercise,
  TitleAndSwitch,
  Container,
} from './DiaryPage.style';
import {
  selectBmr,
  selectIsRefreshing,
  selectUser,
} from '../../../redux/auth/selectors';

const formatDate = (date) => {
  const dateObject = new Date(date);
  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const year = dateObject.getFullYear();
  return `${day}-${month}-${year}`;
};

const DiaryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const user = useSelector(selectUser);
  const userDataRegistration = user.createdAt;

  const dispatch = useDispatch();

  const isLoading = useSelector(selectDiaryIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const bmr = useSelector(selectBmr);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const formattedCurrentDate = formatDate(currentDate);
        const res = await dispatch(
          getAllDiaryInformation(formattedCurrentDate)
        );
        if (res.payload) {
          setAllDiaryInformation(res.payload);
          setConsumedProductsArray(res.payload.products);
          setCompletedExercisesArray(res.payload.exercises);
        }
      };

      fetchData();
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
  }, [dispatch, currentDate]);

  const formattedCurrentDate = useMemo(
    () => formatDate(currentDate),
    [currentDate]
  );
  const formattedUserDateRegistration = useMemo(
    () => formatDate(userDataRegistration),
    [userDataRegistration]
  );

  const [allDiaryInformation, setAllDiaryInformation] = useState([]);
  const [consumedProductsArray, setConsumedProductsArray] = useState([]);
  const [completedExercisesArray, setCompletedExercisesArray] = useState([]);

  return (
    <Container>
      {isLoading || isRefreshing ? (
        <Loader />
      ) : (
        <DiaryCont>
          <TitleAndSwitch>
            <TitlePage title="Diary " />
            <DaySwitch
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              userDateRegistration={formattedUserDateRegistration}
            />
          </TitleAndSwitch>
          <InfoContainer>
            <DayDashboard
              userDiaryInformation={allDiaryInformation}
              bmr={bmr}
            />
            <ProdAndExercise>
              <DiaryProducts
                productsArray={consumedProductsArray}
                date={formattedCurrentDate}
              />
              <DiaryExercises
                exercisesArray={completedExercisesArray}
                date={formattedCurrentDate}
              />
            </ProdAndExercise>
          </InfoContainer>
        </DiaryCont>
      )}
    </Container>
  );
};

export default DiaryPage;
