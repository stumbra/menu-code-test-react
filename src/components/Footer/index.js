import React from "react";

import { Container, Copyright } from "./styles";

const year = new Date().getFullYear();

const Footer = () => {
   return (
      <Container>
         <Copyright>Copyright &copy; {year} OpenTable. All Rights Reserved</Copyright>
      </Container>
   );
};

export default Footer;
