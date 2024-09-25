import { BannerContainer, Overlay, BannerMacarrao } from "../Banner/styles";

const Banner = ({ imageSrc }) => {
  return (
    <BannerContainer>
      <BannerMacarrao src={imageSrc} alt="Banner Macarrão" />
      <Overlay />
    </BannerContainer>
  );
};

export default Banner;
