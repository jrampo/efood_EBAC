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
  return (
    <BannerContainer>
      <BannerMacarrao src={ImageBanner} alt="Banner Macarrão" />
      <Overlay />
      <BannerTextContainer>
        <TextOverlay>Italiana</TextOverlay>
        <BottomText>La Dolce Vida Trattoria</BottomText>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
