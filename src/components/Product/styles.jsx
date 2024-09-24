import styled from "styled-components";

export const ProductContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 0;
  width: 472px;
  height: 398px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
`;
