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
  return (
    <div className="container">
      <ProductContainer>
        <Image src={image} alt={name} />
        <ContentContainer>
          <TitleContainer>{name}</TitleContainer>
          <TextContainer>{description}</TextContainer>
          <ProductButton>Adicionar ao carrinho</ProductButton>
        </ContentContainer>
      </ProductContainer>
    </div>
  );
};

export default Product;
