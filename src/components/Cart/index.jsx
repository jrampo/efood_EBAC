import React from "react";
import { Overlay, CardContainer, Sidebar, Price, CardItem } from "./styles";
import trash from "../../assets/trash.png";
import { useSelector, useDispatch } from "react-redux";
import { close, remove } from "../../store/reducers/cart";

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
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CardContainer>
  );
};

export default ModalCarrinho;
