import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  h1 {
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalCss;
