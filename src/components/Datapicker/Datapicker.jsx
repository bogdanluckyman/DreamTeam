// import { forwardRef, useState } from "react";
// import { format } from "date-fns";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

import { CalendarGlobalStyles, InputField } from "./Datapicker.styled";


const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

   

  return (
    <>
     <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          handleDateChange(date);
        }}
        // customInput={<CustomInput />}
        customInput={<InputField style={{ cursor: 'pointer' }} />}

        dateFormat={"dd.MM.yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        
      />
      <CalendarGlobalStyles />
    </>
     
      
  );
};

export default StyledDatepicker;