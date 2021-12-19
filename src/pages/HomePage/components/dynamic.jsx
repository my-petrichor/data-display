import { Line } from '@ant-design/charts';
import React from 'react';

const DynamicChart = (props) => {
  const { data } = props;

  console.log(data, 'data');
  const config = {
    data,
    xField: 'time',
    yField: 'value',
    seriesField: 'type',
    xAxis: false,
    color: ({ type }) => {
      switch (type) {
        case 'NO3':
          return '#9BE8E8';
        case 'TSS':
          return '#9E9BEB';
        case 'COD':
          return '#9C1CEB';
      }
    },

    smooth: false,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

export default DynamicChart;
