import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navs from './navbar/nav';
import Permintaan from './permintaan/permintaan';
import Dashboard from './dashboard/App';
import Vehicle from './vehicle/vehicle';
import User from './user/user';
import Peminjaman from './peminjaman/peminjaman';
import Transaksi from './transaksi/transaksi';
import Detail from './vehicle/detail'
import Edit from './vehicle/edit'
import Layout from './layout';

const AppRoutes = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navs />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/user" element={<User />} />
          <Route path="/peminjaman" element={<Peminjaman />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/permintaan" element={<Permintaan />} />
          <Route path='/vehicle/detail' element={<Detail/>}/>
          <Route path='/vehicle/edit' element={<Edit/>}/>
        </Routes>
      </Layout>
    </div>
  );
};

export default AppRoutes;