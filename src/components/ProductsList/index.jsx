import { ItensContainer } from "./styles.jsx";
import Product from "../Product/index.jsx";

import imgSushi from "../../assets/sushi.png";
import imgMacarrao from "../../assets/macarrao.png";

const mockProducts = [
  {
    id: 1,
    name: "Hioki Sushi",
    image: imgSushi,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    rate: "4.9",
    tipoComida: "Japonesa",
    destaque: true,
  },
  {
    id: 2,
    name: "La Dolce Vita Trattoria",
    image: imgMacarrao,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: "4.6",
    tipoComida: "Italiana",
    destaque: false,
  },
  {
    id: 3,
    name: "La Dolce Vita Trattoria",
    image: imgMacarrao,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: "4.6",
    tipoComida: "Italiana",
    destaque: false,
  },
  {
    id: 4,
    name: "La Dolce Vita Trattoria",
    image: imgMacarrao,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: "4.6",
    tipoComida: "Italiana",
    destaque: false,
  },
  {
    id: 5,
    name: "La Dolce Vita Trattoria",
    image: imgMacarrao,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: "4.6",
    tipoComida: "Italiana",
    destaque: false,
  },
  {
    id: 6,
    name: "La Dolce Vita Trattoria",
    image: imgMacarrao,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    rate: "4.6",
    tipoComida: "Italiana",
    destaque: false,
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
        rate={product.rate}
        tipoComida={product.tipoComida}
        destaque={product.destaque}
      />
    ))}
  </ItensContainer>
);

export default ProductsList;
