import { useSelector, useDispatch } from "react-redux";
import {
  Overlay,
  CardContainer,
  Sidebar,
  Forms,
  FormsFlex,
  Title,
  Buttons,
} from "./styles";
import { voltarCarrinho } from "../../../store/reducers/cart";

const Pagamento = () => {
  const dispatch = useDispatch();
  const { pagamentoAtivo } = useSelector((state) => state.cart);

  return (
    <CardContainer className={pagamentoAtivo ? "is-open" : ""}>
      <Overlay />
      <Sidebar>
        <Title>Pagamento - Valor a pagar R$ 100,00</Title>
        <Forms>
          <label htmlFor="cartaoNome">Nome no cartão</label>
          <input type="text" id="cartaoNome" />
        </Forms>
        <Forms>
          <label htmlFor="cartaoNumero">Número do cartão</label>
          <input type="text" id="cartaoNumero" />
        </Forms>
        <Forms>
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" />
        </Forms>

        <FormsFlex>
          <Forms>
            <label htmlFor="mes">Mês de vencimento</label>
            <input type="number" id="mes" />
          </Forms>
          <Forms>
            <label htmlFor="ano">Ano de vencimento</label>
            <input type="number" id="ano" />
          </Forms>
        </FormsFlex>

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
