import styled from "styled-components";

const Wrapper = styled.footer`
   padding: 8px;
   background-color: ${({ theme }) => theme.colors.secondary};
   margin-top: 16px;
`;

const Copyright = styled.small`
   display: flex;
   justify-content: center;
   text-align: center;
   color: ${({ theme }) => theme.colors.light};
`;

export { Wrapper, Copyright };
