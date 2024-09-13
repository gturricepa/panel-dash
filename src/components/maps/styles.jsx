import styled, {css} from "styled-components";

export const Holder = styled.div`
${({theme}) => css`
background-color:${theme.color.backgroundColor2} ;
margin-top: ${theme.spacing.normal} ;
display:flex;
flex-direction: column;
width: 100%;
flex-wrap: wrap;

`}
`

export const Title = styled.h3`
${({theme}) =>css`
display: flex;
width: 100%;
padding-bottom:${theme.spacing.small} ;
border-bottom: ${theme.spacing.small} solid ${theme.color.backgroundColor} ;
justify-content: center;
`}
`
export const Maps = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

@media (max-width: 1315px) {
     justify-content: center;
      flex-wrap: wrap;
      align-items: center;

    }
`

