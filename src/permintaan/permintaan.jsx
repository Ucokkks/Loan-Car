import React from 'react';
import Inner from '../components/inner/inner.jsx';
import Notif from '../components/notification/notif.jsx';

const Permintaan = () => {
  return (
    <div className='font-sf-pro'>
      <Inner>
        <div className="mt-16 text-3xl mb-5">
          <h1 className='font-semibold'>Loan Request</h1>
        </div>
        <div className="">
           <Notif/>
        </div>
      </Inner>
    </div>
  );
};

export default Permintaan;