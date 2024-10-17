import React from "react";
import foto from '../../assets/gunawan.jpg';

const PopulerUser = () => {
    return (
                    <div className="bg-gray-100 p-4 rounded-xl flex-1">
                  <h2 className='font-sf-pro font-bold mb-4 text-left ml-4'>User paling pinjam</h2>
                  <div className="overflow-x-auto">
                      <table className="w-full">
                          <thead>
                              <tr>
                                  <th className="px-4 text-left">No</th>
                                  <th className="px-4 text-left">Data</th>
                              </tr>
                          </thead>
                          <tbody>
                              {[1, 2, 3, 4].map((item) => (
                                  <tr key={item}>
                                      <td className="px-4 py-2 font-semibold flex gap-2">
                                          {item}
                                          <img src={foto} alt={`Driver ${item}`} className="w-6 h-6 rounded-full" />
                                      </td>
                                      <td className="px-4 py-2">Driver {item}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
    )
}

export default PopulerUser;