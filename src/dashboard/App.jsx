import Inner from '../components/inner/inner';
import ChartTop from '../components/chart/chartTop';
import ChartMid from '../components/chart/chartMid';
import ChartBottom from '../components/chart/chartBottom';
import LastChart from '../components/chart/lastChart';


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