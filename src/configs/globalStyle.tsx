import Color from "color";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.palette.background};
        color: ${({ theme }) => theme.palette.text.primary};
        line-height: 1.5;
        overflow-x: hidden;
    }
    @media screen and (min-width: 760px){
        *::-webkit-scrollbar {
            width: 10px;
        }
        *::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.palette.primary};
            outline: ${({ theme }) => theme.palette.primary} solid 1px;
            border-radius: 5px;
        }
        *::-webkit-scrollbar-track {
            background-color: ${({ theme }) =>
              Color(theme.palette.primary).alpha(0.3).rgb().string()}	;
        }
    }
`;

export default GlobalStyle;
