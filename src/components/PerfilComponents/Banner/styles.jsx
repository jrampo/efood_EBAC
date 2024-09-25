import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
`;

export const BannerMacarrao = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
