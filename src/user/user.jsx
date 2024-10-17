import React from 'react';
import Inner from '../components/inner/inner';
import Searchbar from '../components/searchbar/searchbar';
import Table from '../components/UserTable/table';
import ChartUser from '../components/chart/chartUser';
import PopulerUserUser from '../components/top/userTop';

function User() {
  return (
    <div className='font-sf-pro'>
      <Inner>
        <div className="">
          <p className='text-xl ml-6'>Pencarian Pengguna</p>
        </div>
        <div className="">
          <Searchbar />
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="mt-8 md:w-2/3">
            < Table />
          </div>
          <div className="md:w-1/3 flex flex-col space-y-4 ml-9 ">
            <div className="border border-gray-400 rounded-xl p-5 h-40%">
              <ChartUser />
            </div>
            <div className="">
              <PopulerUserUser />
            </div>
          </div>
        </div>
      </Inner>
    </div>
  );
}

export default User;