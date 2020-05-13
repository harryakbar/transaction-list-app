import React, { useEffect, useState } from 'react';

import Filter from './Filter';
import TransactionItem from './TransactionItem';
import TotalTransaction from './TotalTransaction';

import './styles.css';
import { Transaction } from './types';
import { useAPI } from '../../utils/useAPI';
import { useTransactionList } from '../../App';

function List() {
  const [fetchData, result] = useAPI();
  const [, dispatch] = useTransactionList();
  const fetchedData: Transaction[] = Object.keys(result || {}).map(id => result[id]);
  const [formattedData, setFormattedData] = useState<Transaction[]>([]);

  useEffect(() => {
    if (!result) {
      fetchData();
    } else {
      setFormattedData(Object.keys(result || {}).map(id => result[id]));
      // @ts-ignore
      dispatch({type: 'load', payload: result});
    }
  }, [dispatch, fetchData, result]);

  const onSort = (compare: any) => {
    if (formattedData) {
      const sortedData = [...formattedData].sort(compare);
      setFormattedData(sortedData);
    }
  };

  const onFilter = (query: string) => {
    if (formattedData) {
      const filteredData = [...fetchedData].filter((item) => {
        const searchString = query.toLowerCase();
        const name = item.beneficiary_name.toLowerCase().includes(searchString);
        const sender = item.sender_bank.toLowerCase().includes(searchString);
        const beneficiary = item.beneficiary_bank.toLowerCase().includes(searchString);
        return name || sender || beneficiary;
      });
      setFormattedData(filteredData);
    }
  }
  
  const totalTransaction = fetchedData.reduce((prev, current) => prev + current.amount ,0);
  return (
    <div className="wrapper">
      <h1>Daftar Transaksi</h1>
      <TotalTransaction total={totalTransaction} />
      <Filter
        onFilter={(query)=> onFilter(query)}
        onSort={(compare)=> onSort(compare)}
      />
      <div className="transaction-list">
        {formattedData.map((item) => 
          <TransactionItem key={item.id} data={item} />
        )}
      </div>
    </div>
  );
}

export default List;
