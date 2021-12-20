import { Line } from '@ant-design/charts';
import React from 'react';

const CODChart = (props) => {
  const { data } = props;

  const config = {
    data,
    xField: 'time',
    yField: 'value',
    xAxis: false,

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

export default CODChart;
