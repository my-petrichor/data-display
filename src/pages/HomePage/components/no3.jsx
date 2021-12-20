import { Line } from '@ant-design/charts';
import React from 'react';

const NO3Chart = (props) => {
  const { data } = props;

  const config = {
    data,
    xField: 'time',
    yField: 'value',
    xAxis: false,
    // color: ({ type }) => {
    //   switch (type) {
    //     case 'NO3':
    //       return '#b37feb';
    //     case 'TSS':
    //       return '#87e8de';
    //     case 'COD':
    //       return '#ffa940';
    //   }
    // },

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

export default NO3Chart;
