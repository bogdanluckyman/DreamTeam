import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
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
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 335px;
  }
`;

export const Input = styled.input`
  width: 335px;
  height: 46px;
  font-size: 14px;
  padding: 14px;
  position: relative;
  margin: 4px;

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

export const SignInText = styled.p`
  color: rgba(239, 237, 232, 0.6);

  /* font-size: 12px; */
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
  position: absolute;
  top: 45%;
  width: 30px;
  height: 30px;
  right: 15px;

  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  /* 
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    right: 40px;
  } */
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
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
  /* margin: 5px; */
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
  /* margin: 5px; */
`;

export const SvgRed = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;

  vertical-align: middle;
`;
