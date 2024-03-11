// import { forwardRef, useState } from "react";
// import { format } from "date-fns";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';;

import { CalendarGlobalStyles, Wrapper } from "./Datapicker.styled";



const Datepicker = ({
  selectedDate,
  setSelectedDate,
  isOpen,
  onClose,
  setCurrentDate,
  userDateRegistration,
}) => {

  const changeDate = (date) => {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const today = changeDate(new Date());

  const handleDateChange = (date) => {
    const formattedDate = changeDate(date);
    if (today >= formattedDate && formattedDate >= userDateRegistration) {
      setSelectedDate(date);
      setCurrentDate(date);
      onClose();
    } else {
      toast.error(
        `However, we don't have any data to show you. You can review the information from the day of your registration: ${userDateRegistration} up to today: ${today}. `,
        {
          theme: 'dark',
        }
      );
    }
  };

  return (
    <Wrapper>
      <DatePicker
        selected={selectedDate}
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        open={isOpen}
        customInput={<div style={{ display: 'none' }} />}
        onChange={handleDateChange}
        minDate={new Date(userDateRegistration)}
        maxDate={new Date(today)}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};
export default Datepicker;