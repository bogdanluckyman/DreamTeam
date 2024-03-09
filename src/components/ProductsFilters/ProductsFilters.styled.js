import styled from 'styled-components';

export const FiltersField = styled.div`
  width: 335px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  width: inherit;
  padding: 14px;

  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;
  color: var(--white-color);
  background-color: var(--black-color);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export const TitleInput = styled.input`
  font-size: 14px;
  background-color: inherit;
  border: none;
  padding: 0;

  &:hover,
  &:active {
    border: 1px solid var(--orange-color);
  }
`;

export const OptionSelect = styled.select`
  color: var(--white-color);
  background-color: var(--black-color);
  padding: 14px;
  font-size: 14px;
  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const SelectsWrap = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;
