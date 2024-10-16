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
import * as Yup from "yup";

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
    validationSchema: Yup.object({
      destino: Yup.string()
        .min(5, "Deve ter no mínimo 5 caractéres")
        .required("O campo é obrigatório"),
      endereco: Yup.string()
        .min(10, "Deve ter no mínimo 10 caractéres")
        .required("O campo é obrigatório"),
      cidade: Yup.string()
        .min(5, "Deve ter no mínimo 5 caractéres")
        .required("O campo é obrigatório"),
      cep: Yup.number()
        .min(8, "Deve ter 8 caracteres")
        .max(8, "Deve ter 8 caracteres")
        .required("O campo é obrigatório"),
      numero: Yup.number()
        .min(1, "Deve ter no mínimo 1 caractere")
        .required("O campo é obrigatório"),
      complemento: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const getErrorMessage = (fieldName, message) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return message;
    return "";
  };

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
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage("destino", form.errors.destino)}</small>
          </Forms>
          <Forms>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage("endereco", form.errors.endereco)}</small>
          </Forms>
          <Forms>
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage("cidade", form.errors.cidade)}</small>
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
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("cep", form.errors.cep)}</small>
            </Forms>
            <Forms>
              <label htmlFor="numero">Número</label>
              <input
                type="number"
                id="numero"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("numero", form.errors.numero)}</small>
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
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage("complemento", form.errors.complemento)}
            </small>
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
