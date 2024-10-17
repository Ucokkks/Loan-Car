import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartTop = () => {
  const chartOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Accepted', 'Rejected'],
    colors: ['#4CAF50', '#F44336'],
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
    <ReactApexChart options={chartOptions} series={series} type="pie" width={280} height={150} />
  );
};

export default ChartTop;