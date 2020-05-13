import React from 'react';
import { Transaction } from '../modules/list/types';

type Props = {
  children: string;
  status: Transaction['status'];
}

function Label({ status, children }: Props) {
  return (
    <span
      style={{
        border: '2px solid',
        borderRadius: '4px',
        padding: '0.35rem 0.5rem',
        color: status === 'SUCCESS' ? '#FFF' : '#000',
        borderColor: status === 'SUCCESS' ? '#56b586' : '#FD6542',
        backgroundColor: status === 'SUCCESS' ? '#56b586' : '#FFF',
      }}
    >
      {children}
    </span>
  );
}

export default Label;
