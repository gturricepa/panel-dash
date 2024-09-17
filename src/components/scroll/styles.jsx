import styled, {css} from "styled-components";

export const Scroll = styled.div`
${({theme}) =>css`
    position: fixed;
    left:  ${theme.spacing.xsmall};;
    bottom:  ${theme.spacing.big};;
    font-size: ${theme.size.big};
    cursor: pointer;
    svg{
        font-size: 3rem;
    }
`}
`