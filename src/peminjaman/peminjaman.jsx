import React from 'react';
import Inner from '../components/inner/inner';
import Searchbar from '../components/searchbar/searchbar';
import Header from '../components/header/header';
import LoanData from '../components/loan/loandata'
import LoanTable from '../components/loan/loantable';

const Peminjaman = () => {
  return (
      <Inner>
        <div className='inline-flex relative w-[97%]'>
          <div>
            <Header>Loan</Header>
            <Searchbar/>
          </div>
          <div>
          <div className='absolute float-right right-0'>
            <LoanData/>
          </div>  
          </div>
        </div>
        <div className='mt-5'>
          <LoanTable/>  
        </div>
      </Inner>
  );
}

export default Peminjaman;