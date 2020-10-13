import styled from "styled-components";

const StandartButton = styled.button`
   padding: 5px 10px;
   border-radius: 10%;
   background-color: ${({ theme }) => theme.colors.light};
   outline: none;
   transition: ${({ theme }) => theme.transitionTime};
   &:hover:enabled {
      color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.primary};
   }
`;

const RoundedButton = styled.button`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.colors.light};
   transition: ${({ theme }) => theme.transitionTime};
   outline: none;
   align-self: center;
   font-weight: bold;
   font-size: 14px;
   margin-top: 10px;
   &:hover:enabled {
      color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.primary};
   }
`;

const Underline = styled.p`
   font-size: 12px;
   margin: 5px 5px;
   opacity: 0;
   text-align: center;
   transition: ${({ theme }) => theme.transitionTime};
   ${RoundedButton}:hover ~& {
      opacity: 1;
   }
`;

export { StandartButton, RoundedButton, Underline };
