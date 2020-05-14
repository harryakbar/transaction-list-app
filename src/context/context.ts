import React from 'react';
import { useContext } from "react";

export const TransactionListContext = React.createContext([{}, ({type, payload}: {type: any, payload: any}) => {}]);
export const useTransactionList = () => {
  const contextValue = useContext(TransactionListContext);
  return contextValue;
};
