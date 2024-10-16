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
  Buttons2,
} from "./styles";
import { voltarParaEntrega, close } from "../../../store/reducers/cart";

import { useFormik } from "formik";
import * as Yup from "yup";

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

  const form = useFormik({
    initialValues: {
      cartaoNome: "",
      cartaoNumero: "",
      cvv: "",
      mes: "",
      ano: "",
    },
    validationSchema: Yup.object({
      cartaoNome: Yup.string()
        .min(5, "Deve ter no mínimo 5 caractéres")
        .required("O campo é obrigatório"),
      cartaoNumero: Yup.string()
        .length(16, "Deve ter 16 caractéres")
        .required("O campo é obrigatório"),
      cvv: Yup.string()
        .length(3, "Deve ter 3 caractéres")
        .required("O campo é obrigatório"),
      mes: Yup.number()
        .min(1, "Deve ser um mês válido")
        .max(12, "Deve ser um mês válido")
        .required("O campo é obrigatório"),
      ano: Yup.number()
        .min(1000, "Deve ter 4 dígitos")
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
    <CardContainer className={pagamentoAtivo ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Title>Pagamento - Valor a pagar {formatarPreco(valorTotal)}</Title>
        <form onSubmit={form.handleSubmit}>
          <Forms>
            <label htmlFor="cartaoNome">Nome no cartão</label>
            <input
              type="text"
              id="cartaoNome"
              name="cartaoNome"
              value={form.values.cartaoNome}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage("cartaoNome", form.errors.cartaoNome)}
            </small>
          </Forms>
          <FormsFlex>
            <Forms style={{ flex: "2" }}>
              <label htmlFor="cartaoNumero">Número do cartão</label>
              <input
                type="number"
                id="cartaoNumero"
                name="cartaoNumero"
                value={form.values.cartaoNumero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage("cartaoNumero", form.errors.cartaoNumero)}
              </small>
            </Forms>
            <Forms style={{ flex: "1", marginLeft: "10px" }}>
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                id="cvv"
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("cvv", form.errors.cvv)}</small>
            </Forms>
          </FormsFlex>
          <FormsFlex2>
            <Forms style={{ flex: "1" }}>
              <label htmlFor="mes">Mês de vencimento</label>
              <input
                type="number"
                id="mes"
                name="mes"
                value={form.values.mes}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("number", form.errors.number)}</small>
            </Forms>
            <Forms style={{ flex: "1", marginLeft: "10px" }}>
              <label htmlFor="ano">Ano de vencimento</label>
              <input
                type="number"
                id="ano"
                name="ano"
                value={form.values.ano}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("ano", form.errors.ano)}</small>
            </Forms>
          </FormsFlex2>

          <Buttons>
            <button>Confirmar Pagamento</button>
          </Buttons>
        </form>
        <Buttons2>
          <button onClick={() => dispatch(voltarParaEntrega())}>
            Voltar para a entrega
          </button>
        </Buttons2>
      </Sidebar>
    </CardContainer>
  );
};

export default Pagamento;
