import styled from "styled-components";

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 80px;
  padding-bottom: 120px;
  gap: 48px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
