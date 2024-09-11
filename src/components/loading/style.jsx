import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 4rem;
  height: 4rem;
  border: 10px solid grey;
  border-top: 10px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  animation: ${spin} 1s linear infinite; 
`;

