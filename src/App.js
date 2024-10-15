import { Provider } from "react-redux";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes";

import { GlobalCss, ColorBody } from "./styles";
import Header from "./components/Header";
import { store } from "./store";
import ModalCarrinho from "./components/Cart";
import Entrega from "./components/Checkout/Entrega";
import Pagamento from "./components/Checkout/Pagamento";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalCss />
        <Header />
        <ColorBody>
          <Rotas />
          <ModalCarrinho />
          <Entrega />
          <Pagamento />
        </ColorBody>
      </Router>
    </Provider>
  );
}

export default App;
