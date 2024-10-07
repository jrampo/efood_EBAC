import React from "react";
import {
  Overlay,
  CardContainer,
  Sidebar,
  Price,
  Quantity,
  CardItem,
} from "./styles";

const ModalCarrinho = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <CardContainer
      className={isOpen ? "is-open" : ""}
      onClick={handleOverlayClick}
    >
      <Overlay />
      <Sidebar>
        <h2>Carrinho de Compras</h2>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <button onClick={() => item.onRemove(item.id)}>Remover</button>
              </div>
            </CardItem>
          ))}
        </ul>
        <Quantity>Total: {items.length} itens</Quantity>
        <Price>
          Valor Total: <span>{/* inserir lógica para calcular o total */}</span>
        </Price>
        <button onClick={onClose}>Fechar</button>
      </Sidebar>
    </CardContainer>
  );
};

export default ModalCarrinho;
