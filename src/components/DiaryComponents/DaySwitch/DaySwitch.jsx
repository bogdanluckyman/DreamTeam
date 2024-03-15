import { useState } from 'react';
// import { format } from 'date-fns';
import sprite from '../../../img/sprite.svg';
import Datepicker from '../../Datapicker/Datapicker';
import {
  BtnNext,
  BtnPrev,
  CalenderBtn,
  CalenderIconSvg,
  // DateLabel,
  SvgPrev,
  SvgNext,
  ContainerWrap,
} from './DaySwitch.style';

const DaySwitch = ({ currentDate, setCurrentDate, userDateRegistration }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  // const openCalendar = () => {
  //   setCalendarOpen(!isCalendarOpen);
  // };

  const goToPreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(previousDay.getDate() - 1);

    setCurrentDate(previousDay);
    setSelectedDate(previousDay);
  };

  const goToNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);

    setCurrentDate(nextDay);
    setSelectedDate(nextDay);
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCurrentDate(date);
    setCalendarOpen(false);
  };

  return (
    <ContainerWrap>
      <CalenderBtn>
        <Datepicker
          selectedDate={selectedDate}
          setSelectedDate={handleDateChange}
          isOpen={isCalendarOpen}
          onClose={closeCalendar}
          setCurrentDate={setCurrentDate}
          userDateRegistration={userDateRegistration}
        />
        <CalenderIconSvg>
          <use href={`${sprite}#icon-calendar-orange`} />
        </CalenderIconSvg>
      </CalenderBtn>
      <BtnPrev type="button" onClick={goToPreviousDay}>
        <SvgPrev>
          <use href={`${sprite}#icon-chevron-left`} />
        </SvgPrev>
      </BtnPrev>
      <BtnNext type="button" onClick={goToNextDay}>
        <SvgNext>
          <use href={`${sprite}#icon-chevron-right`} />
        </SvgNext>
      </BtnNext>
    </ContainerWrap>
  );
};

export default DaySwitch;
