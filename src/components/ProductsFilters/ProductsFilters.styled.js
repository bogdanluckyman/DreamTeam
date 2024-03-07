import styled from 'styled-components';

export const FiltersField = styled.div`
  width: 335px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const TitleInput = styled.input`
  width: inherit;

  color: var(--white-color);
  background-color: var(--black-color);
  margin-bottom: 16px;
  padding: 14px;
  font-size: 14px;
  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
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
