import styled, {css} from "styled-components";


export const Holder = styled.div`
${({theme}) => css`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 35rem;
min-height: 15rem;
justify-content: space-evenly;

`}
`
export const Flag = styled.div`
display: flex;
width: 12rem;
height: 12rem;


img{
    width: 100%;
}
`

export const Content = styled.div`
display: flex;
justify-content: space-evenly;
height: 100%;
width: 100%;

border-top: 2px solid black ;

`

export const Count = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`