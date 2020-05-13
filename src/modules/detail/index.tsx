import React from 'react';
import './styles.css';
import Images from '../../assets';
import { Transaction } from '../list/types';
import Card from '../../components/Card';
import Label from '../../components/Label';
import { convertDate } from '../../utils/date';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useTransactionList } from '../../App';
import { currency } from '../../utils/string';

function Detail() {
  let { id } = useParams();
  const history = useHistory();
  const [data] = useTransactionList();
  // @ts-ignore
  const transactionData: Transaction = data[id];

  if (!transactionData) {
    return <Redirect to="/" />
  }

  const {
    amount,
    remark,
    status,
    unique_code: code,
    created_at: createdAt,
    sender_bank: senderBank, 
    account_number: accountNumber,
    beneficiary_bank: beneficiaryBank,
    beneficiary_name: beneficiaryName,
  } = transactionData;
  const transactionStatus = status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';

  return (
    <div className="detail-wrapper">
      <h1>Detail Transaksi</h1>
      <Card padding="1rem" spaced>
        <b>ID TRANSAKSI: #{id}</b>
        <Label status={status}>{transactionStatus}</Label>
      </Card>
      <Card padding="1rem" middle={false}>
        <img className="inbox" src={Images.inbox} alt="Inbox" />
        <div style={{ marginLeft: '2rem',flexDirection: 'column', alignItems: 'flex-start'}}>
          <h4>PENGIRIM</h4>
          <span>{senderBank.toUpperCase()}</span>
          <h4>PENERIMA</h4>
          <span>{beneficiaryBank.toUpperCase()}</span>
          <span>{accountNumber}</span>
          <span>{beneficiaryName}</span>
          <h4>NOMINAL</h4>
          <span>{currency(amount)}</span>
          <span><b>Kode unik:</b> {code}</span>
          <h4>CATATAN</h4>
          <span>{remark}</span>
          <h4>WAKTU DIBUAT</h4>
          <span>{convertDate(createdAt)}</span>
        </div>
      </Card>
      <div>
        <button
          className="button-back"
          onClick={() => history.goBack()}
        >
            Kembali
        </button>
      </div>
    </div>
  );
}

export default Detail;
