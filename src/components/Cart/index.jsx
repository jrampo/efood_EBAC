import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  Overlay,
  CardContainer,
  Sidebar,
  Price,
  CardItem,
  LinkEntrega,
} from "./styles";
import trash from "../../assets/trash.png";
import { close, remove, continuarEntrega } from "../../store/reducers/cart";

const ModalCarrinho = () => {
  const { isOpen, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const formatarPreco = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  const valorTotal = items.reduce((total, item) => total + item.preco, 0);

  const handleRemoveItem = (id) => {
    dispatch(remove(id));
  };

  const handleContinuarEntrega = () => {
    dispatch(continuarEntrega());
  };

  return (
    <CardContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.foto} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <span className="price">{formatarPreco(item.preco)}</span>
                <img
                  src={trash}
                  alt="trash"
                  className="trash-icon"
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
            </CardItem>
          ))}
        </ul>
        <Price>
          <p>Valor Total:</p>
          <p>{formatarPreco(valorTotal)}</p>
        </Price>
        <LinkEntrega onClick={handleContinuarEntrega}>
          Continuar com a entrega
        </LinkEntrega>
      </Sidebar>
    </CardContainer>
  );
};

export default ModalCarrinho;
