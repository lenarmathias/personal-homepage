import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }
    
    body {
        margin: 119px auto 109px;
        width: 1216px;
        max-width: 90%;
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        word-break: break-word;
        position: relative;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            margin: 21px 17px;
        }
    }

    h1 {
        margin-top: 12px;
        margin-bottom: 35;
        font-size: 38px;
        letter-spacing: 1.9px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: 22px;
            letter-spacing: 1.1px;
        }
    }

    h1, h2 {
        font-weight: 900;
        line-height: normal;
        font-style: normal;
        color: ${({ theme }) => theme.colors.secondaryTextColor};
    }

    h2 {
        font-size: 30px;
        letter-spacing: 1.5px;
    }
`;