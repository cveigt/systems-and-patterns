import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: 'Inter', sans-serif;
}

h1, h2, p {
    color: #100427;
}

a {
    color: #601BF2;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
`;

export default GlobalStyles;
