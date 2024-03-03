import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`body {
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${colors.white};
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}
`;
