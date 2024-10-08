import React from "react";
import {
  ProductContainer,
  Image,
  TitleContainer,
  TextContainer,
  ProductButton,
  ContentContainer,
  StarRate,
  TitleStar,
  Rate,
  Badge,
  BadgeDestaque,
} from "./styles";

import Estrela from "../../../assets/SVGs/Estrela";

const Product = ({
  id,
  name,
  image,
  description,
  rate,
  tipoComida,
  destaque,
}) => {
  return (
    <ProductContainer>
      <Image src={image} alt={name} />
      <ContentContainer>
        <TitleStar>
          <TitleContainer>{name}</TitleContainer>
          <StarRate>
            <Rate>{rate}</Rate>
            <Estrela />
          </StarRate>
        </TitleStar>
        <TextContainer>{description}</TextContainer>
        <Badge>{tipoComida}</Badge>
        {destaque && <BadgeDestaque>Destaque da semana</BadgeDestaque>}
        <ProductButton to={`/perfil/${id}`}>Saiba mais</ProductButton>
      </ContentContainer>
    </ProductContainer>
  );
};

export default Product;
