import styled, {css} from "styled-components";

export const Scroll = styled.div`
${({theme}) =>css`
    position: fixed;
    right:  ${theme.spacing.big};;
    bottom:  ${theme.spacing.big};;
    font-size: ${theme.size.big};
    cursor: pointer;
`}
`