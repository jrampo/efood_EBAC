import { useEffect, useState } from "react";
import {
  BannerContainer,
  Overlay,
  BannerMacarrao,
  TextOverlay,
  BottomText,
  BannerTextContainer,
} from "../Banner/styles";

import ImageBanner from "../../../assets/macarrao.png";

const Banner = () => {
  const [restaurant, setRestaurant] = useState("");

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data[0]);
      });
  }, []);

  return (
    <BannerContainer>
      <BannerMacarrao src={ImageBanner} alt="Banner Macarrão" />
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
