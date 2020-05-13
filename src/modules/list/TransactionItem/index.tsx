import React from 'react';
import { Link } from 'react-router-dom';

import Label from '../../../components/Label';
import { convertDate } from '../../../utils/date';

import { Transaction } from '../types';
import Images from '../../../assets';
import './styles.css';
import { currency } from '../../../utils/string';

type Props = {
  data: Transaction;
};

function TransactionItem({ data }: Props) {
  const {
    id,
    amount,
    status,
    created_at: createdAt,
    sender_bank: senderBank,
    beneficiary_bank: beneficiaryBank,
  } = data;

  const color = status === 'SUCCESS' ? 'success' : '';
  const transactionStatus = status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';

  const bankName = (name: string) => (
    <span className="span__bold">
      {name.toUpperCase()}
    </span>
  );

  return (
      <Link to={id}>
        <div className={`transaction-item-wrapper ${color}`}>
          <div>
            <div>
              {bankName(senderBank)}
              <img src={Images.arrowRight} alt="arrow-right" />
              {bankName(beneficiaryBank)}
            </div>
            <span>{data.beneficiary_name.toUpperCase()}</span>
            <span>{currency(amount)} {convertDate(createdAt)}</span>
          </div>
          <Label status={status}>{transactionStatus}</Label>
        </div>
      </Link>
  );
}

export default TransactionItem;
