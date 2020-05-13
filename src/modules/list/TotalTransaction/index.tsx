import React from 'react';

import { currency } from '../../../utils/string';
import './styles.css';

type Props = {
  total: number
};

function TotalTransaction({total}: Props) {
  return (
    <div className="total-transaction-wrapper">
      <h3>Halo kak!</h3>
      <p>Kamu telah melakukan transaksi sebesar <span>{currency(total)}</span> sejak menggunakan Flip.</p>
    </div>
  );
}

export default TotalTransaction;
