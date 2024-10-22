import { useState } from "react";
import foto from "/src/assets/gunawan.jpg"

const Notif = () => {
  var value = [1, 2, 3]
  const [option, setOption] = useState('op1');

  const op1 = () => {
    setOption('op1');
  }

  const op2 = () => {
    setOption('op2');
  };

  if (option == 'op1') {
    value = [1, 2, 3];
  }
  if (option == 'op2') {
    value = [1, 2, 3, 4, 5];
  };

  return (
    <>
      <div className="mt-16 font-sf-pro text-lg">
        <button 
          onClick={op1} 
          className={`mr-8 hover:font-bold ${option == 'op1' ? 'underline font-bold underline-offset-8' : 'no-underline'}`}
        >
          Incoming
        </button>
        <button 
          onClick={op2} 
          className={`hover:font-bold ${option == 'op2' ? 'underline font-bold underline-offset-8' : 'no-underline'}`}
        >
          History
        </button>
      </div>

      <div className="relative overflow-x-auto mt-16">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-black uppercase bg-white">
          </thead>
          <tbody>
            {option === 'op1' ? (
              <tr className="bg-white border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                  <img src={foto} alt="" className="w-8 h-8 rounded-xl"/>
                  <p className="mt-2 ml-3 font-bold">Username (nama) memulai Permintaan untuk meminjam mobil</p>
                </th>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 bg-green-500 text-white rounded-2xl">Accept</button>
                  <button className="ml-2 p-2 bg-red-600 text-white rounded-2xl">Decline</button>
                </td>
              </tr>
            ) : (
            
              <>
                <tr className="bg-white border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                    <img src={foto} alt="" className="w-8 h-8 rounded-xl"/>
                    <div className="ml-3">
                      <p className="font-bold">Username (nama) meminjam mobil</p>
                      <p className="text-gray-500 text-xs">20 Oktober 2024 - 25 Oktober 2024</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-right">
                    <span className="p-2 bg-green-100 text-green-800 rounded-2xl">Completed</span>
                  </td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                    <img src={foto} alt="" className="w-8 h-8 rounded-xl"/>
                    <div className="ml-3">
                      <p className="font-bold">Username (nama) meminjam mobil</p>
                      <p className="text-gray-500 text-xs">15 Oktober 2024 - 18 Oktober 2024</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-right">
                    <span className="p-2 bg-red-100 text-red-800 rounded-2xl">Cancelled</span>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Notif;