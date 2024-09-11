import styled, { css } from "styled-components";

export const Holder = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    @media (max-width: 1315px) {
      flex-wrap: wrap;
    }
  `}
`;