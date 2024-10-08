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

export const BannerTextContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
`;

export const TextOverlay = styled.div`
  color: white;

  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  text-align: left;
`;

export const BottomText = styled.div`
  color: white;
  margin-top: 157px;

  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  text-align: left;
`;
