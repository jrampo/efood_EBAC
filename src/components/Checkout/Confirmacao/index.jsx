import { useDispatch, useSelector } from "react-redux";
import { close } from "../../../store/reducers/cart";

import {
  CardContainer,
  Overlay,
  Sidebar,
  Title,
  Buttons,
  Texts,
} from "./styles";

const Confirmacao = () => {
  const dispatch = useDispatch();
  const { confirmacaoAtivo } = useSelector((state) => state.cart);

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <CardContainer className={confirmacaoAtivo ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Title>Pedido realizado - (ORDER_ID)</Title>
        <Texts>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </Texts>
        <Buttons>
          <button>Concluir</button>
        </Buttons>
      </Sidebar>
    </CardContainer>
  );
};

export default Confirmacao;
