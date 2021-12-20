import { Area } from '@ant-design/charts';
import React from 'react';

const StaticAbsorbChart = (props) => {
  const { data } = props;
  const config = {
    data,
    xField: 'row',
    yField: 'value',
    yAxis: {
      max: 2,
      // title: {
      //   text: 'density',
      // },
      // label: {
      //   formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      // },
    },
    slider: {
      start: 0.1,
      end: 0.9,
    },
    smooth: false,
  };

  return <Area {...config} />;
};

export default StaticAbsorbChart;
