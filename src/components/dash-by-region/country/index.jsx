import * as Styled from './styles';
import Flag from 'react-world-flags';

export const Country = ({ name, cpmm, cipmm }) => {

    const getCountryCode = (countryName) => {
        const countryCodeMap = {
            'United States of America': 'USA',
            'Canada': 'CA',
            'United Kingdom': 'GB',
            'Ireland' : 'IE',
            'Brazil' : 'BR',
            'Argentina': 'AR',
            'Japan' : 'JP',
            'India':  'IN',
            'Equador': 'EC'
       };
        return countryCodeMap[countryName] || null; 
    };

    return (
        <Styled.Holder>
                   <h3>{name}</h3>
            <Styled.Content>
                <Styled.Flag>
                <Flag code={getCountryCode(name)} /> 
                
            </Styled.Flag>

            <Styled.Count>
                <p>CPMM: {cpmm}</p>
                <p>CIPMM: {cipmm}</p>
            </Styled.Count>
            </Styled.Content>
        </Styled.Holder>
    );
};
