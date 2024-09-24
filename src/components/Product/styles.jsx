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
  color: #e66767;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const Badge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #e66767;
  color: #ffebd9;
  padding: 4px 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
`;

export const BadgeDestaque = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #e66767;
  color: #ffebd9;
  padding: 4px 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  margin-right: 85px;
`;

export const ContentContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-left: 2px solid #e66767;
  border-right: 2px solid #e66767;
  border-bottom: 2px solid #e66767;
  padding: 8px;
`;

export const TitleContainer = styled.div`
  margin: 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
  flex: 1;
`;

export const TextContainer = styled.p`
  margin: 16px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`;

export const ProductButton = styled.button`
  background-color: #e66767;
  padding: 4px 6px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  color: #ffebd9;
  border: none;
`;

export const StarRate = styled.div`
  display: flex;
  align-items: center;
`;

export const Rate = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: center;
  margin-right: 8px;
`;

export const TitleStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
