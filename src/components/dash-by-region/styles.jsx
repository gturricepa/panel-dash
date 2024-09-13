import styled, {css} from 'styled-components'

export const Main = styled.main `
${({theme}) =>css`
flex-direction: column;
display: flex;
margin-top: ${theme.spacing.normal} ;
width: 100%;
align-items: center;
justify-content: center;

`}
`
export const Title = styled.h3`
${({theme}) =>css`
display: flex;
width: 100%;
padding-bottom:${theme.spacing.small} ;
border-bottom: ${theme.spacing.small} solid ${theme.color.backgroundColor} ;
align-items: center;
justify-content: center;
background-color: ${theme.color.backgroundColor2} ;
`}
`
export const Holder = styled.section`
${({theme}) =>css`
background-color:${theme.color.backgroundColor2} ;
display:flex;
width: 100%;
min-height: 60vh;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;


`}
`
export const MainZones = styled.div`
${({theme}) =>css`
display: flex;
flex-direction: column;
border: 3px solid  rgba(192, 192, 192, 0.5);
box-shadow:  20px 20px 10px #f4f1f1,
             -20px -20px 20px #ffffff;
  &:hover {
    transition: box-shadow 0.2s ease; 
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1); 
  }
border-radius: 5px;
min-height: 20rem;
min-width: 20rem;
justify-content: space-evenly;
align-items: center;

`}
`
export const Btn = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: 100%;
padding: 0;
margin: 0;
`

export const Actions = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
cursor: pointer;
svg{
    margin: 0;
    padding: 0;
}
span{
    margin: 0;
    padding: 0;
}
`

export const Zone = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100%;
min-width: 100%;
`

export const Countries = styled.div`
display: flex;

justify-content: space-evenly;
align-items: center;
width: 100%;

min-height: 50vh;
`
export const SeeCountry = styled.button`
border: 0;
display: flex;
align-self: center;
justify-self: center;
border: 1px solid #f9ae3f;
color:black;
background-color: white;
 border-radius: 12px; 
  padding: 10px 20px; 
  font-size: 16px; 
  cursor: pointer; 
  transition: background-color 0.1s ease, transform 0.1s ease; 

  &:hover {
    background-color: #FFA726; 
    transform: scale(1.02); 
    color: white;
  }

  &:active {
    background-color: #FB8C00; 
    transform: scale(1);
  }

  &:focus {
    outline: none; 
  }
`;

export const HoldCountry = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`

export const Back = styled.div`
display: flex;
justify-content: center;
align-items: center ;

width: 100%;
svg{
position: absolute;
  cursor: pointer;
  font-size: 4rem;
  left: 5rem;
}

`