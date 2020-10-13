import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font: 15px/1.5 'Montserrat', sans-serif; 
        background-color: ${({ theme }) => theme.colors.background};
        margin: 5px;
    }

    #root {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    input, button {
        font: 14px 'Montserrat', sans-serif; 
    }

    small, h2, p{
        cursor: default;
    }

    img {
        vertical-align: top;  
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
