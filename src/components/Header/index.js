import React from "react";

import * as S from "./styles";

const Header = () => (
   <S.Wrapper>
      <S.InnerWrapper>
         <S.LogoWrapper>
            <S.Logo src="src\assets\opentable-logo.svg" alt="OpenTable Logo" />
         </S.LogoWrapper>
         <S.ActionWrapper>
            <S.Text>
               {`Please select a restaurant to dine in `}
               <span role="img" aria-label="utensils">
                  🍽️
               </span>
            </S.Text>
         </S.ActionWrapper>
      </S.InnerWrapper>
   </S.Wrapper>
);

export default Header;
