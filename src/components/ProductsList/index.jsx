import { ItensContainer } from "./styles.jsx";
import Product from "../Product/index.jsx";

const mockProducts = [
  { id: 1, name: "Produto 1", image: "https://via.placeholder.com/250" },
  { id: 2, name: "Produto 2", image: "https://via.placeholder.com/250" },
  { id: 3, name: "Produto 3", image: "https://via.placeholder.com/250" },
  { id: 4, name: "Produto 4", image: "https://via.placeholder.com/250" },
  { id: 5, name: "Produto 5", image: "https://via.placeholder.com/250" },
  { id: 6, name: "Produto 6", image: "https://via.placeholder.com/250" },
];

const ProductsList = () => (
  <ItensContainer>
    {mockProducts.map((product) => (
      <Product key={product.id} name={product.name} image={product.image} />
    ))}
  </ItensContainer>
);

export default ProductsList;
