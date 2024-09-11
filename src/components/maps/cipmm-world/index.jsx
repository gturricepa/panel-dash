import * as Styled from './styles'
import WorldMap from "react-svg-worldmap";
import React from 'react';
import { CIPMM_ZONE } from '../../../api';
import {Loading} from '../../loading/index'
import {ErrorMessage} from '../../error'
import {useFetch} from '../../../hooks/useFetch'


export const CIPMMWorld = () =>{
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    function getData() {
      const { url, options } = CIPMM_ZONE();
      request(url, options);
    }
    getData();
  }, [request]);

  if(loading) return ( 
    <Styled.ChartHolder>
       <Loading />
    </Styled.ChartHolder>
  )
   
   if (error) return (
      <Styled.ChartHolder>
         <ErrorMessage msg="Error on load CIPMM World Data" />
      </Styled.ChartHolder>
      )

    if (data ) return(
        <Styled.Holder>
          <Styled.SubTitle>
            <p>CIPMM</p>
          </Styled.SubTitle>
    <Styled.ChartHolder>
        <WorldMap
            color="rgb(243, 172, 4)"
            data={data}/>
   </Styled.ChartHolder>
    </Styled.Holder>
    )
}