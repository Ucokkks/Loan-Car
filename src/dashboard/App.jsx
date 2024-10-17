import Inner from '../components/inner/inner';
import ChartTop from '../components/chart/chartTop';
import ChartMid from '../components/chart/chartMid';
import ChartBottom from '../components/chart/chartBottom';
import LastChart from '../components/chart/lastChart';
import Drive from '../components/top/populer';
import PopulerUserUser from '../components/top/userTop';


const Main = () => {
  return (
    <div className="font-sf-pro">
      <Inner>
        <div className="">
          <h1 className='text-4xl ml-4 font-bold mb-5 '>Dashboard</h1>
        </div>
        <div className="flex mb-4">
          <div className="bg-gray-100 p-3 rounded-2xl mb-2 shadow-md w-[25%] h-[60%]">
            <p className='font-semibold text-center text-sm mb-2'>Message Status</p>
            <ChartTop />
          </div>

          <div className="bg-gray-100 p-5 rounded-xl mb-4 w-[40%] ml-12 h-[205px] shadow-lg">
              <p className="font-semibold text-md mb-1">Jarak Terjauh</p>
              <h1 className="font-bold text-4xl mb-1">20 KM</h1>
              <p className="font-medium text-sm text-gray-400">15/3/2024</p>
            </div>
        </div>
        <div className="flex mb-4 flex-col md:flex-row  md:w-2/3">
          <div className="bg-gray-100 p-4 rounded-2xl shadow-md flex-grow mr-4 h-[70%]">
            <ChartMid />
          </div>
          <div className="md:w-1/3 flex flex-col space-y-4 ml-20   mt-[-16rem]"> 
              <div className="">
                <Drive />
              </div>
              <div className="">
                <PopulerUserUser />
              </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  mt-16">
          <div className="md:w-1/3 mr-2"> 

            <div className="bg-gray-100 p-4 rounded-lg w-[75%]">
              <LastChart />
            </div>
          </div>
          <div className="md:w-2/3 mr-6">
            <div className="bg-white p-5 rounded-lg h-full">
              <ChartBottom />
            </div>
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default Main;