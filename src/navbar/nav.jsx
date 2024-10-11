import React from 'react';
import { Link } from 'react-router-dom';
import dashLogoSrc from '../assets/dash_logo.svg';
import peminjaman from '../assets/peminjaman_logo.svg';
import permintaan from '../assets/permintaan_logo.svg';
import tsx from '../assets/tsx_logo.svg';
import user from '../assets/user_logo.svg';
import vehi from '../assets/vehi_logo.svg';
import dropDown from '../assets/left-btn.svg';
import foto from '../assets/gunawan.jpg';

const Navs = () => {
  return (
    <nav className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] h-screen  fixed left-0 top-0 overflow-y-auto">
      <div className="flex items-center gap-3  rounded-xl p-2 drop-shadow-md mt-20 mb-8 mx-2">
        <img src={foto} alt="gunawan" className='rounded-full w-9 h-9' />
        <p className="hidden lg:block">Username</p>
        <img src={dropDown} alt="dropdownAccount" className='w-5 h-5 cursor-pointer pt-1 hidden lg:block'/>
      </div>
      <div className="space-y-8">
        <NavItem to="/dashboard" icon={dashLogoSrc} text="Dashboard" />
        <NavItem to="/vehicle" icon={vehi} text="Vehicle" />
        <NavItem to="/user" icon={user} text="User" />
        <NavItem to="/peminjaman" icon={peminjaman} text="Peminjaman" />
        <NavItem to="/transaksi" icon={tsx} text="Transaksi" />
        <NavItem to="/permintaan" icon={permintaan} text="Permintaan" />
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, text }) => (
  <Link to={to} className='flex items-center justify-center lg:justify-start gap-4 px-4'>
    <img src={icon} alt={`${text} Logo`} className="w-7 h-7" />
    <span className="hidden lg:block">{text}</span>
  </Link>
);

export default Navs;