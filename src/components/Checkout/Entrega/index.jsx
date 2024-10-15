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
import {
  voltarCarrinho,
  continuarPagamento,
  close,
} from "../../../store/reducers/cart";

const Entrega = () => {
  const dispatch = useDispatch();
  const { entregaAtiva } = useSelector((state) => state.cart);

  const handleVoltarCarrinho = () => {
    dispatch(voltarCarrinho());
  };

  const handleContinuarPagamento = () => {
    dispatch(continuarPagamento());
  };

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <CardContainer className={entregaAtiva ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Title>Entrega</Title>
        <Forms>
          <label htmlFor="destinatario">Quem irá receber</label>
          <input type="text" id="destinatario" />
        </Forms>
        <Forms>
          <label htmlFor="endereco">Endereço</label>
          <input type="text" id="endereco" />
        </Forms>
        <Forms>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" />
        </Forms>

        <FormsFlex>
          <Forms>
            <label htmlFor="cep">CEP</label>
            <input type="number" id="cep" />
          </Forms>
          <Forms>
            <label htmlFor="numero">Número</label>
            <input type="number" id="numero" />
          </Forms>
        </FormsFlex>

        <Forms>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input type="text" id="complemento" />
        </Forms>
        <Buttons>
          <button onClick={handleContinuarPagamento}>
            Continuar com o pagamento
          </button>
          <button onClick={handleVoltarCarrinho}>Voltar para o carrinho</button>
        </Buttons>
      </Sidebar>
    </CardContainer>
  );
};

export default Entrega;
