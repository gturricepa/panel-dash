import styled, {css} from 'styled-components'

export const Holder = styled.div`
${({theme}) => css`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
min-width: 40rem;
min-height: 100%;
margin-right: 2rem;
margin-bottom: 2.5rem;
margin-top: ${theme.spacing.normal};
border-radius: ${theme.radius.small};
border: 2px solid  rgba(192, 192, 192, 0.5);
box-shadow:  20px 20px 10px #f4f1f1,
             -20px -20px 20px #ffffff;
  &:hover {
    transition: box-shadow 0.2s ease; 
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1); 
  }

`}

`
export const Info = styled.div`
${({theme}) => css`
display:flex;
justify-content: center;
align-items: center;
width: 100%;
border-bottom: 2px solid  rgba(192, 192, 192, 0.5);
box-sizing: border-box;
`}

`
export const Region = styled.div`
width: 100%;
display: flex;
h4{
  margin: 5px;
  padding: 0;
  padding-left: 15px;
}
`
export const Desc = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
p{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
}
 h4{
  margin: 0;
  padding: 0;
 }
`

export const Value = styled.div`
${({theme}) => css`
display: flex;
width: 100%;
align-items: center;
p{
  width: 100%;
  padding-left: ${theme.spacing.normal};
}
`}

`
