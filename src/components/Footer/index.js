import React from "react";

import * as S from "./styles";

const year = new Date().getFullYear();

const Footer = () => {
   return (
      <S.Wrapper>
         <S.Copyright>Copyright &copy; {year} OpenTable. All Rights Reserved</S.Copyright>
      </S.Wrapper>
   );
};

export default Footer;
