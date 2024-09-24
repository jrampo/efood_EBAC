import { FooterBG, FooterContainer } from "./styles";
import Logo from "../../assets/SVGs/LogoEfood";

const Footer = () => (
  <FooterBG>
    <FooterContainer>
      <Logo />
      <div>insta face twitter</div>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{" "}
        </p>
      </div>
    </FooterContainer>
  </FooterBG>
);

export default Footer;
