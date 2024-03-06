import styled from 'styled-components';

export const UserBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  background-color: transparent; /* Зробити фон прозорим */
  color: white; /* Задати білий колір тексту */
  cursor: pointer; /* Змінити курсор при наведенні на кнопку */
  transition: background-color 0.3s ease-out;
`;

export const Text = styled.p`
  font-weight: 400;
  /* color: darkblue; */
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
