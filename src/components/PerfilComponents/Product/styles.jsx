import styled from "styled-components";

export const ProductContainer = styled.div`
  background: #e66767;
  text-align: center;
  padding: 8px;
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  position: relative;

  color: #ffebd9;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #e66767;
  border-right: 2px solid #e66767;
  border-bottom: 2px solid #e66767;
`;

export const TitleContainer = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;

  padding-top: 8px;
  padding-bottom: 8px;
`;

export const TextContainer = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;

  padding-bottom: 8px;
`;

export const ProductButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  padding: 4px 6px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  border: none;
`;
