import * as Styled from './styles'
export const Card = ({title, value, color}) =>{
    const getColor = {
        "1": ['rgb(54, 167, 181)', 'rgba(54, 167, 181, 0.5)'],
        "2": ['rgb(243, 172, 4)', 'rgba(243, 172, 4, 0.5)'],
        "3": ['rgb(112, 112, 112)', 'rgba(112, 112, 112, 0.5)'], 
        "4": ['rgb(234, 98, 50)', 'rgba(234, 98, 50, 0.5)']  
      };
      
      const finalColor = getColor[color];

    return (
        <>
        <Styled.Holder color={finalColor}>
            <h3>{title}</h3>
            <p>{value}</p>
        </Styled.Holder>

        </>
    )
}