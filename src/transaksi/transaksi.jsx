import React from 'react';
import Inner from '../components/inner/inner';
import Header from '../components/header/header';
import Searchbar from '../components/searchbar/searchbar';
import PayTables from '../components/tabel_transaksi/tabel_transaksi';

const Transaksi = () => {
  return (
    <div>
      <Inner>
        <Header>Transactions</Header>
        <Searchbar/>
        <PayTables/>
      </Inner>
    </div>
  );
}

export default Transaksi;