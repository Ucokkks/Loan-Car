import React from 'react';
import Inner from '../components/inner/inner.jsx';
import Header from '../components/header/header.jsx';
import Searchbar from '../components/searchbar/searchbar.jsx';
import notif from '../assets/notif.svg';
import Kendaraan from '../components/button_kendaraan/button_kendaraan.jsx';
import Card from '../components/card_mobil/card_mobil.jsx';

const Vehicle = ()  => {
  return (
    <div>
      <title>Vehicle</title>
      <Inner>
      <a href="">
        <img className="float-right right-0 top-0 hover:bg-LightGray hover:rounded-full" src={notif} alt="" /> 
      </a>
          <br />
      <Header>Ketersediaan Mobil</Header>
        <div>
          <div className='lg:inline-flex relative'>
            <Searchbar/>
            <div className='absolute mt-3 lg:mt-8 lg:ml-[500px] xl:ml-[800px] 2xl:ml-[935px] '>
              <Kendaraan>Kendaraan Baru</Kendaraan>
            </div> 
          </div>
        </div>

        <div className='mt-20 lg:mt-4'>
          <Card/>
          <Card/>
          <Card/>
        </div>
       </Inner>
    </div>
  );
};

export default Vehicle;