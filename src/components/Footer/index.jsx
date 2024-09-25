import {
  FooterBG,
  FooterContainer,
  SocialMedia,
  LogoContainer,
} from "./styles";

import Logo from "../../assets/SVGs/LogoEfood";

import Instagram from "../../assets/SVGs/Instagram";
import Facebook from "../../assets/SVGs/Facebook";
import Twitter from "../../assets/SVGs/Twitter";

const Footer = () => (
  <FooterBG>
    <FooterContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <SocialMedia>
        <Instagram />
        <Facebook />
        <Twitter />
      </SocialMedia>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade
          <br />
          dos produtos é toda do estabelecimento contratado.
        </p>
      </div>
    </FooterContainer>
  </FooterBG>
);

export default Footer;
