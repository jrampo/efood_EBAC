import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  display: none;

  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 40px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  button {
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    max-width: 100%;
    width: 100%;
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    padding: 4px;
    cursor: pointer;
    margin-bottom: 8px;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: left;
  color: #ffebd9;

  input {
    margin-top: 8px;
    height: 32px;
    background-color: #ffebd9;
    border: none;
  }
`;

export const FormsFlex = styled.div`
  display: flex;
  width: 100%;
`;

export const FormsFlex2 = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  text-align: left;

  color: #ffebd9;
  margin-bottom: 16px;
`;

export const Buttons = styled.div`
  margin-top: 24px;
`;

export const Buttons2 = styled.div``;
