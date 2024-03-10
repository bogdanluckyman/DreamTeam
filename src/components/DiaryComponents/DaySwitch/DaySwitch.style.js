import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../../../styles/colors';


export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker-wrapper {
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 30px;
    top: 52px;
  }
   @media screen and (min-width: 1440px) {  
    right: 100px;
  
  }
}

  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px; 
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: ${colors.orangeSecond} !important;
    font-family: Roboto;
    border-radius: 8px;
    font-size: 14px !important;
    border: none !important;
    z-index: 2 !important;
  }

  .react-datepicker__month-container {
    box-sizing: border-box;
    width: 100% !important;
    margin: 0 !important;
  }

  .react-datepicker__month {
  margin: 0 !important;
  text-align: center;
  }

  .react-datepicker__header {
    position: relative;
    width: 100% !important;
    background-color: ${colors.orangeSecond} !important;
  }

  .react-datepicker__day-names {
    display: flex;
    width: 100% !important;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    background-color: ${colors.orangeSecond} !important;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
  }

  .react-datepicker__current-month {
    font-family: 'RobotoMedium';
    font-style: normal;
    text-align: center;
    color: ${colors.white} !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: normal !important;
    letter-spacing: -0.32px !important;
    margin:0px !important;
    margin-bottom: 14px !important;
  }

  .react-datepicker__day-name {
    color: rgba(239, 237, 232, 0.50)  !important;
    font-family: 'RobotoMedium';
    font-size: 14px !important;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px !important;
  }

  .react-datepicker__navigation {
    margin-top: 7px;
    color: white;
  }

  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
    color: red !important;
  }

  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    color: ${colors.white} !important;
    width: 100% !important;
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 32px;
    border-radius: 50% !important;
    text-align: center;
    color: ${colors.white} !important;
    font-family: 'RobotoRegular';
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400 ;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  .react-datepicker__month {
    display: flex;
    width: 100% !important;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 11px;
    margin: 0;
  }

  .react-datepicker__day--selected {
    background-color: ${colors.black} !important;
    color:#3e85f3;
    font-size: 14px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: black !important;
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${colors.black} !important;
    color:#3e85f3;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:${colors.white};
    color:#3e85f3;
  }

  .react-datepicker__day--weekend {
    opacity: 100%;
  }

  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 50%;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0 !important;
  }

  .react-datepicker__tab-loop {
      position: absolute;
      top: 0;
  }
    
  .react-datepicker__triangle {
      display: none !important;
  }

  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
  background-color: transparent !important;
  }

  .react-datepicker__day--outside-month{
  display: none !;
  }

`;


export const ButtonWrapper = styled.button`
    font-family: 'RobotoBold', sans-serif;
    font-style: normal;
    line-height: 32px;
    font-size: 24px;
    color: ${colors.white};
    font-weight: 700;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-right: 20px;


    @media screen and (max-width: 767px){
        font-size: 18px;
        line-height: 20px;
    }

`


export const CalendarWrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`

export const Icon = styled.svg`
    width: 16px;
    height: 16px;
    stroke: ${colors.white};
    fill: transparent;
    cursor: pointer;
    &hover {
        stroke: ${colors.orange};
    }
`

export const CalendarIcon = styled.svg`
    width: 24px;
    height: 24px;
    stroke: ${colors.orange};
    fill: transparent;
`

export const HeaderWrapper = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
`

export const HeaderIcon = styled.svg`
    width: 8px;
    height: 8px;
    stroke: ${colors.white};
    fill: transparent;
    cursor: pointer;
`

export const DataHeader = styled.p`
    font-family: 'RobotoMedium';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    color: ${colors.white};
`

export const CircleWrapper = styled.button`
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &hover{
        background-color: ${colors.orange};
    }
`