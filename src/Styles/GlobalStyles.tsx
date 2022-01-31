import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
`;

export default GlobalStyles;
