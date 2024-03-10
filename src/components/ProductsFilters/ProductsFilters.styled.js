import styled from 'styled-components';

export const FiltersField = styled.div`
  width: 335px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 664px;

    display: flex;
    margin-bottom: 32px;
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
  color: var(--white-color);
  background-color: var(--black-color);
  padding: 14px;
  font-size: 14px;
  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  &:hover,
  &:focus {
    outline: 0;
  }
`;

export const SelectsWrap = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;
