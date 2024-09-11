import styled,{css} from 'styled-components';

export const Holder = styled.div`
${({theme}) => css`
width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${theme.radius.small};
  padding: 0;
    margin: 0;
    background-color: ${(props) => props.color[1]};
h3{
    background-color: ${(props) => props.color[0]};
    padding-left:${theme.spacing.xsmall};
    margin: 0;
}

  p {
    font-weight: bold;
    font-size: ${theme.size.big};
    align-self: center;
    padding: 0;
    height: 100%;


    
  }
`}

`;
