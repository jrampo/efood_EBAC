import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`;

export const ColorBody = styled.div`
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
