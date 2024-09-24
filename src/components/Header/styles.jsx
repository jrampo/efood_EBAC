import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-height: 384px;
  padding-top: 48px;
  position: relative;
  overflow: hidden;
  height: 384px; /* Mantenha uma altura fixa para testes */
`;

export const Text = styled.div`
  text-align: center;
  font-weight: bold;
  position: relative;
  z-index: 1;
`;

export const DoodlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url("/doodles.svg"); /* Verifique o caminho */
  background-repeat: repeat;
  background-size: auto; /* Mantenha as proporções originais */
`;

export const LogoContainer = styled.div`
  padding-bottom: 138px;
`;
