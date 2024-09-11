import styled, {css} from 'styled-components'

export const Holder = styled.section`
${({theme}) =>css`
background-color:${theme.color.backgroundColor2} ;
margin-top: ${theme.spacing.normal} ;
display:flex;
flex-direction: column; 
width: 100%;
flex-wrap: wrap;
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
justify-content: center;
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
`