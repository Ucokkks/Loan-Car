import { useState } from "react";
import foto from "/src/assets/gunawan.jpg"


const PayTables = () => {

  var value =[1,2,3]
  const[option, setOption] = useState('op1');

  const op1 = () => {
    setOption('op1');
  }

  const op2 = () => {
    setOption('op2');
    
  };

  if(option == 'op1'){
    value = [1,2,3];
  }
  if(option == 'op2'){
    value = [1,2,3,4,5];
  };

    return(
        <>
        <div className="mt-10 font-sf-pro text-lg">
            <button onClick={op1} className={`mr-8 hover:font-bold ${option == 'op1' ? 'underline font-bold underline-offset-8' : 'no-underline'}`}>Overview</button>
            <button onClick={op2} className={`hover:font-bold ${option == 'op2' ? 'underline font-bold underline-offset-8' : 'no-underline'}`}>History</button>
        </div>

        <table className='w-full  border-separate border-spacing-y-4 max-w-[97%]'>
        <thead>
          <tr className="bg-white">
            <th className="p-2">User</th>
            <th className="p-2">Loan ID</th>
            <th className="p-2">Vehicle ID</th>
            <th className="p-2">Status</th>
            <th className="p-2">Bank</th>
            <th className="p-2">Card</th>
            <th className="p-2">Postal Code</th>
            <th className="p-2">Pay Due</th>
            <th className="p-2">Remaining</th>
            <th className="p-2">Amount Due</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {value.map((item) => (
            <tr key={item} className='bg-white'>
              <td className='p-2 border rounded-md'>
                <div className="inline-flex">
                    <img src={foto} alt="PP" className="w-10 rounded-full"/>
                    <p className="ml-3 mt-3">Username</p>
                </div>
              </td>
              <td className='p-2 border rounded-md'>12345678</td>
              <td className='p-2 border rounded-md'>15646616</td>
              <td className={`p-2 border rounded-md ${item % 2 === 0 ? 'text-[#003D84]' : 'text-red-500'}`}>
                {item % 2 === 0 ? 'Upcoming' : 'Overdue'}</td>
              <td className="p-2 border rounded-md">Bank apcb</td>
              <td className="p-2 border rounded-md">1234 ****</td>
              <td className="p-2 border rounded-md">54321</td>
              <td className="p-2 border rounded-md">21 July, 11.12</td>
              <td className="p-2 border rounded-md">1 Week</td>
              <td className="p-2 border rounded-md">Rp 1.000.00</td>
            </tr>
          ))};
        </tbody>
        </table>
        </>
    );    

};

export default PayTables;