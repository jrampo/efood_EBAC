import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Text,
  DoodlesContainer,
  LogoContainer,
  PerfilHeaderContainer,
} from "./styles";

import Logo from "../../assets/SVGs/LogoEfood.jsx";
import BackgroundDoodles from "../../assets/SVGs/BackgroundDoodles.jsx";

import FraseHome from "../HomeComponents/FraseHome";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <HeaderContainer isHome={isHome}>
      <div className="container">
        <DoodlesContainer>
          <BackgroundDoodles />
        </DoodlesContainer>
        {isHome ? (
          <Text center>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <FraseHome />
          </Text>
        ) : (
          <PerfilHeaderContainer>
            <Text>Restaurantes</Text>
            <Text>
              <Logo />
            </Text>
            <Text>0 produto(s) no carrinho</Text>
          </PerfilHeaderContainer>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
