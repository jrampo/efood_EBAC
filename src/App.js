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
import Confirmacao from "./components/Checkout/Confirmacao";

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
          <Confirmacao />
        </ColorBody>
      </Router>
    </Provider>
  );
}

export default App;
