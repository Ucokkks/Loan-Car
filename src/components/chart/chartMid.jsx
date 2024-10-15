import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartMid = () => {
  const [activeView, setActiveView] = useState('daily');

  const getChartData = () => {
    switch (activeView) {
      case 'daily':
        return {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [30, 40, 35, 50, 49, 60, 70]
        };
      case 'weekly':
        return {
          categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          data: [200, 250, 300, 280]
        };
      case 'monthly':
        return {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          data: [1000, 1200, 1100, 1300, 1400, 1500, 1450, 1600, 1700, 1800, 1900, 2000]
        };
      default:
        return {
          categories: [],
          data: []
        };
    }
  };

  const { categories, data } = getChartData();

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: categories,
    }
  };

  const series = [{
    name: "Total Meminjam",
    data: data
  }];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Number of Orders</h2>
      <div className="mb-4 justify-center flex ">
        <button 
          className={`mr-2 px-4 py-2 rounded-xl ${activeView === 'daily' ? 'bg-ButtonColor text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('daily')}
        >
          Daily
        </button>
        <button 
          className={`mr-2 px-4 py-2 rounded-xl ${activeView === 'weekly' ? 'bg-ButtonColor text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('weekly')}
        >
          Weekly
        </button>
        <button 
          className={`px-4 py-2 rounded-xl ${activeView === 'monthly' ? 'bg-ButtonColor text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('monthly')}
        >
          Monthly
        </button>
      </div>
      <ReactApexChart options={chartOptions} series={series} type="line" height={350} width={750} />
    </div>
  );
};

export default ChartMid;