import { ItensContainer } from "./styles.jsx";
import Product from "../Product/index.jsx";

import { useGetRestaurantsQuery } from "../../../services/api.js";

const ProductsList = () => {
  const { data: restaurants = [], isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <ItensContainer>
      {restaurants.map((restaurant) => {
        const truncatedDescription = `${restaurant.descricao.slice(0, 250)}..`;

        const tipoMaiuscula =
          restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1);

        return (
          <Product
            id={restaurant.id}
            key={restaurant.id}
            name={restaurant.titulo}
            image={restaurant.capa}
            description={truncatedDescription}
            rate={restaurant.avaliacao}
            tipoComida={tipoMaiuscula}
            destaque={restaurant.destacado}
          />
        );
      })}
    </ItensContainer>
  );
};

export default ProductsList;
