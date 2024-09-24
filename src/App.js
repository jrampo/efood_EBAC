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
      <ColorBody>
        <div className="container">
          <Rotas />
        </div>
      </ColorBody>
    </Router>
  );
}

export default App;
