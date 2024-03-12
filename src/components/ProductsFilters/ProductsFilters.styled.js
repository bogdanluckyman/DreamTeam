import styled from 'styled-components';

export const FiltersField = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 664px;

    display: flex;
    margin-bottom: 32px;
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 454px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 14px;

  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;
  background-color: var(--black-color);
  margin-bottom: 16px;

  &:hover,
  &:focus {
    border-color: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export const TitleInput = styled.input`
  font-size: 14px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  padding: 0;
  width: 240px;

  &:hover,
  &:focus {
    outline: 0;
  }
`;

export const ResetBtn = styled.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`;

export const OptionSelect = styled.select`
  width: 100%;
  color: var(--white-color);
  background-color: var(--black-color);
  padding: 14px;
  font-size: 14px;
  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;
  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }

  &:hover,
  &:focus {
    outline: 0;
  }

  option {
    background-color: #1c1c1c;
    color: var(--white-color);
  }
`;

export const Option = styled.option`
  &:hover,
  &:focus {
    background-color: #1c1c1c;
  }
`;

export const SelectsWrap = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;

export const FiltersMark = styled.p`
  display: none;
  font-size: 14px;
  ine-height: 0.78;
  color: var(--light-grey-color);
  position: absolute;
  right: 0;
  top: -26px;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
