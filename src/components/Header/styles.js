import styled from "styled-components";

const Container = styled.header`
   background-color: ${({ theme }) => theme.colors.light};
   padding 0.75rem;
   border-bottom: ${({ theme }) => theme.colors.primary} 3px solid;
`;

const InnerContainer = styled.div`
   display: flex;
   justify-content: space-between;
   @media (max-width: 670px) {
      flex-direction: column;
   }
`;

const LogoContainer = styled.div`
   height: 3.5rem;
   @media (max-width: 670px) {
      align-self: center;
      margin-bottom: 5px;
   }
`;

const Logo = styled.img`
   height: 100%;
`;

const ActionContainer = styled.div`
   display: flex;
   align-self: center;
`;

const ActionText = styled.h2`
   color: ${({ theme }) => theme.colors.dark};
   @media (max-width: 670px) {
      text-align: center;
   }
`;

export { Container, InnerContainer, LogoContainer, Logo, ActionContainer, ActionText };
