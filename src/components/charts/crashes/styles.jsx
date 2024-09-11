import styled, {css} from "styled-components"

export const Holder = styled.div`
${({theme}) => css`
background-color:${theme.color.backgroundColor2} ;
margin-top: ${theme.spacing.normal} ;
display:flex;
flex-direction: column; 
justify-content: center;
align-items: center;
width: 100%;
min-height: 15rem;
`}`

export const Title = styled.h3`
${({theme}) =>css`
display: flex;
width: 100%;
padding-bottom:${theme.spacing.small} ;
border-bottom: ${theme.spacing.small} solid ${theme.color.backgroundColor} ;
justify-content: center;
`}
`

export const ChartHolder = styled.section`
${({}) =>css`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
width: 100%;


`}
`
export const ChartTitle = styled.p`
${({}) =>css`
display: flex;
justify-content: center;
font-size: 1rem;
padding: 0;
margin: 0;
`}
`
export const ChartContainer = styled.section`
${({}) =>css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 15rem;
  max-width: 16rem;
`}
`
