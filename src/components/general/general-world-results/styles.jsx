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
padding-bottom:${theme.spacing.small};
border-bottom: ${theme.spacing.small} solid ${theme.color.backgroundColor} ;
justify-content: center;
`}
`
export const Description = styled.div`
${({theme}) =>css`
width: 100%;
height: 100%;

p {
    width: 100%;
padding-left: ${theme.spacing.small} ;
border-bottom: ${theme.spacing.xsmall}  solid ${theme.color.backgroundColor};
box-sizing: border-box;
`}
`

export const Info = styled.div`
${({theme,  $bg = false }) =>css`
display: flex;
justify-content: space-between;
padding-left:${theme.spacing.xsmall} ;
padding-right:${theme.spacing.xsmall} ;
border-bottom: ${theme.spacing.xsmall}  solid ${theme.color.backgroundColor};
background-color: ${$bg ? 'lightgrey' : 'transparent'}; 
align-items: center;
box-sizing: border-box;

h4 {
margin: 0;
padding: ${theme.spacing.xsmall} ;
border-right: ${theme.spacing.xsmall}  solid ${theme.color.backgroundColor};
width: 100%;
}
span{
padding-left: ${theme.spacing.normal} ;

margin: 0 auto;
}
`}

`