import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaySwitch from '../../../components/DiaryComponents/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/TitlePage/TitlePage';
import DiaryProducts from '../../../components/DiaryComponents/DiaryProducts/DiaryProducts';
import DiaryExercises from '../../../components/DiaryComponents/DiaryExercises/DiaryExercises';
import DayDashboard from '../../../components/DiaryWidgets/DayDashboard';
import { Loader } from '../../../components/Loader/Loader';

import {
  // selectCompletedExercisesArray,
  // selectConsumedProducts,
  // selectDiaryInformation,
  selectDiaryIsLoading,
} from '../../../redux/diary/selectors';
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
  const [allDiaryInformation, setallDiaryInformation] = useState([]);
  const [consumedProductsArray, setconsumedProductsArray] = useState([]);
  const [completedExercisesArray, setcompletedExercisesArray] = useState([]);
  const dispatch = useDispatch();
  // const userData = useSelector(selectDiaryInformation);

  const isLoading = useSelector(selectDiaryIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const bmr = useSelector(selectBmr);
  // const consumedProductsArray = useSelector(selectConsumedProducts);

  // const completedExercisesArray = useSelector(selectCompletedExercisesArray);
  // const allDiaryInformation = userData?.allDiaryInformation || {};
  const [currentDate, setCurrentDate] = useState(new Date());
  const user = useSelector(selectUser);
  const userDataRegistration = user.createdAt;
  const changeDate = (date) => {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formattedCurrentDate = changeDate(currentDate);
  const formattedUserDateRegistration = changeDate(userDataRegistration);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(refreshUser());
        await dispatch(getAllDiaryInformation(formattedCurrentDate));
      } catch (error) {
        toast.error('Sorry, something went wrong, please try again', {
          theme: 'dark',
        });
      }
    };
    fetchData();
  }, [dispatch, formattedCurrentDate, currentDate]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getAllDiaryInformation('06-03-2024'));
      setallDiaryInformation(res.payload);
      setconsumedProductsArray(res.payload.products);
      setcompletedExercisesArray(res.payload.exercises);
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container>
      {isLoading || isRefreshing ? (
        <Loader />
      ) : (
        <DiaryCont>
          <TitleAndSwitch>
            <TitlePage title="Diary" />
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
