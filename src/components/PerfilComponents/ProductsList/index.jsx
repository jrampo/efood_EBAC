import React from "react";
import { ItensContainer } from "./styles.jsx";
import Product from "../Product";
import { useGetRestaurantByIdQuery } from "../../../services/api.js";

const ProductsList = ({ id }) => {
  const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <ItensContainer>
      {restaurant && restaurant.cardapio && restaurant.cardapio.length > 0 ? (
        restaurant.cardapio.map((item) => (
          <Product
            key={item.id}
            name={item.nome}
            image={item.foto}
            description={item.descricao}
            preco={item.preco}
            porcao={item.porcao}
          />
        ))
      ) : (
        <p>Não há produtos disponíveis.</p>
      )}
    </ItensContainer>
  );
};

export default ProductsList;
