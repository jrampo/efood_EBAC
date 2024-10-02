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

const Modal = ({ isOpen, onClose, content, image, title, preco, porcao }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Formatar o preço para o formato em reais
  const formatarPreco = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
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
            <AddToCartButton>
              Adicionar ao Carrinho - {formatarPreco(preco)}
            </AddToCartButton>
          </ModalTextContainer>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
