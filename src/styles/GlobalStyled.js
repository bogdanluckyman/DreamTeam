import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
// import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
:root {
  /* colors */
  --black-color: #040404;
  --orange-color: #E6533C;
  --orange-light-color: #EF8964;
  --white-color: #EFEDE8; 
  --grey-color: #636366;
  --light-grey-color: rgba(239, 237, 232, 0.5);
  --more-light-grey-color: rgba(239, 237, 232, 0.30); }

body {
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--black-color);
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
  margin-bottom: 0;
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
  border: none;
}
button {
  cursor: pointer;
}
dd {
  margin-left: 0;
}
`;
