import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Inner from '../components/inner/inner';

// Chart Top component
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
    <ReactApexChart options={chartOptions} series={series} type="pie" width={380} />
  );
};

// Chart Mid component
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

// Chart Bottom component
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


//chart four

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


// Main component
const Main = () => {
  return (
    <div className="">
      <Inner>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 font-sf-pro">
        <div className="bg-gray-100 p-3 rounded-2xl mb-8 shadow-md w-[80%]">
          <p className='font-semibold text-center text-sm mb-2'>Message Status</p>
          <ChartTop />
        </div>
        
        <div className="bg-gray-100 p-4  w-[35%] ml-80 rounded-xl">
          <div className="overflow-x-auto">
            <h2 className='font-sf-pro font-bold mb-6 text-left ml-4'>Driver Populer</h2>
            <table className="w-[15%]">
              <thead>
                <tr>
                  <th className="px-4 text-left">No</th>
                  <th className="px-4 text-left">Data</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((item) => (
                  <tr key={item}>
                    <td className="px-4 py-2">{item}</td>
                    <td className="px-4 py-2">Driver {item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-2xl shadow-md w-[780px]">
          <ChartMid />
        </div>

        <div className="bg-gray-100 p-4  w-[35%] ml-80 rounded-xl mt-5 ">
          <div className="overflow-x-auto">
            <h2 className='font-sf-pro font-bold mb-6 text-left ml-4'>Driver Populer</h2>
            <table className="w-[15%]">
              <thead>
                <tr>
                  <th className="px-4 text-left">No</th>
                  <th className="px-4 text-left">Data</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((item) => (
                  <tr key={item}>
                    <td className="px-4 py-2">{item}</td>
                    <td className="px-4 py-2">Driver {item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 font-sf-pro mt-7">
        <div className="">

        
          <div className="p-5 bg-gray-100 w-56 h-48 rounded-lg col-span-1">
            <p className="font-semibold text-md mb-3">Jarak Terjauh</p>
            <h1 className="font-bold text-4xl justify-center text-center">20 KM</h1>
            <p className="font-medium text-md text-slate-300 text-center mb-3">15/3/2024</p>
          </div>
            <div className="bg-gray-100 p-4 rounded-2xl shadow-md col-span-1 mb-56 w-[50%] flex flex-col justify-start mt-10">
            <LastChart className="mt-0" /> {/* Removed margin-top here */}
          </div>
        </div>

    <div className="flex justify-center items-center col-span-1">
      <div className="p-5 rounded-2xl max-w-md mb-14 mx-auto mr-[700px]">
        <ChartBottom />
      </div>
    </div>
  </div>
    </Inner>
    </div>
  );
};
export default Main;