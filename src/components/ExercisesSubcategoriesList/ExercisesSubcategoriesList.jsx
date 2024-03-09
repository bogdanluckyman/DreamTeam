import { useSelector } from 'react-redux';
import {
  getCategories,
  getIsLoading,
  getError,
} from '../../redux/exercises/categoriesSlice';
import { SubCatItems } from './ExercisesSubcategoriesList.styled';
import { Link } from 'react-router-dom';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { Loader } from '../Loader/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

export const ExercisesSubcategoriesList = () => {
  const categories = useSelector(getCategories);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div>
      {isLoading && !error && <Loader />}

      {!categories ? (
        <p>we dssso not have any exersise category</p>
      ) : (
        <SubCatItems>
          <Swiper
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 10,
                },
              },
              375: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 10,
                },
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                  rows: 3,
                },
              },
              1440: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                grid: {
                  rows: 2,
                },
              },
            }}
            modules={[Grid, Pagination]}
            style={{
              '--swiper-pagination-bullet-inactive-color':
                ' rgba(239, 237, 232, 1)',
              '--swiper-pagination-color': 'rgba(230, 83, 60, 1)',
              '--swiper-pagination-bullet-size': '12px',
              '--swiper-pagination-bullet-horizontal-gap': '5px',
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category._id}>
                <div>
                  <Link to={`/exercises/${category.filter}/${category.name}`}>
                    <ExercisesSubcategoriesItem category={category} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SubCatItems>
      )}
    </div>
  );
};
