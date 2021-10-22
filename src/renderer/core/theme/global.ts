import { createGlobalStyle } from 'styled-components';
import theme from '.';

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: ${theme.fontFamily};
    background-color: ${theme.color.purple[800]};
  }

  * {
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
