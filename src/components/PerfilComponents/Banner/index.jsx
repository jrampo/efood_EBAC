import {
  BannerContainer,
  Overlay,
  BannerMacarrao,
  TextOverlay,
  BottomText,
  BannerTextContainer,
} from "../Banner/styles";

import { useGetRestaurantByIdQuery } from "../../../services/api";

const Banner = ({ id }) => {
  const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <BannerContainer>
      <BannerMacarrao src={restaurant.capa} alt="Banner restaurante" />
      <Overlay />
      <BannerTextContainer>
        <TextOverlay>{restaurant.tipo}</TextOverlay>
        <BottomText>{restaurant.titulo}</BottomText>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
