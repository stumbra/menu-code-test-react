import styled from "styled-components";

import Modal from "react-modal";

const StyledModal = styled(Modal)`
   position: absolute;
   top: 40px;
   left: 40px;
   right: 40px;
   bottom: 40px;
   border: 1px solid rgb(204, 204, 204);
   background: rgb(255, 255, 255);
   overflow: auto;
   border-radius: 4px;
   outline: none;
   padding: 20px;
   width: 50vw;
   min-width: 70vw;
   height: 50%;
   margin: 0px auto;
`;

const Container = styled.div`
   display: flex;
   justify-content: center;
`;

const InnerContainer = styled.div`
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
   margin-top: 25px;
   margin-bottom: 25px;
`;

const ActionButton = styled.button`
   padding: 5px 20px;
   border-radius: 10%;
   background-color: #fff;
   transition: 0.6s;
   outline: none;
   margin-top: 10px;
   font-size: 14px;
   &:hover:enabled {
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
   }
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

export { StyledModal, Container, InnerContainer, Header, Subtitle, ActionButton, SubactionButton };
