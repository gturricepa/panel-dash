import styled, {css} from "styled-components"

export const Holder = styled.section`
${({theme}) =>css`
background-color: ${theme.color.backgroundColor2};
min-height: 20rem;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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

export const CardHolder = styled.div`
${({theme}) =>css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap:${theme.spacing.normal} ; 
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;

`}
`