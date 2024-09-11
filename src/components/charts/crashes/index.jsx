import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as Styled from './styles';
import { Loader } from '../../loading/style';
import { ErrorMessage } from '../../error'; 
import { useFetch } from '../../../hooks/useFetch'; 
import { CRASHES } from '../../../api';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Crashes = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    function getData() {
      const { url, options } = CRASHES();
      request(url, options);
    }
    getData();
  }, [request]);

  const createChartData = (regionData) => ({
    labels: regionData.crashes.map(item => item.type),
    datasets: [{
      label: 'Total',
      data: regionData.crashes.map(item => item.count),
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 99, 132, 0.5)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  });

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 10,
          padding: 5,
          font: {
            size: 10
          }
        }
      }
    },
    layout: {
      padding: {
        bottom: 0,
        top: 1
      }
    }
  };

  if (loading) return (
    <Styled.Holder>
      <Loader />
    </Styled.Holder>
  );

  if (error) return (
    <Styled.Holder>
      <ErrorMessage msg="Error on load Crashes Data" />
    </Styled.Holder>
  );


  if (data) {
    const regions = Object.keys(data.regions);
    return (
      <Styled.Holder>
        <Styled.Title>Crashes by Type</Styled.Title>
        <Styled.ChartHolder>
          {regions.map((region) => (
            <Styled.ChartContainer key={region}>
              <Styled.ChartTitle>{region}</Styled.ChartTitle>
              <Doughnut options={chartOptions} data={createChartData(data.regions[region])} /> 
            </Styled.ChartContainer>
          ))}
        </Styled.ChartHolder>
      </Styled.Holder>
    );
  }
};
