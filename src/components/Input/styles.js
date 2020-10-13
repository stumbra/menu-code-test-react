import styled from "styled-components";

const Wrapper = styled.input`
   position: absolute;
   bottom: 0;
   left: 0;
   height: 50%;
   width: 100%;
   border: none;
   border-bottom: 2px solid silver;
   outline: none;
   color: black;
   text-transform: capitalize;
   &:-webkit-autofill,
   &:-webkit-autofill:hover,
   &:-webkit-autofill:focus,
   &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
   }
`;

const Underline = styled.div`
   position: absolute;
   bottom: 0px;
   height: 2px;
   width: 100%;
   display: flex;
   &:before {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      background: ${({ theme }) => theme.colors.primary};
      transform: scaleX(0);
      transition: transform 0.3s ease;
      ${Wrapper}:valid ~ &, ${Wrapper}:focus ~ & {
         transform: scaleX(1);
      }
   }
`;

const Label = styled.label`
   position: absolute;
   bottom: 10px;
   left: 0;
   pointer-events: none;
   transition: all 0.3s ease;
   color: silver;
   ${Wrapper}:valid ~ &, ${Wrapper}:focus ~ & {
      transform: translateY(-10px);
      font-size: 12px;
   }
`;

export { Wrapper, Underline, Label };
