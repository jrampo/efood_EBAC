import { useSelector, useDispatch } from "react-redux";
import {
  CardContainer,
  Overlay,
  Sidebar,
  Title,
  Forms,
  FormsFlex,
  FormsFlex2,
  Buttons,
} from "./style";
import { voltarParaEntrega, close } from "../../../store/reducers/cart";

const Pagamento = () => {
  const dispatch = useDispatch();
  const { pagamentoAtivo, items } = useSelector((state) => state.cart);

  const formatarPreco = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  const valorTotal = items.reduce((total, item) => total + item.preco, 0);

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <CardContainer className={pagamentoAtivo ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Title>Pagamento - Valor a pagar {formatarPreco(valorTotal)}</Title>
        <Forms>
          <label htmlFor="cartaoNome">Nome no cartão</label>
          <input type="text" id="cartaoNome" />
        </Forms>
        <FormsFlex>
          <Forms style={{ flex: "2" }}>
            <label htmlFor="cartaoNumero">Número do cartão</label>
            <input type="text" id="cartaoNumero" />
          </Forms>
          <Forms style={{ flex: "1", marginLeft: "10px" }}>
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" />
          </Forms>
        </FormsFlex>
        <FormsFlex2>
          <Forms style={{ flex: "1" }}>
            <label htmlFor="mes">Mês de vencimento</label>
            <input type="number" id="mes" />
          </Forms>
          <Forms style={{ flex: "1", marginLeft: "10px" }}>
            <label htmlFor="ano">Ano de vencimento</label>
            <input type="number" id="ano" />
          </Forms>
        </FormsFlex2>

        <Buttons>
          <button>Confirmar Pagamento</button>
          <button onClick={() => dispatch(voltarParaEntrega())}>
            Voltar para a entrega
          </button>
        </Buttons>
      </Sidebar>
    </CardContainer>
  );
};

export default Pagamento;
