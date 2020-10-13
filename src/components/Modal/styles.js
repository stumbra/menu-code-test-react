import styled from "styled-components";

import Modal from "react-modal";

const StyledModal = styled(Modal)`
   position: absolute;
   top: 5%;
   border: 1px solid rgb(204, 204, 204);
   background: rgb(255, 255, 255);
   overflow: auto;
   border-radius: 4px;
   outline: none;
   padding: 20px;
   width: 40%;
   margin-left: 30%;
   max-height: 90%;
   @media (max-width: 1000px) {
      margin-left: 20%;
      width: 60%;
   }
   @media (max-width: 524px) {
      margin-left: 10%;
      width: 80%;
   }
   @media (max-width: 296px) {
      margin-left: 8%;
      width: 85%;
   }
`;

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
`;

const InnerWrapper = styled.div`
   text-align: center;
   width: 50%;

   @media (max-width: 480px) {
      width: 70%;
   }
`;

const Header = styled.h2`
   border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
   text-align: center;
`;

const Subtitle = styled.p`
   margin: 25px 0;
`;

const SubactionButton = styled.button`
   background-color: transparent;
   border: none;
   outline: none;
   margin-top: 15px;
   font-size: 12px;
   transition: 0.5s;
   &:hover {
      color: ${({ theme }) => theme.colors.primary};
   }
`;

export { StyledModal, Wrapper, InnerWrapper, Header, Subtitle, SubactionButton };
