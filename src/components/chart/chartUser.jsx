import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartUser = () => {
  const [activeView, setActiveView] = useState('user');

  const GetData = () => {
    switch (activeView) {
      case 'user':
        return {
          series: [44, 55]
        };
      case 'admin':
        return {
          series: [70, 30]
        };
      default:
        return {
          series: []
        };
    }
  };

  const series = GetData().series;

  const chartOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Active', 'Non-active'],
    colors: ['#4CAF50', '#F44336'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  return (
    <div>
      <div className="mb-4 justify-start flex">
        <button
          className={`mr-2 px-4 py-2 rounded-xl ${activeView === 'user' ? 'bg-ButtonColor text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('user')}
        >
          User
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded-xl ${activeView === 'admin' ? 'bg-ButtonColor text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('admin')}
        >
          Admin
        </button>
      </div>
      <ReactApexChart options={chartOptions} series={series} type="pie" height={350} width={350} />
    </div>
  );
};

export default ChartUser;
