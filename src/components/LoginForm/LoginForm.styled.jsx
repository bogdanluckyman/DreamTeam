import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: max-content;
  @media screen and (min-width: 375px) {
  }
`;

export const InputButtonCont = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 335px;
  height: 46px;
  font-size: 14px;
  padding: 14px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;
    font-size: 16px;
  }

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
    border-color: #3cbf61;
  }

  &.error {
    border-color: #f80505;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 42px;
  border-radius: 12px;
  margin-top: 28px;
  box-sizing: border-box;
  /* max-width: 196px; */
  margin-bottom: 12px;
  /* white-space: nowrap;
  outline: none; */
  letter-spacing: 0.04em;
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

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 56px;
    font-size: 20px;
    margin-top: 64px;
  }
`;
