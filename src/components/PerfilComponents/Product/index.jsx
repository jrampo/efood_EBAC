import React, { useState } from "react";
import {
  ProductContainer,
  Image,
  TitleContainer,
  TextContainer,
  ProductButton,
  ContentContainer,
} from "./styles";
import Modal from "../ModalProduct";

const Product = ({ id, name, image, description, preco, porcao }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const formatDescription = `${description.slice(0, 150)}...`;

  return (
    <div className="container">
      <ProductContainer>
        <Image src={image} alt={name} />
        <ContentContainer>
          <TitleContainer>{name}</TitleContainer>
          <TextContainer>{formatDescription}</TextContainer>
          <ProductButton onClick={handleOpenModal}>Mais detalhes</ProductButton>
        </ContentContainer>
      </ProductContainer>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={description}
        image={image}
        title={name}
        preco={preco}
        porcao={porcao}
        id={id}
      />
    </div>
  );
};

export default Product;
