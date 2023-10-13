import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import 'Open Sans' font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  /* Apply 'Open Sans' font to all text elements */
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyles;
