import styled from 'styled-components';

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
  margin-bottom: 20px;
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

export const Button = styled.button`
  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    letter-spacing: 0px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
    border-radius: 12px;
    margin-top: 64px;
  }
  width: 136px;
  height: 42px;
  box-sizing: border-box;
  max-width: 196px;
  margin-bottom: 12px;
  white-space: nowrap;
  outline: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: inherit;
  background-color: rgb(230, 83, 60);
  color: white;

  font-size: 12px;
  font-weight: 500;
  line-height: calc(1.125);
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: background 0.3s ease-out 0s;
`;
