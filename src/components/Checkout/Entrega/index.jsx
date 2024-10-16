import { useSelector, useDispatch } from "react-redux";
import {
  Overlay,
  CardContainer,
  Sidebar,
  Forms,
  FormsFlex,
  Title,
  Buttons,
  Buttons2,
} from "./styles";
import {
  voltarCarrinho,
  continuarPagamento,
  close,
} from "../../../store/reducers/cart";

import { useFormik } from "formik";

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

  const form = useFormik({
    initialValues: {
      destino: "",
      endereco: "",
      cidade: "",
      cep: "",
      numero: "",
      complemento: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <CardContainer className={entregaAtiva ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Title>Entrega</Title>
        <form onSubmit={form.handleSubmit}>
          <Forms>
            <label htmlFor="destino">Quem irá receber</label>
            <input
              type="text"
              id="destino"
              name="destino"
              value={form.values.destino}
              onChange={form.handleChange}
            />
          </Forms>
          <Forms>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
            />
          </Forms>
          <Forms>
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
            />
          </Forms>

          <FormsFlex>
            <Forms>
              <label htmlFor="cep">CEP</label>
              <input
                type="number"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
              />
            </Forms>
            <Forms>
              <label htmlFor="numero">Número</label>
              <input
                type="number"
                id="numero"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
              />
            </Forms>
          </FormsFlex>

          <Forms>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
            />
          </Forms>
          <Buttons>
            <button onClick={handleContinuarPagamento}>
              Continuar com o pagamento
            </button>
          </Buttons>
        </form>
        <Buttons2>
          <button onClick={handleVoltarCarrinho}>Voltar para o carrinho</button>
        </Buttons2>
      </Sidebar>
    </CardContainer>
  );
};

export default Entrega;
