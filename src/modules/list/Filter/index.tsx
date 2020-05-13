import React, { useState } from 'react';
import './styles.css';
import Images from '../../../assets';
import { Transaction } from '../types';

type Props = {
  onFilter: (query: string) => void;
  onSort: (func: any) => void;
};

const sortConfig = [
  {
    title: 'Nama A-Z',
    compareFunc: (a: Transaction, b: Transaction) => 
      a.beneficiary_name > b.beneficiary_name ? 1 : b.beneficiary_name > a.beneficiary_name ? -1 : 0,
  },
  {
    title: 'Nama Z-A',
    compareFunc: (a: Transaction, b: Transaction) => 
      a.beneficiary_name < b.beneficiary_name ? 1 : b.beneficiary_name < a.beneficiary_name ? -1 : 0,
  },
  {
    title: 'Tanggal terbaru',
    compareFunc: (a: Transaction, b: Transaction) => 
      a.created_at > b.created_at ? 1 : b.created_at > a.created_at ? -1 : 0,
  },
  {
    title: 'Tanggal terlama',
    compareFunc: (a: Transaction, b: Transaction) => 
      a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0,
  },
];


function Filter({ onFilter, onSort }: Props) {
  const [sort, setSort] = useState<string | null>(null);

  return (
    <div className="filter_wrapper">
      <input
        type="text"
        placeholder="Cari nama atau bank"
        onChange={(e) => onFilter(e.target.value)}
      />
      <div className="sort-wrapper">
        <button className="sort-button">
          {sort ? sort.toUpperCase() : 'URUTKAN'}
          <img src={Images.chevronDown} alt="chevron-down" />
        </button>
        <div className="sort-list">
          {sortConfig.map(({title, compareFunc}) => (
            <button key={title} onClick={()=> {
              setSort(title);
              onSort(compareFunc);
            }}>
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
