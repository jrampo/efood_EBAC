import React, { useEffect, useState } from "react";
import { ItensContainer } from "./styles.jsx";
import Product from "../Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <ItensContainer>
      {products.length > 0 &&
        products[0].cardapio.map((item) => (
          <Product
            key={item.id}
            name={item.nome}
            image={item.foto}
            description={item.descricao}
          />
        ))}
    </ItensContainer>
  );
};

export default ProductsList;
