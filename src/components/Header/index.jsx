import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Text,
  Text2,
  DoodlesContainer,
  LogoContainer,
  PerfilHeaderContainer,
  Cart,
} from "./styles";

import Logo from "../../assets/SVGs/LogoEfood.jsx";
import BackgroundDoodles from "../../assets/SVGs/BackgroundDoodles.jsx";

import FraseHome from "../HomeComponents/FraseHome";

import { open } from "../../store/reducers/cart.js";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

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
            <Text2 to={`/`}>
              <Logo />
            </Text2>
            <Cart onClick={openCart}>
              {items.length} produto(s) no carrinho
            </Cart>
          </PerfilHeaderContainer>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
