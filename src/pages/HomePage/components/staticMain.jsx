import { Area } from '@ant-design/charts';
import React from 'react';

const StaticMainChart = (props) => {
  const { data } = props;

  const config = {
    data,
    xField: 'row',
    yField: 'value',
    seriesField: 'name',
    legend: {
      position: 'top',
    },
    color: ({ name }) => {
      switch (name) {
        case 'ZeroMain':
          return '#ffa940';
        case 'MeasureMain':
          return '#d3f261';
      }
    },
    slider: {
      start: 0.1,
      end: 0.9,
    },

    smooth: false,
  };

  return <Area {...config} />;
};

export default StaticMainChart;
