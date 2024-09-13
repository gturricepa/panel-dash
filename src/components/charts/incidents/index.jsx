import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as Styled from './styles';
import { Loader } from '../../loading/style';
import { ErrorMessage } from '../../error'; 
import { useFetch } from '../../../hooks/useFetch'; 
import { INCIDENTS } from '../../../api';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip as RechartsTooltip } from 'recharts';
import { Select as MuiSelect, MenuItem } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Incidents = () => {
  const { data, error, loading, request } = useFetch();
  const [view, setView] = useState('type'); // Default view for radar chart

  useEffect(() => {
    function getData() {
      const { url, options } = INCIDENTS();
      request(url, options);
    }
    getData();
  }, [request]);

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

    return Object.keys(aggregatedData).map(key => ({
      type: key,
      count: aggregatedData[key]
    }));
  };

  const createRegionChartData = (regionsData) => {
    return Object.keys(regionsData).map(region => {
      const totalIncidents = regionsData[region].incidents.reduce((acc, incident) => acc + incident.count, 0);
      return { region, totalIncidents };
    });
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
    const regionChartData = createRegionChartData(data.regions);

    return (
      <Styled.Holder>
        {/* <Styled.Title>Incidents by Type</Styled.Title> */}

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
              <Styled.ChartHeader>
                <Styled.ChartTitle as="h4">World's Incidents</Styled.ChartTitle>
                <Styled.CustomSelect
                  value={view}
                  onChange={(e) => setView(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'View' }}
                  renderValue={(selected) => selected ? selected : 'Select View'}
                >
                  <Styled.MenuItemStyled value="type">Type</Styled.MenuItemStyled>
                  <Styled.MenuItemStyled value="region">Region</Styled.MenuItemStyled>
                </Styled.CustomSelect>
              </Styled.ChartHeader>
              <RadarChart outerRadius="80%" width={700} height={500} data={view === 'type' ? aggregatedData : regionChartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey={view === 'type' ? 'type' : 'region'} tick={{ fontSize: 12 }} />
                <PolarRadiusAxis />
                {view === 'type' ? (
                  <Radar name="Incidents" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                ) : (
                  <Radar name="Total Incidents" dataKey="totalIncidents" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                )}
                <RechartsTooltip />
              </RadarChart>
            </Styled.LargeChartContainer>
          </Styled.Right>
        </Styled.ChartHolder>
      </Styled.Holder>
    );
  }
};
