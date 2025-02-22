import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const CategoryTitle = styled.h2`
  font-size: 50px;
  margin-bottom: 25px;
  text-align: center;
`;
