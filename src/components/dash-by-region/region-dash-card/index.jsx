import React from 'react';
import * as Styled from './styles';

export const RegionCard = ({ zone, countries }) => {
 
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
      <Styled.Info>
        <Styled.Region>
          <h4>Region: {zone.toUpperCase()}</h4>
        </Styled.Region>
        <Styled.Desc>
          <h4>CPMM</h4>
          <h4>CIPMM</h4>
        </Styled.Desc>
     </Styled.Info>

    {countries.map((country, index) => (
      <Styled.Value key={index}>
          <p>{country.name}</p>
          <Styled.Desc>
            <p>{country.CPMM}</p>
            <p>{country.CIPMM}</p>
           </Styled.Desc>
      </Styled.Value>
    ))}
  <>
      <Styled.Info>
      <Styled.Region>
        <h4>TOTAL</h4>
        </Styled.Region>
        <Styled.Desc>
          <h4>{totals.CPMM}</h4>
          <h4>{totals.CIPMM}</h4>
        </Styled.Desc>
    </Styled.Info>  
    </>
    </Styled.Holder>
  );
};
