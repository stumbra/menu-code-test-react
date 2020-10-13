import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import Places from "./pages/Places";

import { Header, Footer } from "./components";

import GlobalStyles from "./theme/globalStyles";

import Theme from "./theme/theme";

import "react-toastify/dist/ReactToastify.css";

render(
   <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Places />
      <Footer />
   </ThemeProvider>,
   document.getElementById("root")
);
