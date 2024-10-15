import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LastChart = () => {
  const chartOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Automatic', 'Manual'],
    colors: ['#433BFF', '#828282'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = [44, 55];

  return (
    <ReactApexChart options={chartOptions} series={series} type="pie" width={260}/>
  );
};

export default LastChart;