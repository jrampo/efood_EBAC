import { Provider } from "react-redux";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes";

import { GlobalCss, ColorBody } from "./styles";
import Header from "./components/Header";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalCss />
        <Header />
        <ColorBody>
          <Rotas />
        </ColorBody>
      </Router>
    </Provider>
  );
}

export default App;
