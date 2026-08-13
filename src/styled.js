import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }
    
  body {
    margin: 99px auto 119px;
    width: 1216px;
    max-width: 90%;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    word-break: break-word;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin: 21px auto 121px;
    }
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
`;
