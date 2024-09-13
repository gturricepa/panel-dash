import styled, {css} from "styled-components";

export const Holder = styled.div`
${({theme}) => css`
background-color:${theme.color.backgroundColor} ;
display:flex;
flex-direction: column; 
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 0;
min-height: 5rem;
`}
`
export const Title = styled.h3`
${({theme}) =>css`
display: flex;
align-items: center;
width: 100%;
padding: 15px;
border-bottom: ${theme.spacing.small} solid ${theme.color.backgroundColor} ;
justify-content: center;
box-sizing: border-box;
background-color:${theme.color.backgroundColor2} ;


`}
`
export const ChartHolder = styled.div`
${({theme}) =>css`
display: flex;
flex-wrap: wrap;
height: 20rem;
width: 100%;
justify-content: center;
align-items: center;
background-color:${theme.color.backgroundColor2} ;

`}
`