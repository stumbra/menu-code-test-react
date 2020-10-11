import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        font: 15px/1.5 'Raleway', sans-serif; 
        background-color: ${({ theme }) => theme.colors.background};
        margin: auto;
        overflow: hidden;
        margin: 16px;
        outline: none;
        box-sizing: border-box;
    }

    input, button {
        font: 14px 'Raleway', sans-serif; 
    }

    small, h2, p{
        cursor: default;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
