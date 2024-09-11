import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
  margin: 0;
    margin-top: ${theme.size.xsmall};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background-color: ${theme.color.backgroundColor2};
    padding: ${theme.spacing.xsmall};
    height: ${theme.size.xbig};
    margin-bottom: ${theme.spacing.small};
    box-sizing: border-box;
    
    a {
      border-bottom: 2px solid ${theme.color.backgroundColor};
      font-size: ${theme.size.normal};
      box-sizing: border-box;
      transition: border-bottom 0.2s ease;
      
      &:hover {
        border-bottom: 2px solid ${theme.color.primaryColor};
      }
    }

    @media (max-width: 1315px) {
      display: none;
    }
  `}
`;
