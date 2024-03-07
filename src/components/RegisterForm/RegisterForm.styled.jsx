import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
`;

export const Input = styled.input`
  display: flex;
  padding: 14px;
  position: relative;
  /* margin-bottom: 20px; */
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  outline: rgba(239, 237, 232, 0.3) solid 1px;
  background-color: transparent;
  color: #efede8;

  &::placeholder {
    color: rgba(239, 237, 232, 0.6);
  }

  &:hover,
  &:focus {
    outline: 1px solid #e6533c;
  }

  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.3);
  }

  &.success {
    border-color: #3cbf61; /* Зелений колір для успішного введення */
  }

  &.error {
    border-color: #f80505; /* Червоний колір для помилки */
  }
`;

export const SignInText = styled.p`
  color: rgba(239, 237, 232, 0.6);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const SignInLink = styled(Link)`
  color: #efede8;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`;

export const ButtonIcon = styled.button`
  /* position: absolute; */
  top: 50%; /* Розміщуємо по середині вертикалі */
  right: 8px; /* Відступ від правого краю інпута */
  transform: translateY(-180%);
  margin-left: auto;
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 1; /* Розміщуємо поверх інпута */
  background-color: transparent;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    stroke: #efede8;
  }

  @media screen and (min-width: 768px) {
    width: 53px;
    height: 53px;
    right: 30px;

    width: 30px;
    height: 30px;
    right: 40px;
  }
`;

export const Svg = styled.svg`
  width: 25px;
  height: 25px;
  /* margin-top: 6px; */
  margin-right: 5px;
  stroke: #efede8;
`;

export const GreenMsg = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  height: 14px;
  font-size: 12px;
  color: #3cbf61;
  padding-left: 12px;
  font-size: 12px;
  font-weight: 400;
  padding-top: 5px;
`;

export const SvgGreen = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  stroke: #3cbf61;
`;

export const ErrorMsg = styled.div`
  display: flex;
  width: 100%;
  padding-left: 12px;

  align-items: center;
  justify-content: left;
  height: 14px;
  color: rgba(248, 5, 5, 0.973);
  font-size: 12px;
  font-weight: 400;
`;

export const SvgRed = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;

  vertical-align: middle;
`;
