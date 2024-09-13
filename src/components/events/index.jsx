import React, { useState } from 'react';
import * as Styled from './styles';
import { Incidents } from '../charts/incidents';
import { Crashes } from '../charts/crashes';

export const Events = () => {
  const [selectedView, setSelectedView] = useState('incidents'); // Estado para gerenciar qual componente mostrar

  return (
    <Styled.Holder>
      <Styled.Title>Events</Styled.Title>
      <Styled.Actions>
        <Styled.Btn
          active={selectedView === 'incidents'}
          onClick={() => setSelectedView('incidents')}
        >
          Incidents
        </Styled.Btn>
        <Styled.Btn
          active={selectedView === 'crashes'}
          onClick={() => setSelectedView('crashes')}
        >
          Crashes
        </Styled.Btn>
      </Styled.Actions>
      
      <Styled.Incidents visible={selectedView === 'incidents'}>
         <Incidents />
      </Styled.Incidents>
      <Styled.Crashes visible={selectedView === 'crashes'}>
         <Crashes /> 
      </Styled.Crashes>
    </Styled.Holder>
  );
};
