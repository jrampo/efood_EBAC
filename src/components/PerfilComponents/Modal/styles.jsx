import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #e66767;
  color: #ffffff;
  padding: 32px;
  width: 1024px;
  height: 344px;
  position: relative;
`;

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

  width: 16px;
  height: 16px;
`;

export const AddToCartButton = styled.button`
  margin-top: auto;
  padding: 4px 7px;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  cursor: pointer;
  width: 218px;
  height: 24px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;

  margin-top: 16px;
`;
