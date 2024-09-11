import styled from "styled-components";

export const Holder = styled.div `
  display: grid; 
  grid-template-columns: 60% 40%; 
  justify-content: center;
  max-width: 100%;
  @media (max-width: 1315px) {
    display: flex;
      flex-wrap: wrap;
    }

`