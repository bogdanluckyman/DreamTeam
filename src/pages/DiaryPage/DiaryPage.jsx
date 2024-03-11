import { DiaryExercises } from '../../components/DiaryComponents/DiaryExercises/DiaryExercises';
import { DiaryProducts } from '../../components/DiaryComponents/DiaryProducts/DiaryProducts';
import MediaQuery from 'react-responsive';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import format from 'date-fns/format';
import DaySwitch from '../../components/DiaryComponents/DaySwitch/DaySwitch';
import {
  DiaryTitleWrap,
  DiaryActWrap,
  DiaryContentWrap,
} from './DiaryPage.style';
import { Loader } from '../../components/Loader/Loader';
import { selectIsLoadingDiary } from '../../redux/diary/selectors';
import { getDiaryList } from '../../redux/diary/operation';
import { refreshUser } from '../../redux/auth/operation';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const [selectDate, setSelectDate] = useState(
    format(new Date(), 'dd-MM-yyyy')
  );
  const isLoading = useSelector(selectIsLoadingDiary);

  const handleDateChange = (date) => {
    const newDate = format(date, 'dd-MM-yyyy');
    setSelectDate(newDate);
  };

  useEffect(() => {
    dispatch(getDiaryList(selectDate));
  }, [dispatch, selectDate]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <section>
        <DiaryTitleWrap>
          <TitlePage title={'Diary'}>Diary</TitlePage>
          <DaySwitch onChangeDate={handleDateChange} />
        </DiaryTitleWrap>
        <MediaQuery maxWidth={765}></MediaQuery>
        <DiaryContentWrap>
          <DiaryActWrap>
            <DiaryProducts />
            <DiaryExercises />
          </DiaryActWrap>
          <MediaQuery minWidth={768}></MediaQuery>
        </DiaryContentWrap>
      </section>
    </>
  );
};

export default DiaryPage;
