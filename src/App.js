import React from 'react';
import BankAccount from './components/BankAccount';
import { BankProvider } from './context/BankContext';

const App = () => {
  return (
    <BankProvider>
      <BankAccount />
    </BankProvider>
  );
};

export default App;
