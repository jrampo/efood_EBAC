import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding-top: 48px;
  position: relative;
  overflow: hidden;
  height: ${(props) => (props.isHome ? "384px" : "180px")};

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-weight: bold;
  position: relative;
  z-index: 1;
`;

export const Cart = styled.div`
  text-align: center;
  font-weight: bold;
  position: relative;
  z-index: 1;

  cursor: pointer;
`;

export const DoodlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const LogoContainer = styled.div`
  padding-bottom: 138px;
`;

export const PerfilHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 21.09px;
  color: #e66767;
  margin-left: 70px;
`;
