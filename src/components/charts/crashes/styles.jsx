import styled, { css } from 'styled-components';
import { Select as MuiSelect, MenuItem } from '@mui/material';

export const Holder = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.backgroundColor2};
    margin-top: ${theme.spacing.normal};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 15rem;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding-bottom: ${theme.spacing.small};
    border-bottom: ${theme.spacing.small} solid ${theme.color.backgroundColor};
    justify-content: center;
  `}
`;

export const ChartHolder = styled.section`
  ${({ }) => css`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box; /* Ensures padding and borders are included in the element's total width and height */
  `}
`;

export const Left = styled.section`
  ${({ }) => css`
    display: flex;
    padding: 55px;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    box-sizing: border-box;
  `}
`;

export const Right = styled.section`
  ${({ }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 50%; /* Ensure the right section takes up 50% width */
    box-sizing: border-box;
    padding: 0 40px; /* Increased padding to give more space around the chart */
  `}
`;

export const ChartHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: ${theme.spacing.small};

    
  `}
`;

export const ChartTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.size.large};
    padding: 0;
    margin: 0;
  `}
`;

export const ChartContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
  `}
`;

export const SmallChartContainer = styled(ChartContainer)`
  ${({ }) => css`
    width: 50%;
    max-width: 250px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LargeChartContainer = styled(ChartContainer)`
  ${({ }) => css`
    width: 100%; /* Take full width */
    max-width: 700px; /* Increased max-width to ensure there's enough space for the radar chart */
    height: auto;
    padding: 0; /* Adjust padding as needed */
  `}
`;

export const CustomSelect = styled(MuiSelect)`
  ${({ theme }) => css`
    margin: ${theme.spacing.small} 0;
    width: 250px; /* Increased width for larger select box */
    font-size: ${theme.size.medium};
  `}
`;

export const MenuItemStyled = styled(MenuItem)`
  ${({ theme }) => css`
    font-size: ${theme.size.normal};
  `}
`;
