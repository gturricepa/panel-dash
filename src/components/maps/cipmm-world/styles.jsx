import styled, {css} from 'styled-components'

export const ChartHolder = styled.div`
${({}) =>css`
display: flex;
justify-content: center;
align-items: center;
align-items: center; 
min-height: 31rem;
flex-wrap: wrap;
width: 100%;
`}
`

export const SubTitle = styled.div`
${({}) =>css`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
p{
margin: 0;
padding :0;
}
`}
`

export const Holder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`
