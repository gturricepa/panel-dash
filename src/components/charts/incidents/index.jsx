import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as Styled from './styles';
import { Loader } from '../../loading/style';
import { ErrorMessage } from '../../error'; 
import { useFetch } from '../../../hooks/useFetch'; 
import { INCIDENTS } from '../../../api';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Incidents = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    function getData() {
      const { url, options } = INCIDENTS();
      request(url, options);
    }
    getData();
  }, [request]);

  // Function to create chart data for individual regions
  const createChartData = (regionData) => ({
    labels: regionData.incidents.map(item => item.type),
    datasets: [{
      label: 'Total',
      data: regionData.incidents.map(item => item.count),
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

  const createAggregatedChartData = (regionsData) => {
    const aggregatedData = regionsData.reduce((acc, regionData) => {
      regionData.incidents.forEach(item => {
        if (acc[item.type]) {
          acc[item.type] += item.count;
        } else {
          acc[item.type] = item.count;
        }
      });
      return acc;
    }, {});

    return {
      labels: Object.keys(aggregatedData),
      datasets: [{
        label: 'Total',
        data: Object.values(aggregatedData),
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
    };
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 10,
          padding: 6,
          font: {
            size: 11
          }
        }
      }
    },
    layout: {
      padding: {
        bottom: 2,
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
      <ErrorMessage msg="Error on load Incidents Data" />
    </Styled.Holder>
  );

  if (data) {
    const regions = Object.keys(data.regions);
    const aggregatedData = createAggregatedChartData(Object.values(data.regions));

    return (
      <Styled.Holder>
        <Styled.Title>Incidents by Type</Styled.Title>
        <Styled.ChartHolder>
          <Styled.Left>
            {regions.map((region) => (
              <Styled.SmallChartContainer key={region}>
                <Styled.ChartTitle>{region}</Styled.ChartTitle>
                <Doughnut options={chartOptions} data={createChartData(data.regions[region])} />
              </Styled.SmallChartContainer>
            ))}
          </Styled.Left>
          <Styled.Right>
            <Styled.LargeChartContainer>
              <Styled.ChartTitle>World's Incidents by Type</Styled.ChartTitle>
              <Doughnut options={chartOptions} data={aggregatedData} />
            </Styled.LargeChartContainer>
          </Styled.Right>
        </Styled.ChartHolder>
      </Styled.Holder>
    );
  }
};
