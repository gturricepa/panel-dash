import styled, {css} from "styled-components";
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
  `}
`;

export const Left = styled.section`
  ${({ }) => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; /
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
    width: 50%;
    box-sizing: border-box;
  `}
`;

export const ChartTitle = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    font-size: ${theme.size.normal};
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
    width: 45%; 
    max-width: 250px;
    height: auto; 
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LargeChartContainer = styled(ChartContainer)`
  ${({ }) => css`
    width: 65%;
    max-width: 600px;
    height: auto;
  `}
`;
