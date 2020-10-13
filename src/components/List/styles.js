import styled from "styled-components";

const Wrapper = styled.section`
   padding: 0px 20px 20px 20px;
`;

const Header = styled.h3`
   padding-bottom: 10px;
   border-bottom: 2px solid ${({ theme }) => theme.colors.dark};
`;

const List = styled.div`
   display: flex;
   flex-direction: row;
   overflow-x: auto;
   overflow-y: hidden;
   padding: 10px 0;
   margin-top: 10px;
`;

export { Wrapper, Header, List };
