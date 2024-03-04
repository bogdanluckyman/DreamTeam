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

      <div style={{ position: 'relative' }}>
        {/* <IconSvg width="18" height="18">
          <use href={`${sprite}#icon-calendar-white`}></use>
        </IconSvg> */}

     <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          handleDateChange(date);
        }}
        // customInput={<CustomInput />}
        customInput={<InputField style={{ cursor: 'pointer' }} />}

        dateFormat={"dd.MM.yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        
      />
      <CalendarGlobalStyles />
   
    </div>
    </>
     
      
  );
};

export default StyledDatepicker;