import React from "react";
import foto from "/src/assets/gunawan.jpg"

const LoanTable = () => {

    return(
        <table className='w-full  border-separate border-spacing-y-4 max-w-[97%]'>
        <thead>
          <tr className="bg-white">
            <th className="p-2">User</th>
            <th className="p-2">Loan ID</th>
            <th className="p-2">Vehicle ID</th>
            <th className="p-2">User ID</th>
            <th className="p-2">From</th>
            <th className="p-2">To</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item} className='bg-white'>
              <td className='p-2 border rounded-md'>
                <div className="inline-flex">
                    <img src={foto} alt="PP" className="w-10 rounded-full"/>
                    <p className="ml-3 mt-3">Username</p>
                </div>
              </td>
              <td className='p-2 border rounded-md'>12345678</td>
              <td className='p-2 border rounded-md'>15646616</td>
              <td className='p-2 border rounded-md'>81662666</td>
              <td className="p-2 border rounded-md">SMK Taruna Bhakti</td>
              <td className="p-2 border rounded-md">Puncak</td>
              <td className={`p-2 border rounded-md ${item % 2 === 0 ? 'text-[#A4830C]' : 'text-green-500'}`}>
                {item % 2 === 0 ? 'Ongoing' : 'Finished'}
                </td>
              <td className="p-2 border rounded-md">21 July 2024</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

};

export default LoanTable;