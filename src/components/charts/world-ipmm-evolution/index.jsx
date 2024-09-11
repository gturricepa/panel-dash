import * as Styled from './styles'
import { Line } from 'react-chartjs-2';
import React from 'react';
import {useFetch} from '../../../hooks/useFetch'
import {CIPMM_GLOBAL_RESULTS } from '../../../api'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Loader } from '../../loading/style';
import { ErrorMessage } from '../../error'; 

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

export const CIPMMWorldEvolution  = () =>{
 const { data, error, loading, request } = useFetch();
 React.useEffect(() => {
      function getData() {
        const { url, options } = CIPMM_GLOBAL_RESULTS();
        request(url, options);
      }
      getData();
    }, [request]);

  const useData = data ? {
            labels: data .months.map(item => item.month),
            datasets: [
              {
                label: 'CPMM',
                data: data.months.map(item => item.value),
                fill: false,
                borderColor: 'rgb(243, 172, 4)',
                tension: 0.1
              }
            ]
          } : { labels: [], datasets: [] }

  const options = {
     responsive: true,
       plugins: {
         legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months 2023'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Crashes'
            }
          }
        }
      };

      if(loading) return (
        <Styled.Holder>
          <Loader />
        </Styled.Holder>
      )
  
      if (error) return (
        <Styled.Holder>
          <ErrorMessage msg="Error on load CIPMM Evolution" />
        </Styled.Holder>
     )

    if (data) {
        return (
          <Styled.Holder >
            <Styled.Title>
              World CPIMM Evolution YTD
            </Styled.Title>
            <Styled.ChartHolder>
              <Line data={useData} options={options} /> 
            </Styled.ChartHolder>     
          </Styled.Holder>
          )
      }
 }