import styled from "styled-components";

const Container = styled.footer`
   padding: 1rem;
   position: absolute;
   margin: 16px;
   bottom: 0;
   left: 0;
   right: 0;
   width: auto;
   background-color: ${({ theme }) => theme.colors.secondary};
`;

const Copyright = styled.small`
   display: flex;
   justify-content: center;
   text-align: center;
   color: ${({ theme }) => theme.colors.light};
`;

export { Container, Copyright };
