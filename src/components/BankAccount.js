import React, { useContext } from 'react';
import { BankContext } from '../context/BankContext';

const BankAccount = () => {
  const { state, dispatch } = useContext(BankContext);

  const depositMoney = () => {
    dispatch({ type: 'DEPOSIT', amount: 10 });
  };

  const withdrawMoney = () => {
    dispatch({ type: 'WITHDRAW', amount: 10 });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">Bank Account</h1>
      <div className="text-2xl mb-5">Balance: ${state.balance}</div>
      <div className="space-x-4">
        <button
          onClick={depositMoney}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Deposit $10
        </button>
        <button
          onClick={withdrawMoney}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Withdraw $10
        </button>
      </div>
    </div>
  );
};

export default BankAccount;
