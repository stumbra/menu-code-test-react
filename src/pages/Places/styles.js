import styled from "styled-components";

const Wrapper = styled.main`
   background-color: ${({ theme }) => theme.colors.light};
   margin: 16px 0px;
   margin-bottom: auto;
`;

const EditSection = styled.section`
   padding: 10px 20px;
   display: flex;
   justify-content: center;
   align-self: center;
   @media (max-width: 554px) {
      flex-direction: column;
   }
`;

const Error = styled.p`
   margin-top: 4px;
   color: ${({ theme }) => theme.colors.primary};
   margin-left: 10px;
   text-align: center;
`;

const Form = styled.form`
   height: 40px;
   width: 80%;
   position: relative;
   margin-left: 12.5%;
`;

const Main = styled.div`
   display: flex;
   justify-content: space-evenly;
   flex-direction: ${(props) => (props.lastAndNotOnlyInput ? "row" : "column")};
`;

const ButtonWrapper = styled.div`
   margin-left: ${(props) => (props.lastAndNotOnlyInput ? "15px" : "0px")};
`;

const RestaurantTitle = styled.h2`
   text-align: center;
   border-bottom: 2px solid ${({ theme }) => theme.colors.dark};
   width: 80%;
   padding-bottom: 10px;
   margin: 0 0 20px 10%;
`;

const CourseForGuest = styled.p`
   text-align: center;
`;

const Price = styled.p`
   text-align: center;
   margin-top: 5px;
   opacity: ${({ showBill }) => (showBill > 0 ? 1 : 0)};
`;

export {
   Wrapper,
   EditSection,
   Form,
   Main,
   Error,
   RestaurantTitle,
   ButtonWrapper,
   CourseForGuest,
   Price,
};
