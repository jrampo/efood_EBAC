import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalTextContainer,
  CloseButton,
  AddToCartButton,
} from "./styles";

const Modal = ({ isOpen, onClose, content, image, title, preco, porcao }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
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
            <p>Serve de {porcao}</p>
            <AddToCartButton>Adicionar ao Carrinho - R${preco}</AddToCartButton>
          </ModalTextContainer>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
