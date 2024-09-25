import { ItensContainer } from "./styles.jsx";

import Pizza from "../../../assets/pizza.png";

import Product from "../Product";

const mockProducts = [
  {
    id: 1,
    name: "Pizza Marguerita",
    image: Pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 2,
    name: "Pizza Marguerita",
    image: Pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 3,
    name: "Pizza Marguerita",
    image: Pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 4,
    name: "Pizza Marguerita",
    image: Pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 5,
    name: "Pizza Marguerita",
    image: Pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 6,
    name: "Pizza Marguerita",
    image: Pizza,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
];

const ProductsList = () => (
  <ItensContainer>
    {mockProducts.map((product) => (
      <Product
        key={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
      />
    ))}
  </ItensContainer>
);

export default ProductsList;
