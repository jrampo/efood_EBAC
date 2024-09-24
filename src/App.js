import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes";

import { GlobalCss, ColorBody } from "./styles";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <GlobalCss />
      <Header />
      <div className="container">
        <Rotas />
      </div>
    </Router>
  );
}

export default App;
