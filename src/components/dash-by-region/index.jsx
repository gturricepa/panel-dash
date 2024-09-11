import { RegionCard } from './region-dash-card';
import * as Styled from './styles';
import { Loading } from '../loading';
import { ErrorMessage } from '../error';
import { useFetch } from '../../hooks/useFetch';
import { DASH_DATA } from '../../api';
import React from 'react';

export const DashByRegion = () => {
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

  if (data){
    return (
      <Styled.Holder>
        <Styled.Title>Dashboards by Regions and Countries</Styled.Title>
        <Styled.CardHolder>
          {data?.zones && Object.keys(data.zones).map(zone => (
            <RegionCard key={zone} zone={zone} countries={data.zones[zone].countries} />
          ))}
        </Styled.CardHolder>
      </Styled.Holder>
    );
  }

};
