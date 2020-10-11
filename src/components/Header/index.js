import React from "react";

import {
   Container,
   InnerContainer,
   LogoContainer,
   Logo,
   ActionContainer,
   ActionText,
} from "./styles";

const Header = () => (
   <Container>
      <InnerContainer>
         <LogoContainer>
            <Logo src="src\assets\opentable-logo.svg" alt="OpenTable Logo" />
         </LogoContainer>
         <ActionContainer>
            <ActionText>
               Please select a restaurant to dine in{" "}
               <span role="img" aria-label="utensils">
                  🍽️
               </span>
            </ActionText>
         </ActionContainer>
      </InnerContainer>
   </Container>
);

export default Header;
