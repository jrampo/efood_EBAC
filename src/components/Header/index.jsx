import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Text,
  DoodlesContainer,
  LogoContainer,
} from "./styles";

import Logo from "../SVGs/LogoEfood.jsx";
import BackgroundDoodles from "../SVGs/BackgroundDoodles.jsx";
import FraseHome from "../FraseHome/index.jsx";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <HeaderContainer isHome={isHome}>
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
        <>
          <Text>Restaurantes</Text>
          <Text>
            <Logo />
          </Text>
          <Text>0 produto(s) no carrinho</Text>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
