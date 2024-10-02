import { useEffect, useState } from "react";
import {
  BannerContainer,
  Overlay,
  BannerMacarrao,
  TextOverlay,
  BottomText,
  BannerTextContainer,
} from "../Banner/styles";

const Banner = ({ id }) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setRestaurant(data);
        });
    }
  }, [id]);

  if (!restaurant) {
    return <div>Carregando...</div>;
  }

  return (
    <BannerContainer>
      <BannerMacarrao src={restaurant.capa} alt="Banner restaurante" />
      <Overlay />
      <BannerTextContainer>
        <>
          <TextOverlay>{restaurant.tipo}</TextOverlay>
          <BottomText>{restaurant.titulo}</BottomText>
        </>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
