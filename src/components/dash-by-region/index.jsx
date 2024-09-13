import * as Styled from './styles';
import { Loading } from '../loading';
import { ErrorMessage } from '../error';
import { useFetch } from '../../hooks/useFetch';
import { DASH_DATA } from '../../api';
import React from 'react';
import { MainRegionCard } from './card-region';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Country } from './country';
import {Modal} from '../modal';
export const DashByRegion = () => {
  const [general, setGeneral] = React.useState(true)
  const [zone, setZone] = React.useState('')
  const [modal, setModal] = React.useState('')
  const [country, setCountry] = React.useState('')
  const { data, error, loading, request } = useFetch();
  
  
  React.useEffect(() => {
    function getData() {
      const { url, options } = DASH_DATA();
      request(url, options);
    }
    getData();
  }, [request]);

  if (loading) {
    return (
      <Styled.Holder>
        <Loading />
      </Styled.Holder>
    );
  }

  if (error) {
    return (
      <Styled.Holder>
        <ErrorMessage msg="Error on load Dashboards" />
      </Styled.Holder>
    );
  }


  const handleBack = () =>{
    setGeneral(true)
    setZone(false)
    setModal(false)
  }

  const handleZone = (zoneId) =>{
    setGeneral(false);
    setZone(zoneId);
  }

  const openModal = (country) =>{
    setCountry(country)
    setModal(true)

     
  }


  const closeModal = () =>{
    setModal(false)
  }


if (data){
    return (
      
      <Styled.Main>
        <Styled.Title>Dashboards by Regions and Countries</Styled.Title>
          <Styled.Holder>
       
          {general && data?.zones && Object.keys(data.zones).map(zone => (
            <Styled.MainZones key={zone} onClick={() => handleZone(zone)} >
              <h2>{zone.toUpperCase()}</h2>
              <Styled.Actions onClick={() => handleZone(zone)}>
              <Styled.Btn onClick={() => handleZone(zone)} id={zone}>
                  <TravelExploreIcon sx={{ fontSize: 150 }} />
              </Styled.Btn>
                <span onClick={() => handleZone(zone)}>click to see more</span>
               </Styled.Actions> 
               <MainRegionCard zone={zone} countries={data.zones[zone].countries}/>
            </Styled.MainZones>
        ))}
  {zone &&
        <Styled.Zone>
          <Styled.Back>
          {!general && <div onClick={handleBack}><KeyboardBackspaceIcon/></div>}
          <h3>{zone.toUpperCase()}</h3>
          </Styled.Back>
          <Styled.Countries>{data.zones[zone].countries.map(country => (
            <Styled.HoldCountry key={country.name}>
              <Country name={country.name} cpmm={country.CPMM} cipmm={country.CIPMM} />
              <Styled.SeeCountry   onClick={() => openModal(country.id)}> click to see about</Styled.SeeCountry> 
            </Styled.HoldCountry>
          ))}
          </Styled.Countries>
        </Styled.Zone>
}
          {modal && 
          <div>
            <Modal show={modal} id={country} onClose={closeModal} />
          </div>}
          
      </Styled.Holder>
      </Styled.Main>
    );
  }


};
