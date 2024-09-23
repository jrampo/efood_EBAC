import { useLocation } from "react-router-dom";
import { HeaderContainer, Text } from "./styles";

import Logo from "../Logo/LogoEfood.jsx";
import FraseHome from "../FraseHome/index.jsx";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <HeaderContainer isHome={isHome}>
      {isHome ? (
        <Text center>
          <Logo />
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
