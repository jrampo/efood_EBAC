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
  background-color: #333;
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: #aaa;
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
  border-bottom: 1px solid #aaa;
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;
    font-size: 16px;

    &:hover {
      color: #ff0000;
    }
  }
`;
