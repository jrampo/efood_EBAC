import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalTextContainer,
  CloseButton,
  AddToCartButton,
  PorcaoText,
} from "./styles";
import { useDispatch } from "react-redux";
import { add, open } from "../../../store/reducers/cart";

export const formatarPreco = (valor) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
};

const Modal = ({ isOpen, onClose, content, image, title, preco, porcao }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const addToCart = () => {
    dispatch(add({ title, preco, foto: image }));
    dispatch(open());
  };

  return (
    <ModalContainer onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <ModalImage src={image} alt={title} />
          <ModalTextContainer>
            <h2>{title}</h2>
            <p>{content}</p>
            <PorcaoText>Serve de {porcao}</PorcaoText>
            <AddToCartButton onClick={addToCart}>
              Adicionar ao Carrinho - {formatarPreco(preco)}
            </AddToCartButton>
          </ModalTextContainer>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
