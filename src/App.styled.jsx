import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--black-color);
  height: 100%;
`;

export const Container = styled.div`
  width: 340px;
  padding: 30px;
  margin: 24px auto;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: whitesmoke;
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;
export const SubTitle = styled.h2`
  padding-bottom: 15px;
`;

export const LoadingMessage = styled.p`
  color: #888;
  font-size: 32px;
  text-align: center;
`;
