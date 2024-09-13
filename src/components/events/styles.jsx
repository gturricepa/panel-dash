import styled, { css } from 'styled-components';

export const Holder = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.backgroundColor2};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: ${theme.spacing.large} 0;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding-bottom: ${theme.spacing.small};
    border-bottom: ${theme.spacing.small} solid ${theme.color.backgroundColor};
    border-top: ${theme.spacing.small} solid ${theme.color.backgroundColor};
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.backgroundColor2};
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: ${theme.spacing.large};
  `}
`;

export const Btn = styled.div`
  ${({ theme, active }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 2px solid ${active ? 'black' : 'lightgray'};
    color: ${active ? 'black' : 'lightgray'};
    font-weight: ${active ? 'bold' : 'normal'};
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
      color: ${theme.color.primary};
      border-bottom: 2px solid ${theme.color.primary};
    }
  `}
`;

export const Incidents = styled.div`
  ${({ visible }) => css`
    display: ${visible ? 'flex' : 'none'};
    /* Remove any transition or animation properties */
  `}
`;

export const Crashes = styled.div`
  ${({ visible }) => css`
    display: ${visible ? 'flex' : 'none'};
    /* Remove any transition or animation properties */
  `}
`;
