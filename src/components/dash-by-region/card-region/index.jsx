import React from 'react'
import * as Styled from './styles'

export const MainRegionCard = ({ countries}) =>{
    const totals = countries.reduce(
        (acc, country) => {
          acc.CPMM += country.CPMM || 0; 
          acc.CIPMM += country.CIPMM || 0; 
          return acc;
        },
        { CPMM: 0, CIPMM: 0 }
      );


    return (
      <Styled.Holder>
          <h4>Total CPMM  {totals.CPMM}</h4>
          <h4>Total CIMM  {totals.CIPMM}</h4>
           </Styled.Holder>
     )   


    

}

