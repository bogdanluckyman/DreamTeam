

import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg, InputField } from './DatapickerProfile.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../img/symbol-defs.svg';

const DatapickerProfile = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };


  

  return (
    <>
      <div style={{ position: 'relative' }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#icon-calendar-white`}></use>
        </IconSvg>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            handleDateChange(date);
          }}
          customInput={<InputField style={{ cursor: 'pointer' }} />}
          dateFormat={'dd.MM.yyyy'}
          calendarStartDay={1}
          formatWeekDay={(day) => day.substr(0, 2)}
        />

        <CalendarGlobalStyles />
      </div>
    </>
  );
};

export default DatapickerProfile;