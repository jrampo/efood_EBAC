import React, { useEffect, useState } from "react";
import { ItensContainer } from "./styles.jsx";
import Product from "../Product";

const ProductsList = ({ id }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.cardapio);
        });
    }
  }, [id]);

  return (
    <ItensContainer>
      {products.length > 0 ? (
        products.map((item) => (
          <Product
            key={item.id}
            name={item.nome}
            image={item.foto}
            description={item.descricao}
          />
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}
    </ItensContainer>
  );
};

export default ProductsList;
