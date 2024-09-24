import React from "react";
import { ProductContainer, Image, TextContainer } from "./styles";

const Product = ({ name, image }) => {
  return (
    <ProductContainer>
      <Image src={image} alt={name} />
      <TextContainer>{name}</TextContainer>
    </ProductContainer>
  );
};

export default Product;
