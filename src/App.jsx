import React from 'react';
import {GlobalStyle} from  './theme/globalStyles'
import { Header } from './components/header'
import { Scroll } from './components/scroll';
import { DashByRegion } from './components/dash-by-region';
import { General } from './components/general';
import { CPMMIPMM } from './components/charts/cpmm-ipmm';
import { Maps } from './components/maps';
import { Crashes } from './components/charts/crashes';
import { Incidents } from './components/charts/incidents';


function App() {

  return (
      <main className='main'>
        <GlobalStyle />
        <section>
          <Header/>
        </section>

        <section>
          <General />
        </section>    
        <section id="evolution">
          <CPMMIPMM />
        </section>
        <section id='dashborad'>
          <DashByRegion />
        </section>
        <section id ='cpmm-map'>
          <Maps />
       </section>
       <section id='crashes'>
       <Crashes />
       </section>
       <section id='incidents'>
       <Incidents />
       </section>
       <Scroll/>
      </main>

  )
}

export default App
