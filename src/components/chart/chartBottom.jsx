import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartBottom = () => {
  const colors = ['#008FFB', '#00E396', '#FEB019', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
        }
      },
      background: {
        enabled: true,
        foreColor: '#333',
        opacity: 0.1,
        text: 'DRIVER STATS',
        fontSize: '100px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold'
      }
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['John', 'Doe'],
        ['Joe', 'Smith'],
        ['Jake', 'Williams'],
        'Amber',
        ['Peter', 'Brown'],
        ['Mary', 'Evans'],
        ['David', 'Wilson'],
        ['Lily', 'Roberts'], 
      ],
      labels: {
        style: {
          colors: colors,
          fontSize: '12px'
        }
      }
    }
  };

  const series = [{
    name: 'Trips',
    data: [44, 55, 41, 67, 22, 43, 21, 33]
  }];

  return (
    <div className="chart-container mr-12">
      <ReactApexChart options={options} series={series} type="bar" height={350} width={800} />
    </div>
  );
};

export default ChartBottom;