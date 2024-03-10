import { format, subDays, addDays } from "date-fns";
import { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../img/sprite.svg';
import {CalendarGlobalStyles, ButtonWrapper, CalendarWrapper, Icon, CalendarIcon, HeaderWrapper, HeaderIcon, DataHeader, CircleWrapper} from './DaySwitch.style'

const DaySwitch = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState(new Date());
  
    const CustomInput = forwardRef(function CustomInput({ onClick }, ref) {
      return (
        <CalendarWrapper>
          <ButtonWrapper onClick={onClick} ref={ref}>
            {format(startDate, 'dd/MM/yyyy')}
            <CalendarIcon onClick={onClick} ref={ref}>
              <use href={`${sprite}#icon-calendar-orange`} />
            </CalendarIcon>
          </ButtonWrapper>
  
          <Icon onClick={() => handleDateChange(subDays(startDate, 1))}>
            <use href={`${sprite}#icon-calendar-left`} />
          </Icon>
          <Icon onClick={() => handleDateChange(addDays(startDate, 1))}>
            <use href={`${sprite}#icon-calendar-right`} />
          </Icon>
        </CalendarWrapper>
      );
    });
  
    const handleDateChange = (newDate) => {
      setStartDate(newDate);
      if (onDateChange) {
        onDateChange(newDate);
      }
    };
  
    const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
      return (
        <HeaderWrapper>
          <CircleWrapper onClick={decreaseMonth}>
            <HeaderIcon>
              <use href={`${sprite}#icon-calendar-left`} />
            </HeaderIcon>
          </CircleWrapper>
          <DataHeader>{format(date, 'MMMM yyyy')}</DataHeader>
          <CircleWrapper onClick={increaseMonth}>
            <HeaderIcon>
              <use href={`${sprite}#icon-calendar-right`} />
            </HeaderIcon>
          </CircleWrapper>
        </HeaderWrapper>
      );
    };
  
    return (
      <>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            onDateChange(date);
          }}
          customInput={<CustomInput />}
          dateFormat={'dd-MM-yyyy'}
          calendarStartDay={1}
          formatWeekDay={(day) => day.substr(0, 2)}
          renderCustomHeader={(props) => <CustomHeader {...props} />}
        />
        <CalendarGlobalStyles />
      </>
    );
  };
  
  export default DaySwitch;
