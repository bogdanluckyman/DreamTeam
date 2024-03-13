import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaySwitch from '../../../components/DiaryComponents/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/TitlePage/TitlePage';
import DiaryProducts from '../../../components/DiaryComponents/DiaryProducts/DiaryProducts';
import DiaryExercises from '../../../components/DiaryComponents/DiaryExercises/DiaryExercises';
import DayDashboard from '../../../components/DiaryWidgets/DayDashboard';
import { Loader } from '../../../components/Loader/Loader';

import { selectDiaryIsLoading } from '../../../redux/diary/selectors';
import { getAllDiaryInformation } from '../../../redux/diary/operation';

import {
  DiaryCont,
  InfoContainer,
  ProdAndExercise,
  TitleAndSwitch,
  Container,
} from './DiaryPage.style';

import { toast } from 'react-toastify';
import {
  selectBmr,
  selectIsRefreshing,
  selectUser,
} from '../../../redux/auth/selectors';

import { refreshUser } from '../../../redux/auth/operation';

const DiaryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const user = useSelector(selectUser);
  const userDataRegistration = user.createdAt;

  const dispatch = useDispatch();

  const isLoading = useSelector(selectDiaryIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const bmr = useSelector(selectBmr);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(refreshUser());
        await dispatch(getAllDiaryInformation(formattedCurrentDate));
      } catch (error) {
        toast.error('Sorry! Something went wrong, try latter!', {
          theme: 'dark',
        });
      }
    };

    const formattedCurrentDate = formatDate(currentDate);

    fetchData();
  }, [dispatch, currentDate]);

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = '06-03-2024'; // Поставте потрібну вам дату
      const res = await dispatch(getAllDiaryInformation(formattedDate));
      if (res.payload) {
        setAllDiaryInformation(res.payload);
        setConsumedProductsArray(res.payload.products);
        setCompletedExercisesArray(res.payload.exercises);
      }
    };

    fetchData();
  }, [dispatch]);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const [allDiaryInformation, setAllDiaryInformation] = useState([]);
  const [consumedProductsArray, setConsumedProductsArray] = useState([]);
  const [completedExercisesArray, setCompletedExercisesArray] = useState([]);

  const formattedCurrentDate = formatDate(currentDate);
  const formattedUserDateRegistration = formatDate(userDataRegistration);

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
