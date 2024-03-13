import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnHomeContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SignupOrange = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  margin-right: 16px;

  padding: 10px 27px;
  color: white;

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  background-color: #e6533c;

  @media screen and (min-width: 375px) {
    width: 136px;
    height: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;

    width: 190px;
    height: 56px;

    margin-right: 20px;
    white-space: nowrap;

    padding: 16px 60px;
  }
  &:hover,
  :focus {
    background-color: transparent;
  }
`;

export const SignIn = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;

  padding: 10px 27px;
  color: #efede8;

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;

  &:hover,
  :focus {
    background-color: #e6533c;
  }
  @media screen and (min-width: 375px) {
    width: 136px;
    height: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;

    width: 190px;
    height: 56px;

    margin-right: 20px;
    white-space: nowrap;

    padding: 16px 60px;
  }
`;
