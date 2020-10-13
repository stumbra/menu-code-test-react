import styled from "styled-components";

const breakpoint = "683px";

const Wrapper = styled.header`
   background-color: ${({ theme }) => theme.colors.light};
   padding 12px;
   border-bottom: ${({ theme }) => theme.colors.primary} 3px solid;
`;

const InnerWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   @media (max-width: ${breakpoint}) {
      flex-direction: column;
   }
`;

const LogoWrapper = styled.div`
   height: 56px;
   @media (max-width: ${breakpoint}) {
      align-self: center;
      margin-bottom: 5px;
   }
`;

const Logo = styled.img`
   height: 100%;
`;

const ActionWrapper = styled.div`
   display: flex;
   align-self: center;
`;

const Text = styled.h2`
   color: ${({ theme }) => theme.colors.dark};
   @media (max-width: ${breakpoint}) {
      text-align: center;
   }
`;

export { Wrapper, InnerWrapper, LogoWrapper, Logo, ActionWrapper, Text };
