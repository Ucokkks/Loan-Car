import React from "react";

const Table = () => {
    return (
        <table className='w-full  border-separate border-spacing-y-4'>
            <thead>
              <tr className="">
                <th className="p-2">ID User</th>
                <th className="p-2">Username</th>
                <th className="p-2">Level</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className='bg-white'>
                  <td className='p-2 border rounded-md'>82173771123</td>
                  <td className='p-2 border rounded-md'>Wade Wilson</td>
                  <td className='p-2 border rounded-md'>{item % 2 === 0 ? 'Admin' : 'User'}</td>
                  <td className={`p-2 border rounded-md ${item % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item % 2 === 0 ? 'Active' : 'Non-active'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    )
}

export default Table