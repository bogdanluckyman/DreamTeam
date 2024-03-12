import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';

import { TitlePage } from '../../../components/TitlePage/TitlePage';
import ExerciseCategories from '../../../components/ExerciseCategories/ExercisesCategories';

import {
  getError,
  getIsLoading,
} from '../../../redux/exercises/categoriesSlice';

import sprite from '../../../img/sprite.svg';

import {
  ContainerPageExercise,
  BackButton,
  CustomBackground,
  MixContainer,
  Container,
} from './ExercisesPage.styled';

import { Loader } from '../../../components/Loader/Loader';

import { fetchExercisesCategories } from '../../../redux/exercises/operations';

import { toast } from 'react-hot-toast';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const location = useLocation();
  const { filter, filterList } = useParams();

  useEffect(() => {
    const gettingExercisesFilters = async () => {
      if (filter === undefined) {
        {
          toast('We are still awating for data');
        }
      } else {
        dispatch(fetchExercisesCategories({ filter: filter }));
      }
    };
    gettingExercisesFilters();
  }, [dispatch, filter]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <CustomBackground>
      <Container>
        <MixContainer>
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              {filter !== undefined &&
              location.pathname.endsWith(filter.replace(' ', '%20')) ? null : (
                <BackButton onClick={() => navigate(-1)}>
                  <svg style={{ fill: 'none' }}>
                    <use href={sprite + '#icon-arrow-left'} />
                  </svg>
                  Back{' '}
                </BackButton>
              )}
              <ContainerPageExercise>
                <TitlePage
                  title={
                    filterList
                      ? capitalizeFirstLetter(filterList.split(' ')[0])
                      : 'Exercises'
                  }
                />
                <ExerciseCategories />
              </ContainerPageExercise>

              {isLoading && !error && <Loader />}
              <>
                <Suspense>
                  <Outlet />
                </Suspense>
              </>
            </div>
          )}
        </MixContainer>
      </Container>
    </CustomBackground>
  );
};

export default ExercisesPage;
