import React from "react";
import {
  ProductContainer,
  Image,
  TitleContainer,
  TextContainer,
  ProductButton,
  ContentContainer,
} from "./styles";

const Product = ({ name, image, description }) => {
  const formatDescription = `${description.slice(0, 150)}...`;

  return (
    <div className="container">
      <ProductContainer>
        <Image src={image} alt={name} />
        <ContentContainer>
          <TitleContainer>{name}</TitleContainer>
          <TextContainer>{formatDescription}</TextContainer>
          <ProductButton>Adicionar ao carrinho</ProductButton>
        </ContentContainer>
      </ProductContainer>
    </div>
  );
};

export default Product;
