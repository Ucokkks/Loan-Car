import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashLogoSrc from '../assets/dash_logo.svg';
import peminjaman from '../assets/peminjaman_logo.svg';
import permintaan from '../assets/permintaan_logo.svg';
import tsx from '../assets/tsx_logo.svg';
import user from '../assets/user_logo.svg';
import vehi from '../assets/vehi_logo.svg';
import dropDown from '../assets/left-btn.svg';
import dropDownF from '../assets/top-btn.svg';
import foto from '../assets/gunawan.jpg';
import account from '../assets/acount-logo.svg';
import edit from '../assets/edit-logo.svg';

const Navs = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-[12%] md:w-[6%] lg:w-[14%] xl:w-[12%] h-screen fixed left-0 top-0 overflow-y-auto font-sf-pro font-bold">
      <div className="mt-20 mb-8 mx-2 relative">
        <div className={`bg-white drop-shadow-md rounded-xl ${isDropdownOpen ? 'rounded-b-none' : ''}`}>
          <div className="flex items-center gap-3 p-2">
            <img src={foto} alt="gunawan" className='rounded-full w-9 h-9' />
            <p className="hidden lg:block font-sf-pro font-bold">Username</p>
            <button onClick={toggleDropdown}>
              <img 
                src={isDropdownOpen ? dropDownF : dropDown} 
                  alt="dropdownAccount" 
                  className='cursor-pointer pt-1 hidden lg:block w-7 h-7 transition-transform duration-300'
                  style={{ transform: isDropdownOpen ? 'rotate(360deg)' : 'rotate(0deg)' }}

                
              />
            </button>
          </div>
          <div className="relative">
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white rounded-b-xl shadow-md z-100">
                <DropdownDetail />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <NavItem to="/dashboard" icon={dashLogoSrc} text="Dashboard" isActive={location.pathname === '/dashboard'} />
        <NavItem to="/vehicle" icon={vehi} text="Vehicle" isActive={location.pathname === '/vehicle'} />
        <NavItem to="/user" icon={user} text="User" isActive={location.pathname === '/user'} />
        <NavItem to="/peminjaman" icon={peminjaman} text="Loan" isActive={location.pathname === '/peminjaman'} />
        <NavItem to="/transaksi" icon={tsx} text="Transactions" isActive={location.pathname === '/transaksi'} />
        <NavItem to="/permintaan" icon={permintaan} text="Request" isActive={location.pathname === '/permintaan'} />
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, text, isActive }) => (
  <Link 
    to={to} 
    className={`flex items-center gap-3 rounded-xl p-2 mx-2 transition-colors duration-200 ease-in-out 
      ${isActive 
        ? 'bg-[#1B3554] text-white' 
        : 'hover:bg-[#1B3554] hover:text-white'
      } group`}
  >
    <img 
      src={icon} 
      alt={`${text} Logo`} 
      className={`w-9 h-9 ${isActive ? 'brightness-0 invert' : 'group-hover:brightness-0 group-hover:invert'}`} 
    />
    <span className="hidden lg:block">{text}</span>
  </Link>
);

const DropdownDetail = () => {
  return (
    
    <div className="bg-white rounded-b-2xl shadow-md">
      <div className="flex items-center gap-2 p-3 hover:bg-gray-100 mt-2 ml-1">
        <img src={account} alt="" className="w-5 h-5" />
        <p className='font-medium'>Account</p>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-gray-100 mb-20 ml-2">
        <img src={edit} alt="" className="w-5 h-5" />
        <p className='font-medium'>Edit Profile</p>
      </div>
      <div className="flex justify-center items-center bg-transparent">
        <button className="hover:bg-gray-100 text-red-600 font-semibold rounded-xl text-center mb-2 border-2 border-LogOut px-4 py-2">
          Log out
        </button>
      </div>
    </div>

  );
};

export default Navs;