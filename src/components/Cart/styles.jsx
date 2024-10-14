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

export const LinkEntrega = styled.button`
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  width: 100%;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 4px;

  cursor: pointer;
  text-decoration: none;
`;

export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 40px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
  color: #ffebd9;

  p {
    margin: 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const CardItem = styled.li`
  display: flex;
  background-color: #ffebd9;
  padding: 12px;
  position: relative;
  color: #e66767;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    position: relative;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    margin: 0;
    margin-bottom: 16px;
  }

  .price {
    color: #e66767;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }

  .trash-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;
