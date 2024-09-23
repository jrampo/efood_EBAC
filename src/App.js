import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes";

import styled from "styled-components";
import GlobalCss from "./GlobalStyles";
import Header from "./components/Header";

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
      <GlobalCss />
      <Header />
      <Container>
        <Rotas />
      </Container>
    </Router>
  );
}

export default App;
