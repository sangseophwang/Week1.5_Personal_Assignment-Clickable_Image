import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
        font-family: "Spoqa Han Sans Neo", "sans-serif";
        overflow-x: hidden;
      }
`;

export default GlobalStyles;
