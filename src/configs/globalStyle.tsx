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
        /* line-height: 1rem; */
        overflow-x: hidden;
    }
    @media screen and (min-width: 760px){
        *::-webkit-scrollbar {
            width: 10px;
        }
        *::-webkit-scrollbar-thumb {
            background-color: rgba(158, 158, 157, 0.32);
            outline: rgba(158, 158, 157, 0.32) solid 1px;
            border-radius: 5px;
        }
        *::-webkit-scrollbar-track {
            background-color: rgba(158, 158, 157, 0.32);
        }
    }
`;

export default GlobalStyle;
