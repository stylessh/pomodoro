import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      outline: none;

      font-family: 'Poppins', sans-serif;
  }

  body {
    background: #213944;
  }
`;

export default GlobalStyle;
